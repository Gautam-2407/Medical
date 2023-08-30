import React, { useState } from 'react';
import { User, Mail, Phone, CalendarDays } from 'lucide-react';
import { registerfunction } from "../../Services/api";
import DOC from "../../Components/assets/images/user-doctor-solid.svg";
import PATIENT from "../../Components/assets/images/bed-pulse-solid-light.svg";
import "./register.css";

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [count, setCount] = useState(1);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Clicked Successfully");
    try {
      const response = await registerfunction(name, email, phone, birth, gender,role);
      console.log(response);
    }

    catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='wizard-Container'>
      <div className="register-container">
        <div className="register-main">
          <div className="register-wrapper">
            <span>START FOR FREE</span>
            <h1>Create new account  </h1>
            <span>Already A Member?</span>
            <div className="form-wrapper">
            {count === 1 && (
            <>
                  <div className="text-row">
                  <div className="text-field radio">
                    <label className="radio-label">
                      <input type="radio" name="role" id="doctor" value="doctor" checked={role === 'doctor'} onChange={(e) => setRole(e.target.value)} />
                      <span className="radio-button"></span> Doctor
                      
                    </label>
                    </div>
                    <div className="text-field radio">
                    <label className="radio-label">
                      <input type="radio" name="role" id="patient" value="patient" checked={role === 'patient'} onChange={(e) => setRole(e.target.value)} />
                      <span className="radio-button"></span> Patient
                    </label>
                    </div>
                  </div>
                </>
            )}
              {count === 2 && (
                <>
                  <div className="text-row">
                    <div className="text-field">
                      <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>
                      <User size={32} color="#7CE395" strokeWidth={1.5} />
                    </div>
                    <div className="text-field">
                      <input type="tel" name="phone" id="phone" placeholder='Phone' maxLength="10" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                      <Phone size={32} color="#7CE395" strokeWidth={1.5} />
                    </div>
                  </div>
                </>
              )}
              {count === 3 && (
                <>
                  <div className="text-field column">
                    <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Mail size={32} color="#7CE395" strokeWidth={1.5} />
                  </div>
                  <div className="text-field column">
                    <input type="date" name="birth" id="birth" placeholder='mm/dd/yyyy' value={birth} onChange={(e) => setBirth(e.target.value)} />
                    <CalendarDays size={32} color="#7CE395" strokeWidth={1.5} />
                  </div>
                </>
              )}
              {count === 4 && (
                <>
                  <div className="text-field radio">
                    <label className="radio-label">
                      <input type="radio" name="gender" id="male" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                      <img src={DOC} alt="docimage" />
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="gender" id="female" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                      <img src={PATIENT} alt="patientimage" />
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="gender" id="others" value="others" checked={gender === 'others'} onChange={(e) => setGender(e.target.value)} />
                      {/* <img src={IMG} alt="userimage" /> */}
                    </label>
                  </div>
                </>
              )}

              <div className="form-submit">
                {count > 1 && (
                  <input
                    type="submit"
                    className="my-form__button"
                    value="Previous"
                    onClick={() => setCount(count - 1)}
                  />
                )}
              </div>

              <div className="form-submit">
                {count < 4 ? (
                  <input
                    type="submit"
                    className="my-form__button"
                    value="Next"
                    onClick={() => setCount(count + 1)}
                  />
                ) : (
                  <input
                    type="submit"
                    className="my-form__button"
                    value="Register"
                    onClick={handleClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register