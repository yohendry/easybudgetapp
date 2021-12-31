import * as admin from 'firebase-admin';

const serviceAccount = require('./firebase-admins.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const firestore = admin.firestore();
const auth = admin.auth();

export { firestore, auth };
