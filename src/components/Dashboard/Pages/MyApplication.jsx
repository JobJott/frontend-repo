import React, { useEffect, useState } from "react";
import "../styles/MyApplications.css";
// import JobTrackerSectionTwo from "./MyApplication/JobTrackerSectionTwo";
import { StyleProvider } from "@ant-design/cssinjs";
import AntJobModal from "./MyApplication/ActionButtons/AntJobModal";
import { Outlet } from "react-router-dom";
import { message } from "antd";
import { addJobToAPI, fetchJobsFromAPI } from "../../../utils/api/jobService";

const MyApplication = () => {
  const [jobs, setJobs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const fetchedJobs = await fetchJobsFromAPI();
        setJobs(fetchedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        message.error("Unable to fetch jobs. Please try again later.");
      }
    };

    fetchJobs();
  }, []);

  const handleNewJob = async (newJob) => {
    try {
      const savedJob = await addJobToAPI(newJob); // Save new job to backend
      setJobs((prevJobs) => [savedJob, ...prevJobs]);
      message.success("Job added successfully!");
    } catch (error) {
      console.error("Error adding new job:", error);
      message.error("Error adding new job. Please try again.");
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
