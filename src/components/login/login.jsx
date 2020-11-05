import {signInWithGoogle} from "../../firebase";

import React from "react";

const LoginPage = () => {
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

export default LoginPage