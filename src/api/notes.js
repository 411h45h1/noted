import firebase from "../firebase";
import "firebase/firestore";
import moment from "moment";

const db = firebase.firestore();

export const getNotes = async (uid) => {
  const collection = db.collection(`User Notes: ${uid}`);

  const notes = await collection.get();
  return notes.docs.map((doc) => {
    return { nid: doc.id, ...doc.data() };
  });
};

export const addNote = async (uid, title, content, importance) => {
  const collection = db.collection(`User Notes: ${uid}`);

  const req = await collection.add({
    title,
    content,
    importance,
    date: moment().format("MMM Do YYYY"),
  });

  return req;
};
