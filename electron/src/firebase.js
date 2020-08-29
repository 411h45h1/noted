import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAyICImbLgzOPfjatWrhb5M0bo8fxh4nuQ",
  authDomain: "noted-55f73.firebaseapp.com",
  databaseURL: "https://noted-55f73.firebaseio.com",
  projectId: "noted-55f73",
  storageBucket: "noted-55f73.appspot.com",
  messagingSenderId: "405755323077",
  appId: "1:405755323077:web:9d4e464807654c4c37c6ac",
  measurementId: "G-YXMJP7FPBP",
};

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
