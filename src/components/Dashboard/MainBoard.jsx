import React, { useEffect, lazy } from "react";
import "./styles/Mainboard.css";
import { Routes, Route, useLocation } from "react-router-dom";
import MyApplication from "./Pages/MyApplication";
import Contact from "./Pages/Contact";
import Account from "./Pages/Account/Account";
import Overview from "./Pages/Overview/Overview";
import SupportCenter from "./Pages/SupportCenter";
const JobTrackerSection0 = lazy(() =>
  import("./Pages/MyApplication/JobTrackerSection0")
);
const JobTrackerSectionOne = lazy(() =>
  import("./Pages/MyApplication/JobTrackerSectionOne")
);

const MainBoard = ({ isSideDashOpen }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard/my-applications") {
      document.body.classList.add("tracker");
      document.body.classList.add("default-layout");
    } else {
      document.body.classList.remove("tracker");
      document.body.classList.remove("default-layout");
    }
  }, [location.pathname]);
  return (
    <section
      className={`mainboard-section default-content ${
        !isSideDashOpen ? "expanded-mainboard" : ""
      }`}
    >
      <Routes>
        <Route index element={<Overview />} />
        {/* <Route path="resume-builder" element={<ResumeBuilder />} />  */}
        <Route path="my-applications/*" element={<MyApplication />}>
          <Route index element={<JobTrackerSection0 />} />
          <Route
            path="job-tracker-section-one"
            element={<JobTrackerSectionOne />}
          />
        </Route>
        <Route path="contacts" element={<Contact />} />
        {/* <Route path="supportcenter" element={<SupportCenter />} /> */}
        <Route path="account" element={<Account />} />
      </Routes>
    </section>
  );
};

export default MainBoard;
