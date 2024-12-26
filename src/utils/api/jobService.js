import axios from "axios";

const API_URL = "http://localhost:8080/api/jobs";

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
