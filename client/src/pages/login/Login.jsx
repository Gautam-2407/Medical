// import React from 'react'
//  import { useState } from 'react';
// import './login.css'
// // import { loginfunction } from '../../Services/api';
//   import firebase from '../../firebase';
// //  import 'firebase/auth';
// const Login = () => {

//     const [phone, setPhone] = useState('');
//     const [verificationCode, setVerificationCode] = useState('');

//     const configureCaptcha = () => {
//         window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//           "sign-in-button",
//           {
//             size: "invisible",
//             callback: (response) => {
//                 handleSendOTP();
//               console.log("Recaptca varified");
//             },
//             defaultCountry: "IN",
//           }
//         );
//       };
  
//     const handleSendOTP = async () => {
//         // e.preventDefault();
//         configureCaptcha();
//         const phoneNumber = "+91" + phone; // Replace "+91" with the desired country code
//         console.log(phoneNumber);
//         const appVerifier = window.recaptchaVerifier;
//         firebase
//       .auth()
//       .signInWithPhoneNumber(phoneNumber, appVerifier)
//       .then((confirmationResult) => {
//         window.confirmationResult = confirmationResult;
//         console.log("OTP has been sent");
//         sessionStorage.setItem('phone', phone);
//       })

//        .catch ((error) =>{
//         console.error(error);
//        });
//     };
  
//     const handleVerifyOTP = async () => {
//       try {
//         const userCredential = await  window.confirmationResult.confirm(verificationCode);
//         const user = userCredential.user;
//         console.log('User successfully logged in:', user);
//       } catch (error) {
//         console.error(error);
//       }
//     };
  

//     return (
//         <div className="login-container">
//             <div className="login-wrapper">
//                 <div className="login">
//                 <div className='login-left'>
//                     <h4>Sing in</h4>
//                 </div>
//                 </div>

//                 <div className='login-right'>
//                 <div className="login-logo">
//                     <p>MedicalMaster</p>
//                 </div>
//                 <div className="login-head" style={{marginTop:"70px", marginLeft:"150px"}}>
//                     <h2>Login Page</h2>
//                     <h5>Welcomt to login page</h5>
//                     <div className="input-field">
//                         <input type="text" name="username" placeholder='Enter your phone number' value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
//                     </div>
//                     <div>
//           <input
//             type="text"
//             placeholder="Enter verification code"
//             value={verificationCode}
//             onChange={(e) => setVerificationCode(e.target.value)}
//           />
//           </div>
//           <button onClick={handleVerifyOTP}>Verify OTP</button>
//                     <button onClick={handleSendOTP}>Send OTP</button>

//                     {/* <div className="input-field1">
//                         <input type="tel" name="contact" maxLength={10} placeholder='Enter your Number' value={contact} onChange={(e)=>setcontact(e.target.value)} />
//                     </div>
//                     <div className="gogle-input">
//                         <input type="submit" value="Login with GooGle" />
//                     </div>
//                     <div className="button-field">
//                      <input type="submit"   name="submit" value="Login" onClick={handle}  /> */}
//                      <p>Create your Account?</p>
//                     </div>
//                     </div>
//                 </div>
//                 <div id="sign-in-button"></div>
//             </div>
//         // </div>
//     )
// }

// export default Login;
