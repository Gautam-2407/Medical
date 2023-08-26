import React from 'react'
import './login.css'
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className='login-left'>
                    <h1>Test</h1>
                </div>

                <div className='login-right'>
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
                     <input type="submit"   name="submit" value="Login"  />
                     <p>Create your Account?</p>
                    </div>
        
                </div>

            </div>
        </div>
    )
}

export default Login;
