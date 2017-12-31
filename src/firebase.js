import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBthq-TrG2Sb9jkLLYndoxJyfiWskKuk_w",
  authDomain: "mental-health-app-23c98.firebaseapp.com",
  databaseURL: "https://mental-health-app-23c98.firebaseio.com",
  projectId: "mental-health-app-23c98",
  storageBucket: "mental-health-app-23c98.appspot.com",
  messagingSenderId: "219404280667"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
