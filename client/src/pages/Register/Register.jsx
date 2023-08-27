import React, { useState } from 'react';
import { User, Mail, Phone, CalendarDays } from 'lucide-react';
import { registerfunction } from "../Services/api";
import "./register.css";

function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Clicked Successfully");
    try {
      const response = await registerfunction(name, email, phone, birth, gender);
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
          <span>START FOR FREE</span>
          <h1>Create new account  </h1>
          <span>Already A Member?</span>
          <div className="form-wrapper">
            <div className="text-row">
              <div className="text-field">
                <input type="text" name="name" id="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <User size={32} color="#7CE395" strokeWidth={1.5} />
              </div>
              <div className="text-field">
                <input type="tel" name="phone" id="phone" placeholder='Phone' maxLength="10" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Phone size={32} color="#7CE395" strokeWidth={1.5} />
              </div>
            </div>
            <div className="text-field column">
              <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <Mail size={32} color="#7CE395" strokeWidth={1.5} />
            </div>
            <div className="text-field column">
              <input type="date" name="birth" id="birth" placeholder='mm/dd/yyyy' value={birth} onChange={(e) => setBirth(e.target.value)} />
              <CalendarDays size={32} color="#7CE395" strokeWidth={1.5} />
            </div>
            <div className="text-field radio">
              <label className="radio-label">
                <input type="radio" name="gender" id="male" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                <span className="radio-button"></span> MALE
              </label>
              <label className="radio-label">
                <input type="radio" name="gender" id="female" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                <span className="radio-button"></span> FEMALE
              </label>
              <label className="radio-label">
                <input type="radio" name="gender" id="others" value="others" checked={gender === 'others'} onChange={(e) => setGender(e.target.value)} />
                <span className="radio-button"></span> OTHERS
              </label>
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