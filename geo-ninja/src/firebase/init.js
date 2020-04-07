import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbeeCr_dNz3f6v6hEkcSYQDLhOHCQKctU",
  authDomain: "geo-ninja-4697a.firebaseapp.com",
  databaseURL: "https://geo-ninja-4697a.firebaseio.com",
  projectId: "geo-ninja-4697a",
  storageBucket: "geo-ninja-4697a.appspot.com",
  messagingSenderId: "516484183632",
  appId: "1:516484183632:web:62496e3c8c5ab6cc704355",
  measurementId: "G-048EENZV76"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
