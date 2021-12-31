import { firestore } from './firebase-admin';

export async function getAccounts(userId) {
  const querySnapshot = await firestore.collection('accounts').where('owner', '==', userId).get();

  const list = [];
  querySnapshot.forEach((doc) => {
    list.push(doc.data());
  });
  return list;
}
export default getAccounts;
