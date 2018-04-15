import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyA_7-iZBHH_A_NamrCUR_ILD0Lx8FYRNrU",
    authDomain: "nauka-react-9137b.firebaseapp.com",
    databaseURL: "https://nauka-react-9137b.firebaseio.com",
    projectId: "nauka-react-9137b",
    storageBucket: "nauka-react-9137b.appspot.com",
    messagingSenderId: "973196382218"
};

Firebase.initializeApp(config)

export const database = Firebase.database()
export const auth = Firebase.auth()

