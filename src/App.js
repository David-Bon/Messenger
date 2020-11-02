import React from "react";
import './App.scss';
import MainContainer from "./MainContainer";
import firebase from "firebase/app";
import 'firebase/auth';
import {useAuthState} from "react-firebase-hooks/auth";

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

const auth = firebase.auth();

export function SignOut() {
    return auth.currentUser && (
        auth.signOut()
    )
}

const LoginPage = () => {
    function SignIn() {
        const signInWithGoogle = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider)
        }
        return (
            <div className="loginPageWrapper">
                <div className="welcome">
                    <h2>Welcome to the best messenger with embedded Chuck Norris!</h2>
                    <h3 className="description">Please sign up with Google to start chatting!</h3>
                </div>

                <div id="customBtn" onClick={() => signInWithGoogle()} className="customGPlusSignIn">
                    <span className="icon"> </span>
                    <span className="buttonText">Sign in</span>
                </div>

            </div>
        )
    }

    return (
        SignIn()
    )
}

const App = () => {
    const [userInfo] = useAuthState(auth)
    return (
         userInfo ? <MainContainer/> : LoginPage()
    )
}
export default App;