import ContactsContainer from "./components/contacts/contacts-container";
import MessagesContainer from "./components/messages/messages-container";
import {Redirect, Route} from "react-router";
import React from "react";
import './App.css';


const MainContainer = () => {
    return (
        <div className="App">
            <Redirect to={"/users"}/>
            <Route path={"/users"} render={() => <ContactsContainer/>}/>
            <Route exact path={"/users"} render={() => <h1>Click on the user you want to speak to</h1>}/>
            <Route exact path={"/users/:userId"} render={() => <MessagesContainer/>}/>
        </div>

    );
}

export default MainContainer