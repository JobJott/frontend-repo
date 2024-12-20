import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forms.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSuccess(true);
    console.log("Reset link sent to:", email); // For testing
  };

  return (
    <section className="reset-section">
      <div className="reset-container">
        <h1 className="reset-heading">Password Assistance</h1>
        <p className="reset-subheading">
          Enter the email address associated with your account and we’ll email
          you a link to reset your password.
        </p>
        id="sign-up"
        <form
          className="reset-form"
          onSubmit={handleSubmit}
          id="reset-form"
          autoComplete="on"
        >
          {error && <p className="error-message">{error}</p>}
          {success && (
            <p className="success-message">Email sent successfully!</p>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <button className="auth-btn" type="submit">
            Send Reset Link
          </button>
        </form>
        <div className="links-div">
          <span>
            Go back to{" "}
            <Link to="/auth/signin" className="colour-text">
              Login
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
