import React, { useState } from "react";
import "../styles/Mainboard.css";
// import JobPipeline from "./MyApplication/JobPipeline";
import DropdownComponent from "./MyApplication/ActionButtons/DropdownComponent";
import FilterDropdownMenu from "./MyApplication/ActionButtons/FilterDropdown";
import MenuDropdown from "./MyApplication/ActionButtons/MenuDropdown";
import Newjob from "./MyApplication/ActionButtons/Newjob";
import Addjob from "./MyApplication/ActionButtons/Addjob";
import { StyleProvider } from "@ant-design/cssinjs";
import AntJobModal from "./MyApplication/ActionButtons/AntJobModal";
// import JobTrackerSectionOne from "./MyApplication/JobTrackerSectionOne";

const MyApplication = ({ isSideDashOpen }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      className={`mainboard-section ${
        isSideDashOpen ? "" : "expanded-mainboard"
      }`}
    >
      <main className="mainboard-content">
        <div className="job-tracker-container">
          <div className="job-tracker-content-wrapper">
            {/* <JobPipeline /> */}
            {/* <JobTrackerSectionOne /> */}
            <div className="job-tracker-section false">
              <div className="cluster job-tracker-actions">
                <div className="ant-col"></div>
                <div className="ant-col action-buttons">
                  <DropdownComponent />
                  <FilterDropdownMenu />
                  <MenuDropdown />

                  <StyleProvider layer>
                    <Newjob setModalOpen={setModalOpen} />
                  </StyleProvider>
                </div>
              </div>
            </div>

            <Addjob setModalOpen={setModalOpen} />
          </div>
        </div>
      </main>

      <StyleProvider layer>
        <AntJobModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </StyleProvider>
    </div>
  );
};

export default MyApplication;
