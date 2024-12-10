import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthContainer from "../Authentication/AuthContainer";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <Routes>
        <Route path="signin" element={<AuthContainer formType="signin" />} />
        <Route path="signup" element={<AuthContainer formType="signup" />} />
        <Route
          path="reset-password"
          element={<AuthContainer formType="reset-password" />}
        />
      </Routes>
    </div>
  );
};

export default AuthPage;
