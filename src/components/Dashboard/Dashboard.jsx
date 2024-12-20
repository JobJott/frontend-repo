import React, { useState } from "react";
import MainBoard from "./MainBoard";
import SideDash from "./SideDash";
import "./styles/Dashboard.css";

const Dashboard = () => {
  const [isSideDashOpen, setIsSideDashOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSideDashOpen((prev) => !prev);
  };

  return (
    <div className="dashboard">
      <SideDash isOpen={isSideDashOpen} toggleSidebar={toggleSidebar} />
      <MainBoard isSideDashOpen={isSideDashOpen} />
    </div>
  );
};

export default Dashboard;
