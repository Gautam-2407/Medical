import React, { useState } from 'react';
import { User, Mail, Phone, CalendarDays } from 'lucide-react';
import { formfield } from "../../Services/api";
import "./Wizard.css";

function Register() {

  const [license, setLicense] = useState('');
  const [exp, setExp] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [resume, setResume] = useState('');
  

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Clicked Successfully");
    try {
      const response = await formfield(license, exp, speciality, resume);
      console.log(response);
    }

    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="register-container">
      <div className="register-main">
        <div className="register-wrapper">
          <span>To Register as a Dr.</span>
          <h1>Fill the Form  </h1>
          
          <div className="form-wrapper">
            <div className="text-row">
              <div className="text-field">
                <input type="text" name="name" id="name" placeholder='License No.' value={license} onChange={(e) => setLicense(e.target.value)} />
                <User size={32} color="#7CE395" strokeWidth={1.5} />
              </div>
              <div className="text-field">
                <input type="text" name="phone" id="phone" placeholder='Experience' maxLength="10" value={exp} onChange={(e) => setExp(e.target.value)} />
                <Phone size={32} color="#7CE395" strokeWidth={1.5} />
              </div>
            </div>
            <div className="text-field column">
              <input type="text" name="email" id="email" placeholder='Resume' value={speciality} onChange={(e) => setSpeciality(e.target.value)} />
              <Mail size={32} color="#7CE395" strokeWidth={1.5} />
            </div>
            <div className="text-field column">
              <input type="text" name="birth" id="birth" placeholder='Speciality' value={resume} onChange={(e) => setResume(e.target.value)} />
              <CalendarDays size={32} color="#7CE395" strokeWidth={1.5} />
            </div>

            <div className="form-submit">
              <input
                type="submit"
                className="my-form__button"
                value="Register"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register