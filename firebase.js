// Your web app's Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBBk_-ddnpv4lOd1DxCNqAyr6eY6cg0DJk",
  authDomain: "fitness-app-subash.firebaseapp.com",
  projectId: "fitness-app-subash",
  storageBucket: "fitness-app-subash.appspot.com",
  messagingSenderId: "79985125148",
  appId: "1:79985125148:web:8a017c43e05ee4524ebcd9"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth }