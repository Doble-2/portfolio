
var admin = require("firebase-admin");

var serviceAccount =  require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);

try{
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
} catch (e) {}


export const firestore= admin.firestore()