const admin = require('firebase-admin');
let serviceAccount = require('../tincisnocrm-firebase-adminsdk-yk8dd-4ddce8e128.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin.firestore();

//This works for running local servers