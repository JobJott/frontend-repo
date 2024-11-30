import React from "react";

const SignInForm = () => (
  <form action="#">
    <h1>Sign In</h1>
    <div className="social-container">
      <a href="#" className="social red">
        <i className="fab fa-google-plus-g"></i>
      </a>
      <a href="#" className="social blue">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    <span>or use your account</span>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <a href="#">Forgot your password?</a>
    <button className="auth-btn">Sign In</button>
  </form>
);

export default SignInForm;
