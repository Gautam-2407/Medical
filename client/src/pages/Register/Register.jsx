import React from 'react';
import {User, Mail, Fingerprint} from 'lucide-react';
import "./register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-main">
        <div className="register-wrapper">
          <span>START FOR FREE</span>
          <h1>Create new account  </h1>
          <span>Already A Member?</span>
          <div className="form-wrapper">
            <div className="text-row">
              <div className="text-field">
                <input type="text" name="fname" id="fname" placeholder='First Name' />
                <User size={32} color="#7CE395" strokeWidth={1.5} />
              </div>
              <div className="text-field">
                <input type="text" name="fname" id="fname" placeholder='Last Name' />
                <User size={32} color="#7CE395" strokeWidth={1.5} />
              </div>
            </div>
            <div className="text-field column">
              <input type="email" name="email" id="email" placeholder='Email' />
              <Mail size={32} color="#7CE395" strokeWidth={1.5} />
            </div>
            <div className="text-field column">
              <input type="password" name="password" id="password" placeholder='Password' />
              <Fingerprint size={32} color="#7CE395" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register