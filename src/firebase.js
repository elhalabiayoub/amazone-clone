import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyBWEcGkwujbxhJ9XSkTzi696ZJ_rx4IspM",
	authDomain: "e-clone-51241.firebaseapp.com",
	databaseURL: "https://e-clone-51241.firebaseio.com",
	projectId: "e-clone-51241",
	storageBucket: "e-clone-51241.appspot.com",
	messagingSenderId: "113403759462",
	appId: "1:113403759462:web:70430d524241f1b44816a7",
	measurementId: "G-YBT9RZL61R",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
