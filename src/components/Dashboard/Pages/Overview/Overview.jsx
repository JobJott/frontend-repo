import React, { useState } from "react";
import "./Overview.css";
import { StyleProvider } from "@ant-design/cssinjs";
import AntJobModal from "../MyApplication/ActionButtons/AntJobModal";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import { Divider } from "antd";
import { MailOutline, RadarOutlined, StarOutline } from "@mui/icons-material";
import JobjottModal from "./jobjottModal.jsx";

const Overview = ({ modalOpen, setModalOpen, jobs, setJobs }) => {
  const [openModal, setOpenModal] = useState(false);
  const widthValue = "100%";
  const gutterValue = "0";

  return (
    <>
      <div className="p-2 bg-white w-full border-b border-solid border-[#ece4db] flex justify-between items-center px-5">
        <div>
          {/* <h4>`Welcome home, ${user.firstName}!`</h4> */}
          <h4 className="text-[16px]">Welcome home, Osas!</h4>
        </div>
        <div>
          <ul className="flex gap-4 items-center">
            <li className="p-2 rounded-md border border-1-[#111313]">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="text-exl leading-8"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66zM256 480a80.06 80.06 0 0 0 70.44-42.13 4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480z"></path>
              </svg>
            </li>
            <span>
              <Divider variant="solid" type="vertical" className="!m-0 !h-8" />
            </span>
            <li>
              <button
                type="button"
                className="bg-transparent border border-1-solid border-[#ece4db] rounded-full px-6 py-3 text-[12px] font-semibold"
                onClick={() => setModalOpen(true)}
              >
                <span className="flex gap-1 items-center justify-center">
                  {" "}
                  Add New Application
                  <FaPlusCircle />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <main className="ml-4 mr-4 mt-4 mb-4 ">
        <div
          className="career-dashboard _center_1szvl_1 home-container !mt-0 !p-0"
          style={{ "--width": widthValue, "--gutter": gutterValue }}
        >
          <div
            className="flex -ml-2 -mr-2 gap-y-4 min-w-0"
            style={{ flexFlow: "row wrap" }}
          >
            <div className="ant-col ant-col-xs-24 ant-col-xl-16 pl-2 pr-2">
              <div className="ant-space ant-space-vertical gap-4 flex-col">
                {/* Career Goal Section */}
                <div className="hold">
                  <section className="career-goal">
                    <h2>
                      Upcoming Career Objective:{" "}
                      <strong>Secure a New Job</strong>
                    </h2>
                    <button>Edit Goals ✏️</button>
                    <div className="goal-details">
                      <p>
                        <strong>Desired Position:</strong> Not Specified
                      </p>
                      <p>
                        <strong>Target Deadline:</strong> Not Specified
                      </p>
                      <p>
                        <strong>Salary Expectation:</strong> $0.00 - $0.00
                      </p>
                    </div>
                  </section>

                  {/* Introduction Video Section */}
                  <section className="intro-video">
                    <h3>
                      Discover the JOBJOTT Approach: Crafting Tailored Resumes
                    </h3>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/JOBJOTT"
                      title="JOBJOTT Introduction Video"
                      allowFullScreen
                    ></iframe>
                    <button>Mark as Completed ✅</button>
                  </section>
                </div>
              </div>
            </div>

            {/* Task List Section */}
            <div className="ant-col ant-col-xs-24 ant-col-xl-8 px-2">
              <div className="ant-row gap-y-4 -mx-2">
                <div className="ant-col ant-col-xs-24 ant-col-lg-12 ant-col-xl-24 px-2">
                  <div className="bg-black p-8 pt-7 text-white font-medium text-sm border border-border rounded-lg mb-4">
                    <div className="mb-7">
                      <span className="flex items-center justify-start gap-2">
                        {" "}
                        <h2 className="text-[32px] font-semibold">
                          J
                          <span>
                            {/* <FiLoader /> */}
                            <RadarOutlined />
                          </span>
                          bJ
                          <span>
                            {/* <FiLoader /> */}
                            <RadarOutlined />
                          </span>
                          tt
                        </h2>
                        <FaPlus className="text-[25px]" />
                      </span>
                      <span className="text-[1.25rem] leading-7 font-semibold">
                        What's included:
                      </span>
                    </div>

                    <div>
                      <ul className="mb-8">
                        <li className="flex flex-row items-center justify-start gap-4 mb-6">
                          <div className="w-11 h-11 bg-white rounded-md flex flex-row justify-center items-center">
                            <MailOutline className="w-5 h-5 text-black " />
                          </div>

                          <div>
                            <div className="text-[14px] leading-5 font-semibold mb-1 font-sans">
                              Cover Letter Generator
                            </div>
                            <div className="text-[12px] leading-4 font-medium">
                              An intuitive AI cover letter generator
                            </div>
                          </div>
                        </li>
                        <li className="flex flex-row items-center justify-start gap-4 mb-6">
                          <div className="w-11 h-11 bg-white rounded-md flex flex-row justify-center items-center">
                            <StarOutline className="w-5 h-5 text-black " />
                          </div>
                          <div>
                            <div className="text-[14px] leading-5 font-semibold mb-1 font-sans">
                              Unlimited Keywords
                            </div>
                            <div className="text-[12px] leading-4 font-medium">
                              Strengthen your resume with keywords
                            </div>
                          </div>
                        </li>
                        <li className="flex flex-row items-center justify-start gap-4">
                          <div className="w-11 h-11 bg-white rounded-md flex flex-row justify-center items-center">
                            <svg
                              fill="#111313"
                              height="29"
                              viewBox="0 0 29 29"
                              width="29"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-primary"
                            >
                              <g clip-path="url(#clip0_116_5574)">
                                <path d="M14.9376 5.20472C15.9192 5.20472 16.715 4.40895 16.715 3.42731C16.715 2.44567 15.9192 1.6499 14.9376 1.6499C13.956 1.6499 13.1602 2.44567 13.1602 3.42731C13.1602 4.40895 13.956 5.20472 14.9376 5.20472Z"></path>
                                <path
                                  clip-rule="evenodd"
                                  d="M20.2444 8.56068C18.7032 7.01949 16.2046 7.01949 14.6633 8.56066L1.28283 21.9411C-0.25834 23.4824 -0.25834 25.9811 1.28283 27.5222L1.50853 27.7479C3.04972 29.2891 5.54846 29.2891 7.08963 27.7479L20.4701 14.3674C22.0113 12.8263 22.0113 10.3275 20.4701 8.78637L20.2444 8.56068ZM16.5237 10.421C17.0374 9.90731 17.8703 9.90731 18.384 10.421L18.6098 10.6467C19.1235 11.1605 19.1235 11.9934 18.6098 12.5071L16.1384 14.9784L14.0523 12.8924L16.5237 10.421ZM12.1919 14.7527L14.278 16.8388L5.22927 25.8876C4.71555 26.4013 3.88263 26.4013 3.36891 25.8876L3.1432 25.6618C2.62948 25.1481 2.62948 24.3152 3.1432 23.8015L12.1919 14.7527Z"
                                  fill-rule="evenodd"
                                ></path>
                                <path d="M26.1962 18.2388C26.8506 18.2388 27.3811 17.7083 27.3811 17.0538C27.3811 16.3994 26.8506 15.8689 26.1962 15.8689H25.0112V14.684C25.0112 14.0295 24.4807 13.499 23.8263 13.499C23.1719 13.499 22.6414 14.0295 22.6414 14.684V15.8689H21.4564C20.802 15.8689 20.2715 16.3994 20.2715 17.0538C20.2715 17.7083 20.802 18.2388 21.4564 18.2388H22.6414V19.4237C22.6414 20.0782 23.1719 20.6087 23.8263 20.6087C24.4807 20.6087 25.0112 20.0782 25.0112 19.4237V18.2388H26.1962Z"></path>
                                <path d="M27.3811 5.20476C27.3811 5.85918 26.8506 6.3897 26.1962 6.3897H25.0112V7.57461C25.0112 8.22903 24.4807 8.75955 23.8263 8.75955C23.1719 8.75955 22.6414 8.22903 22.6414 7.57461V6.3897H21.4564C20.802 6.3897 20.2715 5.85918 20.2715 5.20476C20.2715 4.55033 20.802 4.01982 21.4564 4.01982H22.6414V2.83484C22.6414 2.18042 23.1719 1.6499 23.8263 1.6499C24.4807 1.6499 25.0112 2.18042 25.0112 2.83484V4.01982H26.1962C26.8506 4.01982 27.3811 4.55034 27.3811 5.20476Z"></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_116_5574">
                                  <rect
                                    height="28.4386"
                                    transform="translate(0.126953 0.464844)"
                                    width="28.4386"
                                  ></rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>

                          <div>
                            <div className="text-[14px] leading-5 font-semibold mb-1 font-sans">
                              Unlimited AI
                            </div>
                            <div className="text-[12px] leading-4 font-medium">
                              Customize and Enhance with AI
                            </div>
                          </div>
                        </li>
                      </ul>

                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-[14px] leading-5 font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-75 bg-white text-black hover:bg-secondary/80 focus-visible:ring-secondary h-10 px-4 py-2 rounded-3xl w-full"
                        onClick={() => setOpenModal(true)}
                      >
                        Upgrade to Jobjott+
                      </button>
                    </div>
                  </div>

                  <div className="summary-module-wrapper followups-container rounded-xl">
                    <div className="module-header flex mb-4 justify-between">
                      <div className="module-heading">
                        <h2 className="h3 tracking-normal font-semibold leading-[1.2]">
                          Upcoming Interviews{" "}
                        </h2>
                      </div>
                      <div className="module-header-action"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <StyleProvider layer>
        <AntJobModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setJobs={setJobs}
        />
      </StyleProvider>
      <JobjottModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Overview;
