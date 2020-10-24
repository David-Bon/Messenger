import React from "react";
import './App.css';
import {randomPhrase} from "./api/api";

function App() {
    return (
        <div className="App">
            Привет Мир!
            {randomPhrase.getPhrase()}
        </div>
    );
}

export default App;