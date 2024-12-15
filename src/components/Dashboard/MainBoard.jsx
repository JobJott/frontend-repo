import React from "react";
import { Routes, Route } from "react-router-dom";
import MyApplication from "./Pages/MyApplication";

const MainBoard = ({ isSideDashOpen }) => {
  return (
    <div
      className={`mainboard-section ${
        isSideDashOpen ? "" : "expanded-mainboard"
      }`}
    >
      <Routes>
        {/* <Route path="overview" element={<Overview />} />
        <Route path="resume-builder" element={<ResumeBuilder />} /> */}
        <Route path="my-applications" element={<MyApplication />} />
        {/* <Route path="contacts" element={<Contacts />} />
        <Route path="support" element={<Support />} />
        <Route path="account" element={<Account />} /> */}
      </Routes>
    </div>
  );
};

export default MainBoard;
