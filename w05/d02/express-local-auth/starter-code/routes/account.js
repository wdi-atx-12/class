function getSignupPage(req, res) {
  res.send('Sign-up page coming soon.');
}

function getLoginPage(req, res) {
  res.send('Login page coming soon.');
}

// export
module.exports = {
  getSignupPage: getSignupPage,
  getLoginPage: getLoginPage,
};
