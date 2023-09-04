import React from 'react'
 import { useState } from 'react';
import './login.css'
import { loginfunction } from '../../Services/api';
import { ArrowRight, ArrowLeft, Facebook,Twitter,Linkedin, Instagram  }  from "lucide-react";
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';



const Login = () => {

    const [otp, setotp]=useState("");
    const [contact, setcontact]=useState("");
    

    const handle = async (e) => {
         e.preventDefault();
         console.log("button clicked");
        try{
            const response = await loginfunction( contact, otp);
            console.log("response");
               
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
                    <input type="tel" name="contact" maxLength={10} placeholder='Enter your Number' value={contact} onChange={(e)=>setcontact(e.target.value)} />
                    </div>
                    <div className="input-field1">
                        <input type="text" name="otp" maxLength={6} placeholder='Enter your OTP' value={otp} onChange={(e)=>setotp(e.target.value)} />
                    </div>
                    
                    <Divider  id="or">or</Divider>
                
                    

                    <div className="gogle-input">
                        <input type="submit" value="Login with GooGle" />
                    </div>
                    <div className="button-field">
                     <input type="submit"   name="submit" value="Login" onClick={handle}  id="login-button" />
                     <p>Create your Account?</p>
                    </div>
                    <div className="login-icon">

                    <Link to="fb">  <Facebook size={20}  id="fb"/></Link>
                    <Link to="tw"><Twitter size={20}  id="fb"/></Link>
                    <Link to="in"> <Linkedin size={20}  id="fb"/></Link>
                     <Link to="insta"><Instagram size={20} color="#0d0c0c"  id="fb"/></Link>
                    </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Login;
