import React from "react";
import './App.css';
import MainContainer from "./MainContainer";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import LoginPage from "./components/login/login";


const App = () => {
    const [userInfo] = useAuthState(auth)
    return (
        userInfo ? <MainContainer/> : <LoginPage/>
    )
}
export default App;