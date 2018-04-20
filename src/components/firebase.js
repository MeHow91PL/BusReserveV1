import admin from 'firebase-admin'
import functions from 'firebase-functions'

// Initialize Firebase
var Config = {
    apiKey: "AIzaSyDjkOXMIBZWaUHWlOlYqY1POlDC3GqBcRw",
    authDomain: "diagram-8a1c2.firebaseapp.com",
    databaseURL: "https://diagram-8a1c2.firebaseio.com",
    projectId: "diagram-8a1c2",
    storageBucket: "diagram-8a1c2.appspot.com",
    messagingSenderId: "568760995607"
  };    

admin.initializeApp(functions.config().firebase);
export const db = admin.firestore();