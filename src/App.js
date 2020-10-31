import React from "react";
import './App.css';
import ContactsContainer from "./components/contacts/contacts-container";
import MessagesContainer from "./components/messages/messages-container";
import {Route} from "react-router";
function App() {
    return (
        <div className="App">
            <Route path={"/users"} render={() => <ContactsContainer/>}/>
            <Route exact path={"/users"} render={() => <h1>Шо небудь</h1>}/>
            <Route exact path={"/users/:userId"} render={() => <MessagesContainer/>}/>
            <Route exact path={"/login"} render={() => <h1>Login page</h1>}/>
        </div>
    );
}

export default App;