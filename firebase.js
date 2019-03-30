const admin = require('firebase-admin');
const serviceAccount = require('./firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(process.env.FIREBASE_API || serviceAccount),
  databaseURL: "https://eventsapp-frontend-auth.firebaseio.com"
});

module.exports = admin;