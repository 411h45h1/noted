import firebase from "../firebase";
import "firebase/firestore";

const db = firebase.firestore();
const collection = db.collection("notes");

export const getNotes = async (uid) => {
  const notes = await collection
    .doc(uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        const res = doc.data();
        return res;
      } else {
        console.log("Error getting doc @ getNotes()");
      }
    });
  return notes;
};

export const addNote = async (uid, title, content, importance) => {
  const req = await collection.doc(uid).set({
    title,
    content,
    importance,
  });

  return req;
};
