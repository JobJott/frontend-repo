import axios from "axios";

const API_URL = "http://localhost:8080/api/salary-ranges";

// Add or update salary details
export const addSalaryRange = async (salaryData) => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(`${API_URL}/add`, salaryData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding salary range:", error);
    throw error;
  }
};

// Get all salary ranges for the authenticated user
export const getSalaryRanges = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching salary range:", error);
    throw error;
  }
};

// Update an existing salary range
export const updateSalaryRange = async (id, salaryData) => {
  try {
  const token = localStorage.getItem("authToken");
    const response = await axios.put(
      `${API_URL}/${id}`,
      salaryData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating salary range:", error);
    throw error;
  }
};
