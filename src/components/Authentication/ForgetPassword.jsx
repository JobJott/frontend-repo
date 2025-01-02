import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Forms.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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

    try {
      // Make POST request to backend
      const response = await axios.post(
        "http://localhost:8080/api/password/request-reset",
        {
          email,
        }
      );

      if (response.status === 200) {
        setSuccess(true); // Show success message
        const resetToken = response.data.token; // Assuming the backend sends the token
        navigate(`/auth/reset-password/${resetToken}`); // Redirect to reset-password page
      }
      console.log("Reset link sent to:", email); // For testing
    } catch (error) {
      setError("An error occurred while sending the reset link.");
      console.error(error);
    }
  };

  return (
    <section className="reset-section">
      <div className="reset-container">
        <h1 className="reset-heading">Password Assistance</h1>
        <p className="reset-subheading">
          Enter the email address associated with your account and we’ll email
          you a link to reset your password.
        </p>
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

export default ForgetPassword;
