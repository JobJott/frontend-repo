// import React from "react";
// import { logoutUser } from "../../utils/tokenManager";
// import Loader from "../Pages/Loader";

// const LogoutHandler = () => {
//   const [loading, setLoading] = useState(false);

//   const handleLogout = async () => {
//     setLoading(true); // Show loader when logging out

//     try {
//       await logoutUser();
//     } catch (error) {
//       console.error("Logout failed:", error);
//     } finally {
//       setLoading(false); // Hide loader once logout is complete
//     }
//   };

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <button onClick={handleLogout} className="logout-button">
//           Logout{" "}
//         </button>
//       )}
//     </>
//   );
// };

// export default LogoutHandler;
