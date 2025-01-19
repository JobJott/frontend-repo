import React from "react";
import DropdownComponent from "./ActionButtons/DropdownComponent";
import FilterDropdownMenu from "./ActionButtons/FilterDropdown";
import MenuDropdown from "./ActionButtons/MenuDropdown";
import Newjob from "./ActionButtons/Newjob";
import Addjob from "./ActionButtons/Addjob";
import { StyleProvider } from "@ant-design/cssinjs";
import { useOutletContext } from "react-router-dom";

const JobTrackerSection0 = () => {
  const { setModalOpen } = useOutletContext();

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
    </div>
  );
};

export default JobTrackerSection0;
