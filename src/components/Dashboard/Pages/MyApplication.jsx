import React, { useEffect, useState } from "react";
import "../styles/MyApplications.css";
// import JobTrackerSectionTwo from "./MyApplication/JobTrackerSectionTwo";
import { StyleProvider } from "@ant-design/cssinjs";
import AntJobModal from "./MyApplication/ActionButtons/AntJobModal";
import { Outlet } from "react-router-dom";
import { message } from "antd";
import {
  fetchJobsFromAPI,
  updateJobInAPI,
} from "../../../utils/api/jobService";

const MyApplication = () => {
  const [jobs, setJobs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingJobs, setLoadingJobs] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoadingJobs(true);
        const fetchedJobs = await fetchJobsFromAPI();
        setJobs(fetchedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        message.error("Unable to fetch jobs. Please try again later.");
      } finally {
        setLoadingJobs(false);
      }
    };

    fetchJobs();
  }, []);

  const handleJobUpdate = async (updatedJob) => {
    try {
      // Call API to update the job in the database
      const updatedJobresponse = await updateJobInAPI(
        updatedJob._id,
        updatedJob
      );

      // Update the jobs state
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job._id === updatedJobresponse._id
            ? { ...job, ...updatedJobresponse }
            : job
        )
      );

      message.success("Job updated successfully!");
    } catch (error) {
      console.error("Error updating job:", error);
      message.error("Failed to update job. Please try again.");
    }
  };

  return (
    <>
      <main className="mainboard-content">
        <div className="job-tracker-container">
          <div className="job-tracker-content-wrapper">
            {/* <JobTrackerSectionTwo /> */}
            <Outlet
              context={{
                setModalOpen,
                jobs,
                setJobs,
                loadingJobs,
                setLoadingJobs,
                handleJobUpdate,
              }}
            />
          </div>
        </div>
      </main>

      {/* AntJobModal: pass handleNewJob function to modal for adding a new job */}
      <StyleProvider layer>
        <AntJobModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setJobs={setJobs}
        />
      </StyleProvider>
    </>
  );
};

export default MyApplication;
