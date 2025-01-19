// export const isTokenExpired = (token, bufferTime = 5 * 60 * 1000) => {
//   if (!token) return false;

//   try {
//     const { exp } = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
//     const expiryTime = exp * 1000;
//     return Date.now() >= expiryTime - bufferTime; // Near expiry if within buffer time
//   } catch (error) {
//     return true; // If decoding fails, consider it near expiry
//   }
// };

// export const logoutUser = () => {
//   localStorage.removeItem("authtoken");
//   localStorage.removeItem("refreshToken");
//   window.location.href = "/auth/signin";
// };
