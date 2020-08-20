// Require firebase admin and the service account file.
var admin = require('firebase-admin');
const serviceAccount = require('./google_service_key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports.db = db;