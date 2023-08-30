import React, { useState } from "react";
import firebase from "../../Services/OtpAuth";
import { loginfunction } from '../../Services/api';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Image from "../../Components/assets/images/user-2.jpg";
import { Phone, Fingerprint } from 'lucide-react';
import "./login.css";

const Login = () => {

    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const navigate = useNavigate();

    const configureCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "sign-in-button",
            {
                size: "invisible",
                callback: (response) => {
                    handleClick();
                    console.log("Recaptca varified");
                },
                defaultCountry: "IN",
            }
        );
    };

    const handleClick = (e) => {
        e.preventDefault();
        configureCaptcha();
        const phoneNumber = "+91" + phone; // Replace "+91" with the desired country code
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                console.log("OTP has been sent");
                toast.success("OTP sent successfully");
                setShowOtp(true);
            })
            .catch((error) => {
                console.log("SMS not sent", error);
                toast.error("Invalid Phone Number");
            });
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        const code = otp;
        console.log(code);
        try {
            const result = await window.confirmationResult.confirm(code);
            const user = result.user;
            toast.success("OTP Verified");
            console.log(user);
            console.log(JSON.stringify(user));
            const response = await loginfunction(phone);
            console.log(response);
            if (response && response.exists) {
                console.log(response.phone);
                const { token } = response;
                sessionStorage.setItem("auth_token", token)
                navigate('/dashboard');
            }
            else {
                console.log("Fetching error");
                const { token } = response;
                sessionStorage.setItem("register_token", token)
                navigate('/profile');
            }
        } catch (error) {
            console.log("Enter Valid OTP", error);
            toast.error("OTP Invalid");
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="container">
                <span className="centering">
                    <form className="my-form">
                        <span className="login-welcome-row">
                            <img src={Image} className="login-welcome" alt="main logo img" />
                            <h1>LogIn</h1>
                        </span>
                        <div className="login-text-field">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter Phone Number"
                                maxLength={10}
                                autoComplete="off"
                                required
                            />
                            <Phone color="#1D3A70" strokeWidth={1.5} />
                        </div>
                        <div className="login-text-field">
                            <label htmlFor="password">Enter OTP</label>
                            <input
                                type="password"
                                id="otp"
                                name="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter Your OTP"
                                maxLength={6}
                            />
                            <Fingerprint color="#1D3A70" strokeWidth={1.5} />
                        </div>
                        {showOtp ? (
                            <div className="Verify_Otp">
                                <input
                                    type="submit"
                                    className="my-form__button"
                                    value="Verify OTP"
                                    onClick={handleOtpSubmit}
                                />
                            </div>
                        ) : (
                            <div className="Get_Otp">
                                <input
                                    type="submit"
                                    className="my-form__button"
                                    value="Get OTP"
                                    onClick={handleClick}
                                />
                            </div>
                        )}
                    </form>
                    <div id="sign-in-button"></div>
                </span>
            </div>
        </>
    )
}

export default Login;
