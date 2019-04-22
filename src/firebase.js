import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
//import app from 'firebase'
require('firebase/auth')

const config = {
    apiKey: "AIzaSyCIKTk_tkU1Yqgc84tqn3A6Df1A47HYrsA",
    authDomain: "fir-react-app-7fa4b.firebaseapp.com",
    databaseURL: "https://fir-react-app-7fa4b.firebaseio.com",
    projectId: "fir-react-app-7fa4b",
    storageBucket: "fir-react-app-7fa4b.appspot.com",
    messagingSenderId: "411675181078"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    login(email, password){
        return this.auth.signInWithEmailAndPassword(email);
    }

    logout(){
        return this.auth.signOut();
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName;
    }
}

export default new Firebase();