import React from "react";
import "../styles/MyApplications.css";
import JobTrackerSectionTwo from "./MyApplication/JobTrackerSectionTwo";
// import JobTrackerSection0 from "./MyApplication/JobTrackerSection0";
// import JobTrackerSectionOne from "./MyApplication/JobTrackerSectionOne";

const MyApplication = () => {
  return (
    <>
      <main className="mainboard-content">
        <div className="job-tracker-container">
          <div className="job-tracker-content-wrapper">
            {/* <JobTrackerSection0 /> */}
            {/* <JobTrackerSectionOne /> */}
            <JobTrackerSectionTwo />
          </div>
        </div>
      </main>
    </>
  );
};

export default MyApplication;
