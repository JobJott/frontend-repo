import React, { useState, useEffect } from "react";
import AddSalaryRange from "./JobTrackerSectOne/AddSalaryRange";
import { Button, Space, Typography, Radio } from "antd";
import {
  LeftCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  RightCircleOutlined,
  CheckOutlined,
  BulbOutlined,
  UpCircleOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";
import EditJobModal from "./JobTrackerSectOne/EditJobModal";
import { StyleProvider } from "@ant-design/cssinjs";
import JobListingDrawer, {
  AppliedExtended,
  ApplyingExtended,
  BookmarkExtended,
  DeleteJobModal,
  InterviewingExtended,
  NegotiatingExtended,
} from "./JobTrackerSectOne/ExtendedSections";
import AntdTracker from "./JobTrackerSectOne/AntdTracker";
import "./JobTrackerSectOne/JobTrackerSectionOne.css";
import { useOutletContext } from "react-router-dom";

const columnData = [
  { title: "Date Saved", field: "added_at" },
  { title: "N/A", field: "posted_at" },
  { title: "N/A", field: "applied_at" },
  { title: "N/A", field: "follow_up_at" },
];

const JobTrackerSectionOne = () => {
  const { jobs, setJobs } = useOutletContext();

  useEffect(() => {
    // Check if there's a saved jobs list in localStorage and update state
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // If storedJobs exist, update state
    if (storedJobs.length > 0) {
      setJobs(storedJobs); // Update context state with stored jobs
    } else {
      // Fetch jobs from backend if localStorage is empty
      fetch("/api/jobs") // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => {
          setJobs(data);
          saveJobsToLocalStorage(data); // Save fetched jobs to localStorage
        })
        .catch((error) => console.error("Error fetching jobs:", error));
    }
  }, [setJobs]);

  useEffect(() => {
    console.log("Jobs in Section 1:", jobs); // To confirm jobs are passed down
  }, [jobs]);

  const getTimeDifference = (createdAt) => {
    const now = new Date();
    const savedDate = new Date(createdAt);
    const diffInMilliseconds = now - savedDate;
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

    if (diffInSeconds < 60) {
      return "a few seconds ago"; // For seconds under a minute
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  };

  // Function to save jobs to localStorage
  const saveJobsToLocalStorage = (updatedJobs) => {
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
  };

  // Handle job addition or update
  const addJob = async (newJob) => {
    try {
      // Send the new job to the backend
      const response = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });

      if (!response.ok) {
        throw new Error("Failed to save the job to the backend");
      }

      const savedJob = await response.json();

      // Update state and localStorage with the saved job from the backend
      const updatedJobs = [...jobs, savedJob];
      setJobs(updatedJobs);
      saveJobsToLocalStorage(updatedJobs);
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const INITIAL_STATUS = "f89e69f7-f859-4863-b63e-36c247bac3d5";
  const [selectedStatus, setSelectedStatus] = useState(INITIAL_STATUS);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [activeTab, setActiveTab] = useState("job-info");
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    setOne: [],
    setTwo: [],
    setThree: [],
  });
  const [selectedItem, setSelectedItem] = useState("Get Referral");
  const [secondSelectedItem, setSecondSelectedItem] =
    useState("Research & Prepare");
  const [thirdSelectedItem, setThirdSelectedItem] = useState(
    "Research your Targets"
  );
  const [isItemSelected, setIsItemSelected] = useState(false);

  const totalItems = {
    setOne: 5,
    setTwo: 4,
    setThree: 3,
  };

  const progressPercentage = {
    setOne: (checkedItems.setOne.length / totalItems.setOne) * 100,
    setTwo: (checkedItems.setTwo.length / totalItems.setTwo) * 100,
    setThree: Math.ceil(
      (checkedItems.setThree.length / totalItems.setThree) * 100
    ),
  };

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };
  const handleDeleteJobClick = () => setDeleteModalOpen(true);

  const statusOptions = [
    { label: "Bookmarked", value: "f89e69f7-f859-4863-b63e-36c247bac3d5" },
    { label: "Applying", value: "38b09bef-2c24-48b0-984a-fa0e5b0c060a" },
    { label: "Applied", value: "5689f93d-a084-489c-9a6a-7d74b155b49a" },
    { label: "Interviewing", value: "1c8934df-8fb9-4cdc-955c-e998c8d7a1b2" },
    { label: "Negotiating", value: "079cebfd-0e2e-458a-8782-58ea19a5af6d" },
    { label: "Accepted", value: "21b7fdb7-4260-430b-a648-3cab1eb83288" },
  ];

  const handleStatusChange = (e) => {
    const { value } = e.target;
    setSelectedStatus(value);
    setIsAccepted(
      value ===
        statusOptions.find((option) => option.label === "Accepted").value
    );
  };

  // Centralized function to update checked items
  const updateCheckedItems = (setKey, item, isChecked) => {
    setCheckedItems((prev) => ({
      ...prev,
      [setKey]: isChecked
        ? [...prev[setKey], item]
        : prev[setKey].filter((checkedItem) => checkedItem !== item),
    }));
    setIsExpanded(true);
  };

  // Handle checkbox change
  const handleBoxChecked = (setKey) => (e, item) => {
    updateCheckedItems(setKey, item, e.target.checked);
  };

  const handleBoxCheckedOne = handleBoxChecked("setOne");
  const handleBoxCheckedTwo = handleBoxChecked("setTwo");
  const handleBoxCheckedThree = handleBoxChecked("setThree");

  // Handle item selection for setOne
  const handleItemSelectedOne = (item, e) => {
    e.stopPropagation(); // Prevent event bubbling
    setSelectedItem(item); // Set the selected item
    setIsItemSelected(true); // Keep the section expanded when an item is selected
  };

  // Handle item selection for setTwo
  const handleItemSelectedTwo = (item, e) => {
    e.stopPropagation();
    setSecondSelectedItem(item);
    setIsItemSelected(true);
  };

  // Handle item selection for setThree
  const handleItemSelectedThree = (item, e) => {
    e.stopPropagation();
    setThirdSelectedItem(item);
    setIsItemSelected(true);
  };

  useEffect(() => {
    // Only update the expanded state if an item is selected
    if (isItemSelected) {
      setIsExpanded(true); // Ensure the section stays expanded
      setIsItemSelected(false); // Reset the item selected flag
    }
  }, [isItemSelected]);

  useEffect(() => {
    if (checkedItems.setOne.length === totalItems.setOne) {
      setIsExpanded(false);
    }
  }, [checkedItems.setOne]);

  useEffect(() => {
    if (checkedItems.setTwo.length === totalItems.setTwo) {
      setIsExpanded(false);
    }
  }, [checkedItems.setTwo]);

  useEffect(() => {
    if (checkedItems.setThree.length === totalItems.setThree) {
      setIsExpanded(false);
    }
  }, [checkedItems.setThree]);

  const renderExtendedSection = () => {
    switch (selectedStatus) {
      case "f89e69f7-f859-4863-b63e-36c247bac3d5":
        return (
          <BookmarkExtended
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            setIsExpanded={setIsExpanded}
          />
        );
      case "38b09bef-2c24-48b0-984a-fa0e5b0c060a":
        return (
          <ApplyingExtended
            checkedItems={checkedItems}
            setIsExpanded={setIsExpanded}
            selectedItem={selectedItem}
            handleBoxCheckedOne={handleBoxCheckedOne}
            handleItemSelectedOne={handleItemSelectedOne}
          />
        );
      case "5689f93d-a084-489c-9a6a-7d74b155b49a":
        return (
          <AppliedExtended isChecked={isChecked} setIsChecked={setIsChecked} />
        );
      case "1c8934df-8fb9-4cdc-955c-e998c8d7a1b2":
        return (
          <InterviewingExtended
            checkedItems={checkedItems}
            setIsExpanded={setIsExpanded}
            secondSelectedItem={secondSelectedItem}
            handleBoxCheckedTwo={handleBoxCheckedTwo}
            handleItemSelectedTwo={handleItemSelectedTwo}
          />
        );
      case "079cebfd-0e2e-458a-8782-58ea19a5af6d":
        return (
          <NegotiatingExtended
            checkedItems={checkedItems}
            setIsExpanded={setIsExpanded}
            thirdSelectedItem={thirdSelectedItem}
            handleBoxCheckedThree={handleBoxCheckedThree}
            handleItemSelectedThree={handleItemSelectedThree}
          />
        );
      // Add cases for other statuses here
      default:
        return null;
    }
  };

  const getProgressText = () => {
    switch (selectedStatus) {
      case "f89e69f7-f859-4863-b63e-36c247bac3d5":
        return `Bookmarked Steps: ${isChecked ? "100%" : "0%"} Complete`;
      case "38b09bef-2c24-48b0-984a-fa0e5b0c060a":
        return `Applying Steps: ${progressPercentage.setOne}% Complete`;
      case "5689f93d-a084-489c-9a6a-7d74b155b49a":
        return `Applied Steps: ${isChecked ? "100%" : "0%"} Complete`;
      case "1c8934df-8fb9-4cdc-955c-e998c8d7a1b2":
        return `Interviewing Steps: ${progressPercentage.setTwo}% Complete`;
      case "079cebfd-0e2e-458a-8782-58ea19a5af6d":
        return `Negotiating Steps: ${progressPercentage.setThree}% Complete`;
      default:
        return "Other Steps";
    }
  };

  return (
    <div className="job-tracker-section drawer-visible" data-projection-id="3">
      <div className="job-tracker-table-container hide-x-overflow shared-table-container ">
        <div className="table-column-wrapper">
          <div
            data-instance="tabulator-1734223037678-7874267"
            className="job-tracker-table tabulator"
            role="grid"
            style={{ height: "100%" }}
          >
            <div className="tabulator-header" role="rowgroup">
              <div className="tabulator-header-contents" role="rowgroup">
                <div
                  className="tabulator-headers"
                  role="row"
                  style={{ height: "37px" }}
                >
                  <div
                    className="tabulator-col role-cell"
                    role="columnheader"
                    aria-sort="none"
                    data-tabulator-field="role"
                    style={{
                      justifyContent: "center",
                      minWidth: "40px",
                      height: "37px",
                      width: "280px",
                    }}
                  >
                    <div className="tabulator-col-content">
                      <div className="tabulator-col-title-holder">
                        <div className="tabulator-col-title">Jobs</div>
                      </div>
                    </div>
                  </div>

                  {columnData.map((column, index) => (
                    <div
                      key={index}
                      className="tabulator-col tabulator-sortable tabulator-col-sorter-element"
                      role="columnheader"
                      aria-sort="none"
                      data-tabulator-field={column.field}
                      style={{
                        justifyContent: "center",
                        display: "none",
                        minWidth: "40px",
                        height: "37px",
                      }}
                    >
                      <div className="tabulator-col-content">
                        <div className="tabulator-col-title-holder">
                          <div className="tabulator-col-title">
                            {column.title}
                          </div>
                          <div className="tabulator-col-sorter">
                            <div className="tabulator-arrow"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="tabulator-frozen-rows-holder"
                  style={{ minWidth: "0px" }}
                ></div>
              </div>
            </div>

            <div
              className="tabulator-tableholder"
              tabIndex="0"
              style={{
                height: "calc(100% - 38px)",
                maxHeight: "calc(100% - 38px)",
              }}
            >
              <div
                className="tabulator-table"
                role="rowgroup"
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
              >
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className={`tabulator-row tabulator-selectable ${
                      index % 2 === 0 ? "tabulator-row-odd" : ""
                    }`}
                    role="row"
                  >
                    <div
                      className="tabulator-cell role-cell"
                      role="gridcell"
                      data-tabulator-field="role"
                      style={{ height: "56px", width: "280px" }}
                    >
                      <div className="formatterCell">
                        <div
                          className="invisible-button selected"
                          role="button"
                          tabIndex="0"
                        >
                          <div className="job-content">
                            <div className="job-role">{job.jobTitle}</div>
                            <div className="job-company">{job.companyName}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tabulator-cell"
                      role="gridcell"
                      data-tabulator-field="added_at"
                      style={{ display: "none", height: "56px" }}
                    >
                      <span
                        className="tabulator-cell-line-clamp tabulator-cell-full-background"
                        style={{ background: "" }}
                      >
                        {job.createdAt}
                      </span>
                    </div>
                    <div
                      className="tabulator-cell"
                      role="gridcell"
                      data-tabulator-field="posted_at"
                      style={{ display: "none", height: "56px" }}
                    >
                      {job.postedAt || "&nbsp;"}
                    </div>
                    <div
                      className="tabulator-cell"
                      role="gridcell"
                      data-tabulator-field="applied_at"
                      style={{ display: "none", height: "56px" }}
                    >
                      {job.appliedAt || "&nbsp;"}
                    </div>
                    <div
                      className="tabulator-cell"
                      role="gridcell"
                      data-tabulator-field="follow_up_at"
                      style={{ display: "none", height: "56px" }}
                    >
                      {job.followUpAt || "&nbsp;"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="table-drawer-wrapper">
          <div className="job-listing-drawer">
            <div className="mobile-drawer-actions">
              <a href="/job-tracker">
                <Button
                  type="link"
                  icon={<LeftCircleOutlined />}
                  className="ant-btn-link"
                >
                  Back
                </Button>
              </a>

              <div className="post-actions-container">
                <Space size="large">
                  {/* Edit Button */}
                  <Button
                    type="link"
                    icon={<EditOutlined />}
                    size="large"
                    className="ant-btn-icon-only"
                  />

                  {/* Delete Button */}
                  <Button
                    type="link"
                    icon={<DeleteOutlined />}
                    size="large"
                    className="ant-btn-icon-only"
                  />
                </Space>
              </div>
            </div>

            <div
              className="drawer-container"
              data-projection-id="1"
              style={{ transform: "none", transformOrigin: "50% 50% 0px" }}
            >
              <div className="drawer-dismiss-container">
                <Button
                  type="link"
                  size="large"
                  icon={<RightCircleOutlined />}
                  className="mt-2"
                />
              </div>

              <div
                dir="ltr"
                data-orientation="horizontal"
                className="w-full overflow-y-auto"
              >
                <div className="drawer-content">
                  <div className="job-listing-drawer-item job-listing-fields">
                    <div className="job-listing-fields-row">
                      <div className="job-listing-fields-secondary">
                        {/* Add Salary Range Section */}
                        <AddSalaryRange />
                      </div>

                      <div className="read-only-row end">
                        <Space direction="vertical" style={{ width: "100%" }}>
                          {jobs.map((job) => (
                            <div
                              className="read-row-container"
                              style={{ display: "block" }}
                            >
                              <Typography.Title level={2}>
                                {job?.jobTitle}
                              </Typography.Title>
                              <div className="job-detail-row">
                                <Typography.Text strong>
                                  {job?.companyName}
                                </Typography.Text>
                                <Typography.Text> — </Typography.Text>
                                <Typography.Text>
                                  {job?.location || "N/A"}
                                </Typography.Text>
                              </div>

                              <div className="job-listing-link">
                                <div className="post-saved font-medium">
                                  Saved {getTimeDifference(job?.createdAt)} on{" "}
                                  <a
                                    className="link-text font-medium"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    {job?.URL}
                                  </a>
                                </div>
                              </div>

                              <div className="read-only-row-btn-container end">
                                <Button
                                  aria-label="Edit job post information"
                                  type="link"
                                  size="large"
                                  icon={<EditOutlined />}
                                  onClick={() => setModalOpen(true)}
                                  className="edit-btn gold-text"
                                />
                              </div>
                            </div>
                          ))}
                        </Space>
                      </div>
                      <StyleProvider layer>
                        <EditJobModal
                          modalOpen={modalOpen}
                          setModalOpen={setModalOpen}
                          jobs={jobs}
                        />
                      </StyleProvider>
                    </div>

                    <Radio.Group
                      value={selectedStatus}
                      onChange={handleStatusChange}
                      buttonStyle="solid"
                      data-testid="status-progress-bar"
                      className="status-progress-bar"
                    >
                      {statusOptions.map((status) => (
                        <Radio.Button
                          key={status.value}
                          value={status.value}
                          onClick={() =>
                            status.label === "Accepted" && setIsAccepted(true)
                          }
                        >
                          {status.label}{" "}
                          {status.value !==
                            "f89e69f7-f859-4863-b63e-36c247bac3d5" && (
                            <CheckOutlined style={{ marginLeft: 2 }} />
                          )}
                        </Radio.Button>
                      ))}

                      <Button
                        id="archiveDropdown"
                        type="button"
                        size="small"
                        className="delete-job-btn"
                        onClick={handleDeleteJobClick}
                      >
                        Delete Job
                      </Button>
                      <DeleteJobModal
                        deleteModalOpen={deleteModalOpen}
                        setDeleteModalOpen={setDeleteModalOpen}
                      />
                    </Radio.Group>

                    <div
                      className="_box_1rxfg_1 _guidance_1qsov_1"
                      style={{
                        "--py": "0",
                        "--px": "0",
                        "--bg": "#fff",
                        "--color": "#e5e5e5",
                        "--rad": "0",
                        "--style": "solid",
                        "--width": "0",
                      }}
                      onClick={handleToggle}
                    >
                      <div className="_stack_lds83_1">
                        <div style={{ "--stack-space": "0" }}>
                          <div
                            className="_cluster_jw67l_1 _header_1qsov_11"
                            style={{
                              "--space": "0",
                              "--align": "center",
                              "--justify": "space-between",
                              "--wrap": "wrap",
                            }}
                          >
                            {isAccepted ? (
                              <div
                                style={{
                                  textAlign: "center",
                                  fontSize: "1.2rem",
                                  fontFamily: "Montserrat, sans-serif",
                                }}
                                className="m-auto font-extrabold"
                              >
                                Congratulations 🎉
                              </div>
                            ) : (
                              <>
                                <div
                                  className="_cluster_jw67l_1 _header-text_1qsov_16"
                                  style={{
                                    "--space": "0.375rem",
                                    "--align": "center",
                                    "--justify": "flex-start",
                                    "--wrap": "wrap",
                                  }}
                                >
                                  <span className="text-base">
                                    <BulbOutlined />
                                  </span>
                                  <span>
                                    <strong>Guidance</strong>
                                  </span>
                                  <span>&gt;</span>
                                  <span className="font-medium">
                                    {getProgressText()}
                                  </span>
                                </div>
                                <button
                                  aria-label="toggle guidance"
                                  className="_btn_mkpcn_1 none _toggle-btn_1qsov_25"
                                  type="button"
                                >
                                  <span
                                    role="img"
                                    aria-label={
                                      isExpanded ? "up-circle" : "down-circle"
                                    }
                                  >
                                    {isExpanded ? (
                                      <DownCircleOutlined />
                                    ) : (
                                      <UpCircleOutlined />
                                    )}
                                  </span>
                                </button>
                              </>
                            )}
                          </div>
                          {isExpanded && renderExtendedSection()}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="job-listing-drawer-item _job-listing-toolbar_q9krx_1">
                    <JobListingDrawer setActiveTab={setActiveTab} />
                  </div>

                  <AntdTracker activeTab={activeTab} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTrackerSectionOne;
