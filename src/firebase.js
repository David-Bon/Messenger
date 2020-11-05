import firebase from "firebase/app";
import 'firebase/auth';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDu4luWWQyQjkQzcRzt13fWfxZcM3Rq8Tk",
        authDomain: "messenger-57968.firebaseapp.com",
        databaseURL: "https://messenger-57968.firebaseio.com",
        projectId: "messenger-57968",
        storageBucket: "messenger-57968.appspot.com",
        messagingSenderId: "960014147276",
        appId: "1:960014147276:web:4289a651151ce074f36c69",
        measurementId: "G-F8502J79BC"
    })
}
export const auth = firebase.auth();

export function SignOut() {
    return auth.currentUser && (
        auth.signOut()
    )
}

export  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
}

export default firebase