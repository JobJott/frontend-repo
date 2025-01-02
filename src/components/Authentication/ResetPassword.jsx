import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Forms.css";

const ResetPassword = () => {
  const { token } = useParams(); // Retrieve the token from the URL
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");

    try {
      // Make POST request to reset password
      const response = await axios.post(
        "http://localhost:8080/api/password/reset-password",
        {
          token,
          newPassword,
        }
      );

      if (response.status === 200) {
        setSuccess(true); // Show success message
        setTimeout(() => navigate("/auth/signin"), 3000); // Redirect to login
      }
    } catch (error) {
      setError("An error occurred while resetting your password.");
      console.error(error);
    }
  };

  return (
    <section className="reset-section">
      <div className="reset-container">
        <h1 className="reset-heading">Reset Your Password</h1>
        <p className="reset-subheading">
          Enter and confirm your new password below.
        </p>
        <form
          className="reset-form"
          onSubmit={handleSubmit}
          id="reset-form"
          autoComplete="on"
        >
          {error && <p className="error-message">{error}</p>}
          {success && (
            <p className="success-message">
              Password reset successfully! Redirecting to login...
            </p>
          )}
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            id="newPassword"
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="new-password"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
          />
          <button className="auth-btn" type="submit">
            Reset Password
          </button>
        </form>
        <div className="links-div">
          <span>
            Remembered your password?{" "}
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
