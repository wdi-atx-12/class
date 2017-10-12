const User = require('../models/user');
const FacebookStrategy = require('passport-facebook').Strategy;

function setupFacebookAuthStrategy(passport) {
  // the serialize/deserialize methods should probably be in their own functions
  // but whatevs. we're being a bit lazy.
  passport.serializeUser(function(user, done) {
    done(null, user._id); // this is associated with the session cookie
  })

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user); // this becomes req.user
    });
  });

  // set up the actual Facebook auth strategy (and call it 'facebook')
  passport.use('facebook', new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    enableProof: true,
    profileFields: ['name', 'emails', 'photos'],
  }, function(access_token, refresh_token, profile, done) {
    // this function will get called when a user authenticates with Facebook
    // `profile` will include requested fields from Facebook

    User.findOne({'fb.id': profile.id}, function(err, user) {
      if (err) {
        // something went wrong with fetching user from Mongo DB
        done(err);
      } else if (user) {
        // user already exists in DB with FB details
        done(null, user);
        // TODO: update user record with latest info
      } else {
        // user is new to us, we should save a new User record
        const newUser = new User();
        newUser.fb = {};
        newUser.fb.id = profile.id;
        newUser.fb.access_token = access_token;
        newUser.fb.firstName = profile.name.givenName;
        newUser.fb.lastName = profile.name.familyName;
        if (profile.emails && profile.emails.length > 0) {
          newUser.fb.email = profile.emails[0].value;
        }
        if (profile.photos && profile.photos.length > 0) {
          newUser.fb.profilePhoto = profile.photos[0].value;
        }
        newUser.save(function(err, savedUser) {
          if (err) {
            done(err);
          } else {
            done(null, savedUser);
          }
        });
      } // end else
    }); // end find user callback

  }));
}

module.exports = setupFacebookAuthStrategy;







