import firebase from "firebase/app";

const firebaseConfing = {
    apiKey: "AIzaSyCzLkGkxUaW9DV3qdRN_W2OA43WTMasze8",
    authDomain: "todo-3df3c.firebaseapp.com",
    databaseURL: "https://todo-3df3c.firebaseio.com",
    projectId: "todo-3df3c",
    storageBucket: "todo-3df3c.appspot.com",
    messagingSenderId: "856171416191",
    appId: "1:856171416191:web:44cd85236977a3a90a4d4a"
  };

export default firebase.initializeApp(firebaseConfing);