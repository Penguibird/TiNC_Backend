const admin = require('firebase-admin');
let serviceAccount = require('../new-project-81648-firebase-adminsdk-5bhd7-518ada9466.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://new-project-81648.firebaseio.com"
});

module.exports = admin.firestore();

//This works for running local servers