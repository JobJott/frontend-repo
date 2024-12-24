// src/utils/tokenHelper.js
import axiosInstance from "./axiosInstance";
import { logoutUser, isTokenExpired } from "./tokenManager";

// This function will check and return a valid token
export const getValidToken = async () => {
  const token = localStorage.getItem("authtoken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (token && !isTokenExpired(token)) {
    // If the access token is valid, return it
    return token;
  } else {
    // If the access token is expired or missing, attempt to refresh it
    return await refreshAccessToken(refreshToken);
  }
};

// Function to refresh the access token using the refresh token
const refreshAccessToken = async (refreshToken) => {
  if (!refreshToken || isTokenExpired(refreshToken)) {
    // If the refresh token is expired or missing, log the user out
    logoutUser();
    return null;
  }

  try {
    const response = await axiosInstance.post(
      "http://localhost:8080/api/auth/refresh-token",
      { token: refreshToken }
    );
    localStorage.setItem("authtoken", response.data.token); // Store new access token
    return response.data.token; // Return new token
  } catch (error) {
    logoutUser(); // If refresh fails, log the user out
    return null;
  }
};
