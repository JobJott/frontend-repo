import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill out all fields");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError("");
    console.log("Sign In successful with email:", email);
    // testing
  };

  return (
    <form onSubmit={handleSubmit} action="#">
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
      {error && <p className="error-message">{error}</p>}
      <input
        type="email"
        id="email-signin"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password-signin"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/auth/reset-password">Forgot your password?</Link>
      <button className="auth-btn" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default SignInForm;
