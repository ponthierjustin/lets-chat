import firebase from 'firebase';
 const config = {
    apiKey: "AIzaSyAnb3zmgnQ4jFThs4zqCZOv-YrjChVLmpw",
    authDomain: "lets-chat-cf687.firebaseapp.com",
    databaseURL: "https://lets-chat-cf687.firebaseio.com",
 };
 firebase.initializeApp(config);
 export const auth = firebase.auth;
 export const db = firebase.database();
