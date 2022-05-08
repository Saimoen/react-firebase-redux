// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-94e35.firebaseapp.com",
  projectId: "react-firebase-redux-94e35",
  storageBucket: "react-firebase-redux-94e35.appspot.com",
  messagingSenderId: "1000898723364",
  appId: "1:1000898723364:web:f509c55fd3f67f079c22b1"
});

export const auth = app.auth();
export default app;
