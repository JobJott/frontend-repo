import React, { useState } from "react";
import "../styles/MyApplications.css";
// import JobTrackerSectionTwo from "./MyApplication/JobTrackerSectionTwo";
import { StyleProvider } from "@ant-design/cssinjs";
import AntJobModal from "./MyApplication/ActionButtons/AntJobModal";
import { Outlet, useNavigate } from "react-router-dom";

const MyApplication = () => {
  const [jobs, setJobs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleNewJob = async (newJob) => {
    try {
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });

      if (!response.ok) {
        throw new Error("Failed to save the job to the backend");
      }

      const savedJob = await response.json();
      setJobs((prevJobs) => [...prevJobs, savedJob]); // Update state with backend response
      localStorage.setItem("jobs", JSON.stringify([...jobs, savedJob])); // Save to localStorage
      navigate("job-tracker-section-one");
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <>
      <main className="mainboard-content">
        <div className="job-tracker-container">
          <div className="job-tracker-content-wrapper">
            {/* <JobTrackerSectionTwo /> */}
            <Outlet context={{ setModalOpen, jobs, setJobs }} />
          </div>
        </div>
      </main>

      {/* AntJobModal: pass handleNewJob function to modal for adding a new job */}
      <StyleProvider layer>
        <AntJobModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          onFormSubmit={handleNewJob}
        />
      </StyleProvider>
    </>
  );
};

export default MyApplication;
