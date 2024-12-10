import React, { Suspense } from "react";
import { FiLoader } from "react-icons/fi";
import Loader from "../Pages/Loader";
import { Link } from "react-router-dom";
import "./Forms.css";

const SignUpForm = React.lazy(() => import("./SignUpForm"));
const SignInForm = React.lazy(() => import("./SignInForm"));
const ResetPasswordForm = React.lazy(() => import("./ResetPassword"));

const AuthContainer = ({ formType }) => {
  const renderForm = () => {
    switch (formType) {
      case "signup":
        return <SignUpForm />;
      case "signin":
        return <SignInForm />;
      case "reset-password":
        return <ResetPasswordForm />;
      default:
        return <SignInForm />;
    }
  };

  return (
    <Suspense fallback={<Loader />}>
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

        <div className="form-container">{renderForm()}</div>

        <div className="auth-footer">
          <Link to="/auth/support">Support</Link>
          <span className="dot">.</span>
          <Link to="/auth/terms">Terms</Link>
          <span className="dot">.</span>
          <Link to="/auth/privacy">Privacy</Link>
        </div>
      </div>
    </Suspense>
  );
};

export default AuthContainer;
