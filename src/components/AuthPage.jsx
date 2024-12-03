import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthContainer from "./Authentication/AuthContainer";
import ResetPassword from "./Authentication/ResetPassword";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <Routes>
        <Route path="signin" element={<AuthContainer formType="signin" />} />
        <Route path="signup" element={<AuthContainer formType="signup" />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default AuthPage;
