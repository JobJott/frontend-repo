import React, { Suspense } from "react";
import { FiLoader } from "react-icons/fi";
import Loader from "../Pages/Loader";
import { Link } from "react-router-dom";
import "./Forms.css";
import { RadarOutlined } from "@mui/icons-material";

const SignUpForm = React.lazy(() => import("./SignUpForm"));
const SignInForm = React.lazy(() => import("./SignInForm"));
const ForgetPasswordForm = React.lazy(() => import("./ForgetPassword"));
const ResetPassword = React.lazy(() => import("./ResetPassword"));

const AuthContainer = ({ formType }) => {
  const renderForm = () => {
    switch (formType) {
      case "signup":
        return <SignUpForm />;
      case "signin":
        return <SignInForm />;
      case "forget-password":
        return <ForgetPasswordForm />;
      case "reset-password":
        return <ResetPassword />;
      default:
        return <SignInForm />;
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="auth-bg">
        <div className="logo">
          <Link to="/">
            <h1 className="!tracking-normal text-[#fff] text-[30px] font-bold">
              J
              <span>
                {/* <FiLoader /> */}
                <RadarOutlined className="text-[15px]" />
              </span>
              bJ
              <span>
                {/* <FiLoader /> */}
                <RadarOutlined />
              </span>
              tt
            </h1>
          </Link>
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
