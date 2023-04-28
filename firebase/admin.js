
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

try{
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
} catch (e) {}


export const firestore= admin.firestore()