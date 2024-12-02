import React, { useState, useEffect, Suspense } from "react";
import { FiLoader } from "react-icons/fi";
import LoaderForm from "./LoaderForm";
import "./Forms.css";

const SignUpForm = React.lazy(() => import("./SignUpForm"));
const SignInForm = React.lazy(() => import("./SignInForm"));
const Overlay = React.lazy(() => import("./Overlay"));

const AuthContainer = ({ formType }) => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(
    formType === "signup"
  );

  const [showLoader, setShowLoader] = useState(true); 

  const handleSignUpClick = () => setIsRightPanelActive(true);
  const handleSignInClick = () => setIsRightPanelActive(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide LoaderForm after 1 second
    }, 1000);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (showLoader) {
    return <LoaderForm />;
  }

  return (
    <Suspense fallback={<LoaderForm />}>
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
    </Suspense> 
  );
};

export default AuthContainer;
