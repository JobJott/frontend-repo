import axiosInstance from "../axiosInstance";

export const logoutUser = async (req, res) => {
  try {
    await axiosInstance.post("/auth/logout");
    localStorage.removeItem("authtoken");
    console.log("User logged out successfully!");
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
