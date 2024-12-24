import { logoutUser } from "../../utils/tokenManager";

let activityTimeout;
let lastInteractionTime = Date.now();

const resetActivityTimeout = (timeoutDuration = 60 * 60 * 1000) => {
  const now = Date.now();

  // Update last interaction time
  lastInteractionTime = now;

  // Clear any existing timeout
  if (activityTimeout) clearTimeout(activityTimeout);

  // Set logout timeout to 1 hour
  activityTimeout = setTimeout(() => {
    const timeElapsed = Date.now() - lastInteractionTime;

    if (timeElapsed >= timeoutDuration) {
      logoutUser();
    }
  }, timeoutDuration); // 1 hour
};

const startActivityTracker = () => {
  ["click", "mousemove", "keydown", "scroll"].forEach((event) => {
    window.addEventListener(event, resetActivityTimeout);
  });

  resetActivityTimeout(); // Initialize timeout
};

const stopActivityTracker = () => {
  ["click", "mousemove", "keydown", "scroll"].forEach((event) => {
    window.removeEventListener(event, resetActivityTimeout);
  });

  if (activityTimeout) clearTimeout(activityTimeout); // Clear timeout on unmount
};

export { startActivityTracker, stopActivityTracker };

// let warningTimeout;
// const resetActivityTimeout = () => {
//   if (activityTimeout) clearTimeout(activityTimeout);
//   if (warningTimeout) clearTimeout(warningTimeout);

//   warningTimeout = setTimeout(() => {
//     alert('You will be logged out due to inactivity.');
//   }, 59 * 60 * 1000); // Show warning 1 minute before logout

//   activityTimeout = setTimeout(() => {
//     logoutUser();
//   }, 60 * 60 * 1000); // Log out after 1 hour
// }; not needed for now
