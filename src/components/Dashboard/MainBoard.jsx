import React from "react";
import "./styles/Mainboard.css";
import JobPipeline from "./MainboardContents/JobPipeline";
import DropdownComponent from "./MainboardContents/DropdownComponent";
import FilterDropdownMenu from "./MainboardContents/FilterDropdown";
import MenuDropdown from "./MainboardContents/MenuDropdown";
import Newjob from "./MainboardContents/Newjob";
import { StyleProvider } from "@ant-design/cssinjs";

const MainBoard = ({ isSideDashOpen }) => {
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

            <div className="job-tracker-section false">
              <div className="cluster job-tracker-actions">
                <div className="ant-col"></div>
                <div className="ant-col action-buttons">
                  <DropdownComponent />
                  <FilterDropdownMenu />
                  <MenuDropdown />

                  <StyleProvider layer>
                    <Newjob />
                  </StyleProvider>
                </div>
              </div>
            </div>

            {/* Empty State Section */}
            <div className="job-tracker-section false">
              <div className="job-tracker-table-container">
                <div className="table-column-wrapper">
                  <div className="ant-empty ant-empty-normal">
                    <div className="ant-empty-image" style={{ height: "60px" }}>
                      <svg
                        className="ant-empty-img-simple"
                        width="64"
                        height="41"
                        viewBox="0 0 64 41"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="translate(0 1)"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <ellipse
                            className="ant-empty-img-simple-ellipse"
                            cx="32"
                            cy="33"
                            rx="32"
                            ry="7"
                          ></ellipse>
                          <g
                            className="ant-empty-img-simple-g"
                            fillRule="nonzero"
                          >
                            <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                            <path
                              d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                              className="ant-empty-img-simple-path"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ant-empty-description">
                      You don't have any saved jobs
                    </div>
                    <div className="ant-empty-footer">
                      <p>
                        Save jobs from across the web using our Chrome Extension
                        or add them manually.
                      </p>
                      <a
                        className="ant-btn ant-btn-primary"
                        href="https://chrome.google.com/webstore/detail/teals-job-tracker/opafjjlpbiaicbbgifbejoochmmeikep"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Install Chrome Extension{" "}
                        <span className="anticon">
                          <svg
                            fill="currentColor"
                            focusable="false"
                            data-icon="right"
                            width="1em"
                            height="1em"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                          >
                            <path d="M533.2 492.3L277.6 236.7a32 32 0 0145.3-45.3l282.5 282.6a32 32 0 010 45.3L322.9 802.1a32 32 0 11-45.3-45.3l255.6-255.6H176a32 32 0 010-64h357.2z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainBoard;
