import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

    const { firstName, lastName, email, password } = formData;

    if (!firstName || !lastName || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    console.log("Registration successful with:", formData); // For testing
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <h1 className="signup-heading">Create an Account</h1>
        <div className="social-container">
          <button className="social-btn red" aria-label="Sign up with Google">
            <i className="fab fa-google-plus-g"></i>
          </button>
          <button
            className="social-btn blue"
            aria-label="Sign up with LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group name-grid">
            <div className="flex1">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex2">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password (6 or more characters)</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <button className="auth-btn" type="submit">
            Sign Up
          </button>
        </form>

        <div className="links-div">
          <span>
            Don't have an account?
            <Link to="/auth/signin" className="colour-text">
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
