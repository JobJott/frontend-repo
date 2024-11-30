import React from "react";
import signinimg from "../../assets/signin.svg";
import signupimg from "../../assets/signup.svg";

const Overlay = ({ onSignUpClick, onSignInClick }) => (
  <div className="overlay">
    <div className="overlay-panel overlay-left">
      <h1>Welcome Back!</h1>
      <p>To keep connected with us please login with your personal info</p>
      <img src={signinimg} alt="signin-img" />
      <button className="ghost" onClick={onSignInClick}>
        Sign In
      </button>
    </div>
    <div className="overlay-panel overlay-right">
      <h1>Hello, Friend!</h1>
      <p>Enter your personal details and start journey with us</p>
      <img src={signupimg} alt="signup-img" />
      <button className="ghost" onClick={onSignUpClick}>
        Sign Up
      </button>
    </div>
  </div>
);

export default Overlay;
