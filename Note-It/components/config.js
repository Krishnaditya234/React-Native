import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyD-1UBGBbuDGa4orbvHxr0Z-4jCylS1ElE",
    authDomain: "note-it-c94ad.firebaseapp.com",
    databaseURL: "https://note-it-c94ad-default-rtdb.firebaseio.com",
    projectId: "note-it-c94ad",
    storageBucket: "note-it-c94ad.appspot.com",
    messagingSenderId: "359676734960",
    appId: "1:359676734960:web:90dd5149383c0b6d838135"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();