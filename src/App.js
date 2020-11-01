import React from "react";
import './App.css';
import LoginPage, {auth} from "./components/login/login";
import MainContainer from "./MainContainer";
import {useAuthState} from "react-firebase-hooks/auth";

const App = () => {
    const [user] = useAuthState(auth);
    return user ? <MainContainer/> : <LoginPage/>
}

export default App;