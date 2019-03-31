const admin = require('firebase-admin');
const serviceAccount = process.env.FIREBASE_API || require('./firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://eventsapp-frontend-auth.firebaseio.com"
});

module.exports = admin;