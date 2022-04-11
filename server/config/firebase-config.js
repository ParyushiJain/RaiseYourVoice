
var admin = require("firebase-admin");
const {FIREBASE_PROJECT_ID,FIREBASE_PRIVATE_KEY,FIREBASE_CLIENT_EMAIL} = require('../config')
admin.initializeApp({
  credential: admin.credential.cert({
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

module.exports = admin;