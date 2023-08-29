import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkbox = () => {
    const navigate = useNavigate();

    const handleCheckbox = (isChecked) => {
      if (isChecked) {
        navigate('/register');
            }

    };
    const handleCheckbox1 = (isChecked) => {
        if (isChecked) {
          navigate('/register');
              }};
  return (
    <div>
        <input type="radio" name="user" id="person" onClick={handleCheckbox}/>User
        <input type="radio" name="user" id="dr" onClick={handleCheckbox1}/>Dr
    </div>
  )
}

export default Checkbox 