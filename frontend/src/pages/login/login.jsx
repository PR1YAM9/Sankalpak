import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate()


  const apiEndpoint = "http://your-api-endpoint.com";

  const handleGetOtpClick = async () => {
    try {
      const response = await fetch(`${apiEndpoint}/send-otp`, {
        method: "POST",
        body: JSON.stringify({ phoneNumber }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsOtpSent(true);
      } else {
        console.error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleLoginClick = async () => {
    try {
      const response = await fetch(`${apiEndpoint}/verify-otp`, {
        method: "POST",
        body: JSON.stringify({ phoneNumber, otp }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("OTP verified. Logging in...");
      } else {
        console.error("OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const redirectToHome = () => {
    navigate("/farmerhome");
  };

  return (
    <>
      <div className="header">Login</div>
      <div className="verificationBox">
        <div className="pnoInput">
          <div className="loginPno">Enter your phone number</div>
          <input
            className="loginPnoInput"
            type="number"
            maxlength="10" pattern="\d{10}"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        {/* {isOtpSent ? ( */}

        <div className="loginOTP">
          {/* <input
              type="number"
              placeholder="OTP"
              value={otp}
              
            /> */}
          <OtpInput
            className="otpInput"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
          <div>
            <button className="loginButtons" onClick={handleGetOtpClick}>Get OTP</button>
          </div>
        </div>
        {/* ) : ( */}
        <div>
          <button className="loginButtons buttonLogin" onClick={redirectToHome}>Login</button>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Login;
