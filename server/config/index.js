require("dotenv").config();
module.exports = {
  MONGO_URI : process.env.MONGO_URI,
  FIREBASE_PROJECT_ID : process.env.FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY : process.env.FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_EMAIL : process.env.FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID : process.env.FIREBASE_CLIENT_ID,
  FIREBASE_PRIVATE_KEY_ID : process.env.FIREBASE_PRIVATE_KEY_ID
};