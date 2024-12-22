import React, { useState } from "react";
import DropdownComponent from "./ActionButtons/DropdownComponent";
import FilterDropdownMenu from "./ActionButtons/FilterDropdown";
import MenuDropdown from "./ActionButtons/MenuDropdown";
import { StyleProvider } from "@ant-design/cssinjs";
import Newjob from "./ActionButtons/Newjob";
import Addjob from "./ActionButtons/Addjob";
import AntJobModal from "./ActionButtons/AntJobModal";

const JobTrackerSection0 = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
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
      <StyleProvider layer>
        <AntJobModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </StyleProvider>
    </div>
  );
};

export default JobTrackerSection0;
