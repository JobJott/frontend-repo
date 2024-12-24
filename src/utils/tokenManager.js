export const isTokenExpired = (token) => {
  if (!token) return false;

  try {
    const { exp } = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
    return Date.now() >= exp * 1000;
  } catch (error) {
    return true; // If decoding fails (invalid token), consider it expired
  }
};

export const logoutUser = () => {
  localStorage.removeItem("authtoken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/auth/signin";
};
