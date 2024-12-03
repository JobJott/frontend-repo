import React from "react";
import signinimg from "../../assets/signin.svg";
import signupimg from "../../assets/signup.svg";
import { Link } from "react-router-dom";

function Overlay({ onSignUpClick, onSignInClick }) {
  return (
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please sign-in with your personal info</p>
          <img src={signinimg} alt="signin-img" />
        <Link to="/auth/signin">
          <button className="ghost" onClick={onSignInClick}>
            Sign In
          </button>
        </Link>
      </div>
      <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>
          Are you ready to get hired sooner? <br />
          Enter your personal details and start journey with us
        </p>
        <img src={signupimg} alt="signup-img" />
        <Link to="/auth/signup">
          <button className="ghost" onClick={onSignUpClick}>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Overlay;
