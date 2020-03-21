import React from 'react';
import './login-page.styles.scss'

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="login-page-div">

                <div className="login-page">
                    <div className="login-page-left">
                        <h1>
                            SIWP
            </h1>
                        <h3>
                            Providing a framework for the coordination of investments in the Niger Delta Region.
            </h3>
                        <a href="#">Learn More >>></a>
                    </div>
                    <div className="login-page-right">
                        <h3>
                            Log in to give feedback on projects...
            </h3>
                        <div>
                            <div className="login-page-input1">
                                <input type="text" name="email" id="" placeholder="Email Address" /><br />
                            </div>
                            <div className="login-page-input1">
                                <input type="text" name="password" id="" placeholder="Type Password" />
                                <span><img src="https://cdn4.iconfinder.com/data/icons/gambling-15/48/94-512.png" alt="eye" height="20px" width="20px"/></span>
                            </div>
                        </div>
                        <div className="link-and-button">
                            <a href="#">Forgot your password?</a><br />
                            <button>Log in</button>
                        </div>
                        <div className="dont-have">
                            Don't have an account yet? <a href="#">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;