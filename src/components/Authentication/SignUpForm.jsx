import React from "react";

const SignUpForm = () => (
  <form action="#">
    <h1>Create Account</h1>
    <div className="social-container">
      <a href="#" className="social red">
        <i className="fab fa-google-plus-g"></i>
      </a>
      <a href="#" className="social blue">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    <span>or use your email for registration</span>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button   className="auth-btn">Sign Up</button>
  </form>
);

export default SignUpForm;
