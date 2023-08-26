import React from 'react'
// import { useState} from 'react';

import './login.css'
const Login = () => {

    // const [username, setusername]=useState("");
    // const [contact, setcontact]=useState("");

    // const handle = async (e) => {
    //      e.preventDefault();
    //      console.log("button clicked");
    //     try{
    //         const response = await registerfunction()
    //     }

    // }

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login">
                <div className='login-left'>
                    <h4>Sing in</h4>
                </div>
                </div>

                <div className='login-right'>
                <div className="login-logo">
                    <p>MedicalMaster</p>
                </div>
                <div classname="login-head">
                    <h2>Login Page</h2>
                    <h5>Welcomt to login page</h5>
                    <div className="input-field">
                        <input type="text" name="username" placeholder='Enter your username' />
                    </div>
                    <div className="input-field1">
                        <input type="tel" name="contact" placeholder='Enter your Number' />
                    </div>
                    <div className="gogle-input">
                        <input type="submit" value="Login with GooGle" />
                    </div>
                    <div className="button-field">
                     <input type="submit"   name="submit" value="Login"   />
                     <p>Create your Account?</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;
