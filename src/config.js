import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDN3iv_tVPBqPNwJqXpkSQZObv3KOfQ5oQ",
    authDomain: "houseit-e325e.firebaseapp.com",
    databaseURL: "https://houseit-e325e.firebaseio.com",
    projectId: "houseit-e325e",
    storageBucket: "gs://houseit-e325e.appspot.com",
    messagingSenderId: "211039595002",
    appId: "1:211039595002:web:b0ed7db59a639fb63f5c43"
  };

  var fire = firebase.initializeApp(config);
  export const storage =firebase.storage().ref;
  export const auth =firebase.auth();
  export const database =firebase.database();
  
  
  export default fire