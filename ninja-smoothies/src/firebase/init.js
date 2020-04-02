// import firebase from 'firebase'
// import firestore from 'firebase/firestore'

// const config = {
//   apiKey: "AIzaSyA2NqGD6yrBDE7iOtAPEbwm1ahQ45byDSY",
//   authDomain: "ninja-smoothies-7385b.firebaseapp.com",
//   databaseURL: "https://ninja-smoothies-7385b.firebaseio.com",
//   projectId: "ninja-smoothies-7385b",
//   storageBucket: "ninja-smoothies-7385b.appspot.com",
//   messagingSenderId: "747182387167",
//   appId: "1:747182387167:web:a8fe0b59f9b5b0b5db9e6a",
//   measurementId: "G-9B4N6CZ3VW"
// };
// const firebaseApp = firebase.initializeApp(config);
// // firebaseApp.firestore().settings({timestampsInSnapshots: true})

// //export firestore database
// export default firebaseApp.firestore()

import * as firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyA2NqGD6yrBDE7iOtAPEbwm1ahQ45byDSY",
  authDomain: "ninja-smoothies-7385b.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-7385b.firebaseio.com",
  projectId: "ninja-smoothies-7385b",
  storageBucket: "ninja-smoothies-7385b.appspot.com",
  messagingSenderId: "747182387167",
  appId: "1:747182387167:web:a8fe0b59f9b5b0b5db9e6a",
  measurementId: "G-9B4N6CZ3VW"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();