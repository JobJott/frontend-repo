import React from "react";
import { Routes, Route } from "react-router-dom";
import MyApplication from "./Pages/MyApplication";
import Contact from "./Pages/Contact";

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
        <Route path="contacts" element={<Contact />} />
        {/* <Route path="support" element={<Support />} />
        <Route path="account" element={<Account />} /> */}
      </Routes>
    </div>
  );
};

export default MainBoard;
