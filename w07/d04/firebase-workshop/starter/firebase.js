import firebase from 'firebase';

// Provided by the Firebase console
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

// Firebase instance
firebase.initializeApp(config);

// Firebase doesn't return data as an array but as a parent object
//  containing child objects. This utility function will extract
//  the child objects into an array and place the key as 'id'
const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

const database = firebase.database();
const auth = firebase.auth();

export { database, auth };
export { firebaseListToArray };
