// This file ensures that tokens are refreshed automatically when they expire.

import axios from "axios";
import { getValidToken } from "./tokenHelper";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// this request interceptor to include access token
axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      const token = await getValidToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// this response interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 403) {
      try {
        // Attempt to refresh the token
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          throw new Error("No refresh token found");
        }

        // Send refresh token request
        const res = await axiosInstance.post(
          "http://localhost:8080/api/auth/refresh-token",
          { token: refreshToken }
        );
        localStorage.setItem("authtoken", res.data.token);

        // Retry the failed request with the new token
        error.config.headers.Authorization = `Bearer ${res.data.token}`;
        return axiosInstance.request(error.config);
      } catch (err) {
        console.error("Token refresh failed:", err);
        localStorage.removeItem("authtoken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/auth/signin"; // Redirect to login on failure
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
