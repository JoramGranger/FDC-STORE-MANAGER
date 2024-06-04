import React from "react";
import './login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="wrapper">
                <h1 className="title">LOGIN</h1>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>LOGIN</button>
                    <p>DO NOT REMEMBER YOUR PASSWORD</p>
                    <p>CREATE A NEW ACCOUNT</p>
                </form>
            </div>
        </div>
    )
}

export default Login;