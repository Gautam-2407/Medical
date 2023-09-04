import React from 'react'
 import { useState } from 'react';
import './login.css'
import { loginfunction } from '../../Service/api';
import { ArrowRight, ArrowLeft,  }  from "lucide-react";
import { Link } from 'react-router-dom';


const Login = () => {

    const [username, setusername]=useState("");
    const [contact, setcontact]=useState("");
    

    const handle = async (e) => {
         e.preventDefault();
         console.log("button clicked");
        try{
            const response = await loginfunction( username, contact);
            console.log(response);   
        }
        catch(error) {
            console.log("error");
        }

    }

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className='login-left'>
                    <Link to="Sing in" id="sing">Sing in</Link>
                    <div className="arrow">     
                    <div className="arrowleft">
                        <button onClick={()=>alert("Please fill these form")}><ArrowLeft size={10} color="#fafafa" /></button>
                    </div>
                    <div className="arrowright">
                    <button onClick={()=>alert("Please fill these form")}><ArrowRight size={10} color="#fafafa" /></button>
                    </div>
                    </div>
                 </div>
                <div className='login-right'>
                <div className="login-logo">
                    <p>MedicalMaster</p>
                </div>
                <div className="login-head" >
                    <h2>Login Page</h2>
                    <h5>Welcomt to login page</h5>
                    <div className="input-field">
                        <input type="text" name="username" placeholder='Enter your username' value={username}  onChange={(e)=>setusername(e.target.value)}/>
                    </div>
                    <div className="input-field1">
                        <input type="tel" name="contact" maxLength={10} placeholder='Enter your Number' value={contact} onChange={(e)=>setcontact(e.target.value)} />
                    </div>
                    <div className="gogle-input">
                        <input type="submit" value="Login with GooGle" />
                    </div>
                    <div className="button-field">
                     <input type="submit"   name="submit" value="Login" onClick={handle}  />
                     <p>Create your Account?</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;
