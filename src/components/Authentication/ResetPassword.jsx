import React from "react";
import { Link } from "react-router-dom";
import forgotP from "../../assets/forgotP.svg";
import { FiLoader } from "react-icons/fi";
import styled from "styled-components";
import "./Forms.css";

const ResetPassword = () => (
  <StyledContainer>
    <div className="auth-bg">
      <div className="logo">
        <h1>
          <a href="/">
            JobJ
            <span>
              <FiLoader />
            </span>
            tt
          </a>
        </h1>
      </div>
      <div className="rp-container" id="container">
        <div className="overlay-fp">
          <div className="overlay-panel-fp">
            <h1>Password assistance</h1>
            <p>
              Enter your email to recover your password. You will receive an
              email with instructions. If you are having problems recovering
              your password{" "}
              <Link to="/" className="colour-text">
                contact
              </Link>
            </p>
            <img src={forgotP} alt="forgotpassword-img" />
          </div>
          <form action="#">
            <h1>Reset Password</h1>
            <span>Enter your email to recover your password</span>
            <input type="email" placeholder="Email" />
            <button className="auth-btn">Send reset link</button>
            <div className="links-div">
              <span>
                Don't have an account?{" "}
                <Link to="/auth/signup" className="colour-text">
                  Register.
                </Link>
              </span>

              <span>
                Go back to{" "}
                <Link to="/auth/signin" className="colour-text">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </StyledContainer>
);

const StyledContainer = styled.div`
  body {
    font-family: "Montserrat", sans-serif;
    margin: 0;
  }

  .auth-bg {
    .logo h1 a {
      font-weight: bold;
      font-size: 48px;
      margin: 0;
      color: #fff;
      font-family: "Montserrat", sans-serif !important;
    }

    .logo span {
      font-size: 32px;
    }

    h1 {
      font-weight: bold;
      font-size: 32px;
      margin: 0;
      color: #365cf5;
      font-family: "Montserrat", sans-serif !important;
    }

    h2 {
      text-align: center;
      font-family: "Montserrat", sans-serif !important;
    }

    p {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0.5px;
      color: #838c9a;
      font-family: "Montserrat", sans-serif !important;
    }

    span {
      font-size: 14px;
      font-family: "Montserrat", sans-serif !important;
      color: #000;
    }

    a {
      /* color: #fff; */
      color: #000;
      font-size: 14px;
      text-decoration: none;
      margin: 15px 0;
      font-family: "Montserrat", sans-serif !important;
    }

    button {
      border-radius: 20px;
      border: 1px solid #2b2f6a;
      background-color: #2b2f6a;
      color: #ffffff;
      font-size: 12px;
      font-weight: bold;
      padding: 12px 45px;
      letter-spacing: 1px;
      text-transform: uppercase;
      transition: transform 80ms ease-in;
    }

    button:active {
      transform: scale(0.95);
    }

    button:focus {
      outline: none;
    }

    .auth-btn {
      font-size: 12px;
      font-weight: bold;
      padding: 12px 45px;
      letter-spacing: 1px;
      border: 1px solid #2b2f6a;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
      background: #2b2f6a;
      /* color: white; */
      color: rgb(31, 134, 228);
      border-radius: 20px;
    }

    .auth-btn:hover {
      background: rgb(43, 47, 106);
      background: linear-gradient(
        90deg,
        rgba(23, 24, 48, 1) 0%,
        rgba(43, 47, 106, 1) 100%
      );
    }

    .auth-btn:active {
      transform: translate(0em, 0.2em);
    }

    form {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;
      flex-direction: column;
      padding: 0 50px;
      height: 480px;
      width: 50%;
      text-align: center;
    }

    form h1 {
      /* color: #fff; */
      color: #000;
    }
    input {
      background-color: #eee;
      border: none;
      padding: 12px 15px;
      width: 100%;
    }

    .rp-container {
      background-color: #f0fcff;
      border-radius: 10px;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      position: relative;
      overflow: hidden;
      width: 768px;
      max-width: 100%;
      min-height: 480px;
    }

    .overlay-fp {
      display: flex;
    }

    .overlay-panel-fp {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 18px;
      margin-top: 39px;
      margin-bottom: -39px;
      text-align: center;
      gap: 30px;
      height: 480px; 
      width: 50%;
      overflow: hidden;
    }

    .colour-text {
      color: #365cf5;
    }

    .links-div {
      display: flex;
      flex-direction: column;
      gap: 10px
    }
  }
`;
export default ResetPassword;
