import { Progress } from "antd";
import axios from "axios";

const API_URL = "http://localhost:8080/api/jobs";

// Add salary range
export const addSalaryRangeToAPI = async (jobId, salaryRange) => {
  const token = localStorage.getItem("authtoken");
  const response = await axios.post(
    `${API_URL}/salary-range/add`,
    { jobId, ...salaryRange },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

// Update salary range
export const updateSalaryRangeInAPI = async (jobId, salaryRange) => {
  const token = localStorage.getItem("authtoken");
  const response = await axios.put(
    `${API_URL}/salary-range/${jobId}`,
    salaryRange,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

// Get salary details for a specific job
export const fetchSalaryDetailsFromAPI = async (jobId) => {
  const token = localStorage.getItem("authtoken");
  const response = await axios.get(`${API_URL}/salary-range/${jobId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Fetch jobs from backend
export const fetchJobsFromAPI = async () => {
  const token = localStorage.getItem("authtoken");
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Add a new job
export const addJobToAPI = async (job) => {
  const token = localStorage.getItem("authtoken");
  const response = await axios.post(`${API_URL}/add`, job, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Update a job
export const updateJobInAPI = async (jobId, updatedJob) => {
  const token = localStorage.getItem("authtoken");
  const response = await axios.put(`${API_URL}/${jobId}`, updatedJob, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Delete a job
export const deleteJobFromAPI = async (jobId) => {
  const token = localStorage.getItem("authtoken");
  await axios.delete(`${API_URL}/${jobId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Fetch a single job by ID
export const fetchJobByIdFromAPI = async (jobId) => {
  const token = localStorage.getItem("authtoken");
  const response = await axios.get(`${API_URL}/${jobId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Update job status
export const updateJobStatusInAPI = async (jobId, newStatus) => {
  const token = localStorage.getItem("authtoken");
  const response = await axios.patch(
    `${API_URL}/${jobId}/status`,
    { status: newStatus },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};

export const updateProgressInAPI = async (jobId, progressUpdate) => {
  try {
    const response = await axios.put(
      `${API_URL}/${jobId}/progress`,
      {
        progress: progressUpdate,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authtoken")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error updating progress:", error);
    throw error;
  }
};
