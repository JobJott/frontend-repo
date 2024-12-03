import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import Overlay from "./Overlay";
import { FiLoader } from "react-icons/fi";
import "./Forms.css";

const AuthContainer = ({ formType }) => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(
    formType === "signup"
  );

  const handleSignUpClick = () => setIsRightPanelActive(true);
  const handleSignInClick = () => setIsRightPanelActive(false);

  return (
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
      <div
        className={`container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <SignUpForm />
        </div>
        <div className="form-container sign-in-container">
          <SignInForm />
        </div>
        <div className="overlay-container">
          <Overlay
            onSignUpClick={handleSignUpClick}
            onSignInClick={handleSignInClick}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
