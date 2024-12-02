import React, { useState } from "react";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    console.log("Registration successful with name:", name, "email:", email); // testing
  };

  return (
    <form onSubmit={handleSubmit} action="#">
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
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        id="name-signup"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        id="email-signup"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password-signup"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="auth-btn" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
