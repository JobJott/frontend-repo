import axios from "axios";

const API_URL = "http://localhost:8080/api/user";

export const updateUserProfile = async (userData) => {
  try {
    const response = axios.put(`${API_URL}/profile`, userData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authtoken")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update user details"
    );
  }
};
