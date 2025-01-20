import React, { useState, useEffect } from "react";
import "./Overview.css";
import { StyleProvider } from "@ant-design/cssinjs";
import AntJobModal from "../MyApplication/ActionButtons/AntJobModal";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import { DatePicker, Divider, Radio } from "antd";
import { MailOutline, RadarOutlined, StarOutline } from "@mui/icons-material";
import JobjottModal from "./jobjottModal.jsx";
import GoalsModal from "./goalsModal.jsx";
import { Pie } from "react-chartjs-2";
import dayjs from "dayjs";
import { fetchStatusData } from "../../../../utils/api/jobService.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { EditOutlined } from "@ant-design/icons";
import { getGoals } from "../../../../utils/api/goalService.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Overview = ({
  modalOpen,
  setModalOpen,
  jobs,
  setJobs,
  fallbackSymbol = "¤",
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [goalModalOpen, setGoalModalOpen] = useState(false);
  const [goal, setGoal] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const selectedGoal = goal?._id;
  const widthValue = "100%";
  const gutterValue = "0";
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: dayjs().startOf("week"),
    endDate: dayjs().endOf("week"),
  });
  const [timeFrame, setTimeFrame] = useState("thisWeek");
  const [statusData, setStatusData] = useState({
    bookmarked: 5,
    applied: 10,
    interviewing: 3,
    negotiating: 2,
  });

  // Fetch goals on component mount
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const fetchedGoals = await getGoals();
        if (fetchedGoals) {
          setGoal(fetchedGoals); // Assuming only one goal is returned
        }
      } catch (error) {
        console.error("Error fetching goals:", error);
      }
    };

    fetchGoals();
  }, []);

  // Function to handle the opening of the modal
  const handleEditGoal = () => {
    setGoalModalOpen(true);
  };

  const extractCurrencySymbol = (currencyName) => {
    const matchedCurrency = currencies.find(
      (currency) => currency.name === currencyName
    );
    return matchedCurrency ? matchedCurrency.symbol : fallbackSymbol; // Fallback symbol
  };

  const renderGoalText = (goal) => {
    if (
      goal?.targetGoal === "Land a new job in the same career path" ||
      goal?.targetGoal === "Land a new job in a new career path"
    ) {
      return "Next Career Goal: Land a new job";
    } else if (goal?.targetGoal === "Explore new career paths") {
      return "Next Career Goal: Explore opportunities";
    }
    return "Next Career Goal: Land a new job";
  };

  const handleDateRangeChange = (dates) => {
    if (dates) {
      setSelectedDateRange({
        startDate: dates[0],
        endDate: dates[1],
      });
      setTimeFrame(null);
    }
  };

  const handleTimeFrameChange = (value) => {
    setTimeFrame(value);
    if (value === "thisWeek") {
      setSelectedDateRange({
        startDate: dayjs().startOf("week"),
        endDate: dayjs().endOf("week"),
      });
    } else if (value === "lastWeek") {
      setSelectedDateRange({
        startDate: dayjs().subtract(1, "week").startOf("week"),
        endDate: dayjs().subtract(1, "week").endOf("week"),
      });
    }
  };

  const chartData = {
    labels: ["Bookmarked", "Applied", "Interviewing", "Negotiating"],
    datasets: [
      {
        label: "Job Status Distribution",
        data: Object.values(statusData),
        backgroundColor: ["#8e44ad", "#3498db", "#e67e22", "#2ecc71"],
        hoverBackgroundColor: ["#9b59b6", "#5dade2", "#f39c12", "#27ae60"],
      },
    ],
  };

  // useEffect(() => {
  //   // Fetch updated status data based on the selected date range
  //   const fetchAndSetStatusData = async () => {
  //     try {
  //       const response = await fetchStatusData({
  //         startDate: selectedDateRange.startDate.format("YYYY-MM-DD"),
  //         endDate: selectedDateRange.endDate.format("YYYY-MM-DD"),
  //       });
  //       setStatusData(response);
  //     } catch (error) {
  //       console.error("Error fetching status data:", error.message);
  //     }
  //   };

  //   fetchAndSetStatusData();
  // }, [selectedDateRange]);

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
                {/* visualization chart div */}
                <div className="ant-space-item">
                  <div className="border bg-card text-card-foreground shadow-sm rounded-tl-xl rounded-br-xl">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="text-2xl font-semibold leading-none tracking-tight">
                        <div className="flex flex-col gap-2 items-start md:flex-row md:items-center md:gap-4">
                          <span className="text-[24px]">
                            {goal
                              ? renderGoalText(goal)
                              : "Next Career Goal: Land a new job"}
                          </span>

                          <button
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-75 underline-offset-4 h-10 py-2 rounded-md text-[#99BFBF] text-[14px] leading-5 font-normal hover:no-underline px-0"
                            onClick={handleEditGoal}
                          >
                            <EditOutlined />
                            <span className="ml-2">
                              {selectedGoal ? "Edit Goal" : "Add Goal"}
                            </span>
                          </button>
                        </div>
                      </h3>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="flex flex-col gap-4 md:flex-row md:gap-2">
                        <div className="grow-0 shrink-0 basis-1/3">
                          <div className="leading-4">
                            <div className="leading-5 text-base mb-0.5 text-grey-800">
                              Target Title
                            </div>
                            <div className="leading-5 text-base font-semibold text-black">
                              {goal?.targetTitle || "Not set"}
                            </div>
                          </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-1/3">
                          <div className="leading-4">
                            <div className="leading-5 text-base mb-0.5 text-grey-800">
                              Target Date
                            </div>
                            <div className="leading-5 text-base font-semibold text-black">
                              {goal?.targetDate
                                ? new Date(goal.targetDate).toLocaleDateString()
                                : "Not set"}
                            </div>
                          </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-1/3">
                          <div className="leading-4">
                            <div className="leading-5 text-base mb-0.5 text-grey-800">
                              Target Salary Range
                            </div>
                            <div className="leading-5 text-base font-semibold text-black">
                              {goal?.salaryMin && goal?.salaryMax
                                ? `${extractCurrencySymbol(goal?.currency)} ${
                                    goal.salaryMin
                                  } to ${extractCurrencySymbol(
                                    goal?.currency
                                  )} ${goal.salaryMax}`
                                : "₦0.00 to ₦0.00"}

                              {/* {goal?.salaryMin && goal?.salaryMax
                                ? `${goal.salaryMin} to ${goal.salaryMax}`
                                : "₦0.00 to ₦0.00"} */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ant-space-item">
                  <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                    <div className="p-6 bg-white shadow rounded-tl-xl rounded-br-xl">
                      <h2 className="text-lg font-semibold mb-4">
                        Job Tracking Pipeline
                      </h2>

                      {/* Date range selector  */}
                      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                          <DatePicker.RangePicker
                            format="YYYY-MM-DD"
                            onChange={handleDateRangeChange}
                            value={[
                              selectedDateRange.startDate,
                              selectedDateRange.endDate,
                            ]}
                          />
                        </div>
                        <div>
                          <Radio.Group
                            value={timeFrame}
                            onChange={(e) =>
                              handleTimeFrameChange(e.target.value)
                            }
                          >
                            <Radio.Button value="thisWeek">
                              This Week
                            </Radio.Button>
                            <Radio.Button value="lastWeek">
                              Last Week
                            </Radio.Button>
                          </Radio.Group>
                        </div>
                      </div>

                      {/* Visualization chart  */}
                      <div className="flex flex-col items-center">
                        <Pie
                          data={chartData}
                          options={{
                            responsive: true,
                            plugins: {
                              legend: {
                                display: true,
                                position: "bottom",
                              },
                            },
                          }}
                        />
                        <div className="mt-4">
                          <p className="text-[14px] leading-5 text-gray-500">
                            Total Jobs:{" "}
                            {Object.values(statusData).reduce(
                              (a, b) => a + b,
                              0
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Left Section: Weekly Applications --> */}
                    <div className="w-full lg:w-1/2 p-6 bg-white shadow rounded-xl rounded-tl-none rounded-bl-none">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">
                          Job Applications
                        </h2>
                        <button className="text-gray-500 hover:text-gray-800">
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className="w-5 h-5"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="relative w-40 h-40">
                          <svg
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 100 100"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="#AF8BB8"
                              strokeWidth="10"
                            ></circle>
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="#793D88"
                              strokeWidth="10"
                              strokeDasharray="282.743"
                              strokeDashoffset="70"
                              style={{
                                transition: "stroke-dashoffset 500ms ease-out",
                              }}
                            ></circle>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <span className="text-3xl font-bold text-gray-900">
                                12
                              </span>
                              <p className="text-sm text-gray-600">
                                Applications Sent
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-center">
                          <span className="bg-purple-200 text-purple-600 text-xs px-2 py-1 rounded">
                            Goal: 5
                          </span>
                          <p className="text-sm text-gray-600 mt-2">
                            You achieved your weekly goal! 🎉
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Right Section: Application History --> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Task List Section */}
            <div className="ant-col ant-col-xs-24 ant-col-xl-8 px-2">
              <div className="ant-row gap-y-4 -mx-2">
                <div className="ant-col ant-col-xs-24 ant-col-lg-12 ant-col-xl-24 px-2">
                  <div className="bg-black p-8 pt-7 text-white font-medium text-sm border border-border rounded-xl rounded-tl-none rounded-br-none mb-4">
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
                              <g clipPath="url(#clip0_116_5574)">
                                <path d="M14.9376 5.20472C15.9192 5.20472 16.715 4.40895 16.715 3.42731C16.715 2.44567 15.9192 1.6499 14.9376 1.6499C13.956 1.6499 13.1602 2.44567 13.1602 3.42731C13.1602 4.40895 13.956 5.20472 14.9376 5.20472Z"></path>
                                <path
                                  clipRule="evenodd"
                                  d="M20.2444 8.56068C18.7032 7.01949 16.2046 7.01949 14.6633 8.56066L1.28283 21.9411C-0.25834 23.4824 -0.25834 25.9811 1.28283 27.5222L1.50853 27.7479C3.04972 29.2891 5.54846 29.2891 7.08963 27.7479L20.4701 14.3674C22.0113 12.8263 22.0113 10.3275 20.4701 8.78637L20.2444 8.56068ZM16.5237 10.421C17.0374 9.90731 17.8703 9.90731 18.384 10.421L18.6098 10.6467C19.1235 11.1605 19.1235 11.9934 18.6098 12.5071L16.1384 14.9784L14.0523 12.8924L16.5237 10.421ZM12.1919 14.7527L14.278 16.8388L5.22927 25.8876C4.71555 26.4013 3.88263 26.4013 3.36891 25.8876L3.1432 25.6618C2.62948 25.1481 2.62948 24.3152 3.1432 23.8015L12.1919 14.7527Z"
                                  fillRule="evenodd"
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
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-[14px] leading-5 font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-75 bg-[#99BFBF] text-black hover:bg-secondary/80 focus-visible:ring-secondary h-10 px-4 py-2 rounded-3xl w-full"
                        onClick={() => setOpenModal(true)}
                      >
                        Upgrade to Jobjott+
                      </button>
                    </div>
                  </div>

                  <div className="summary-module-wrapper followups-container rounded-tl-xl rounded-bl-xl rounded-tr-none rounded-br-none">
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
      <GoalsModal
        goalModalOpen={goalModalOpen}
        setGoalModalOpen={setGoalModalOpen}
        selectedGoal={selectedGoal}
        goal={goal}
        currencies={currencies}
        setCurrencies={setCurrencies}
        refreshGoals={async () => {
          const updatedGoals = await getGoals();
          setGoal(updatedGoals);
        }}
      />
    </>
  );
};

export default Overview;
