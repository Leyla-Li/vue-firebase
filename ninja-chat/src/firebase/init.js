import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMug93Qj7NVYe2DNX9Z3kz6cTu4n4pNzs",
  authDomain: "ninja-chat-b689e.firebaseapp.com",
  databaseURL: "https://ninja-chat-b689e.firebaseio.com",
  projectId: "ninja-chat-b689e",
  storageBucket: "ninja-chat-b689e.appspot.com",
  messagingSenderId: "292743756386",
  appId: "1:292743756386:web:ca0663a8b7e09bd4686f3b",
  measurementId: "G-R499HFDK3B"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();