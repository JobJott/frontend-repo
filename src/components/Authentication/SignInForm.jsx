import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    console.log("Sign In successful with:", formData); // For testing
  };

  return (
    <section className="signin-section">
      <div className="signin-container">
        <h1 className="signin-heading">Sign in to your account</h1>
        <div className="social-container">
          <button className="social-btn red" aria-label="Sign in with Google">
            <i className="fab fa-google-plus-g"></i>
          </button>
          <button
            className="social-btn blue"
            aria-label="Sign in with LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="signin-form" id="sign-in">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="fp">
            <Link to="/auth/reset-password" className="forgot-password">
              Forgot your password?
            </Link>
          </div>
          <button type="submit" className="auth-btn">
            Sign In
          </button>
        </form>
        <div className="links-div">
          <span>
            Don't have an account?{" "}
            <Link to="/auth/signup" className="colour-text">
              Register
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SignInForm;
