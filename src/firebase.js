import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDKwNq95LnBrGrIpXXOThbd5YBD80_mhrE",
  authDomain: "carpool-8da92.firebaseapp.com",
  databaseURL: "https://carpool-8da92.firebaseio.com",
  projectId: "carpool-8da92",
  storageBucket: "carpool-8da92.appspot.com",
  messagingSenderId: "372550902996"
};
export const firebaseApp = firebase.initializeApp(config);
export const passengersRef = firebase.database().ref('passengers');
export const driversRef = firebase.database().ref('drivers');
