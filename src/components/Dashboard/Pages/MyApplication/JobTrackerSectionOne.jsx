import React, { useState } from "react";
import AddSalaryRange from "./JobTrackerSectOne/AddSalaryRange";
import { Button, Space, Typography, Radio, Dropdown, Menu } from "antd";
import {
  LeftCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  RightCircleOutlined,
  CheckOutlined,
  BulbOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
import "../../styles/JobTrackerSectionOne.css";
import EditJobModal from "./JobTrackerSectOne/EditJobModal";
import { StyleProvider } from "@ant-design/cssinjs";
// import "antd/dist/reset.css";

const columnData = [
  { title: "Date Saved", field: "added_at" },
  { title: "&nbsp;", field: "posted_at" },
  { title: "&nbsp;", field: "applied_at" },
  { title: "&nbsp;", field: "follow_up_at" },
];

const jobData = [
  {
    role: "Sail Innovation Engineer",
    company: "Sails Hub",
    dateSaved: "12/16/2024",
    postedAt: "",
    appliedAt: "",
    followUpAt: "",
  },
];

const JobTrackerSectionOne = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(
    "f89e69f7-f859-4863-b63e-36c247bac3d5"
  );
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMenuClick = (key) => {
    console.log(`Clicked on: ${key}`);
    if (key === "5") {
      // Add custom logic for "Delete Job"
      console.log("Job Deleted");
    }
    setDropdownVisible(false); // Close dropdown
  };

  const menuItems = [
    {
      key: "1",
      label: "I Withdrew",
      onClick: () => handleMenuClick("1"),
    },
    { key: "2", label: "Not Selected", onClick: () => handleMenuClick("2") },
    { key: "3", label: "No Response 👻", onClick: () => handleMenuClick("3") },
    { key: "4", label: "Archived", onClick: () => handleMenuClick("4") },
    { key: "divider", type: "divider" },
    {
      key: "5",
      label: <span className="delete-job-btn">Delete Job</span>,
      onClick: () => handleMenuClick("5"),
    },
  ];

  console.log("Dropdown children:", dropdownVisible);

  const statusOptions = [
    { label: "Bookmarked", value: "f89e69f7-f859-4863-b63e-36c247bac3d5" },
    { label: "Applying", value: "38b09bef-2c24-48b0-984a-fa0e5b0c060a" },
    { label: "Applied", value: "5689f93d-a084-489c-9a6a-7d74b155b49a" },
    { label: "Interviewing", value: "1c8934df-8fb9-4cdc-955c-e998c8d7a1b2" },
    { label: "Negotiating", value: "079cebfd-0e2e-458a-8782-58ea19a5af6d" },
    { label: "Accepted", value: "21b7fdb7-4260-430b-a648-3cab1eb83288" },
  ];

  // Handler to change selected status
  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
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
                {jobData.map((job, index) => (
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
                            <div className="job-role">{job.role}</div>
                            <div className="job-company">{job.company}</div>
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
                        {job.dateSaved}
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
                          <div
                            className="read-row-container"
                            style={{ display: "block" }}
                          >
                            <Typography.Title level={2}>
                              Sail Innovation Engineer
                            </Typography.Title>
                            <div className="job-detail-row">
                              <Typography.Text strong>
                                Sails Hub
                              </Typography.Text>
                              <Typography.Text> — </Typography.Text>
                              <Typography.Text>Ikorodu, Lagos</Typography.Text>
                            </div>

                            <div className="job-listing-link">
                              <div className="post-saved">
                                Saved 6 hours ago on{" "}
                                <a
                                  className="link-text"
                                  href="https://twitter.com/Hauwa_L/status/1753889114523394418?t=nIKPWZefkzUobE5gv6Xjgw&amp;s=19"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  twitter.com
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
                        </Space>
                      </div>
                      <StyleProvider layer>
                        <EditJobModal
                          modalOpen={modalOpen}
                          setModalOpen={setModalOpen}
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
                        <Radio.Button key={status.value} value={status.value}>
                          {status.label}{" "}
                          {status.value !==
                            "f89e69f7-f859-4863-b63e-36c247bac3d5" && (
                            <CheckOutlined style={{ marginLeft: 2 }} />
                          )}
                        </Radio.Button>
                      ))}

                      <Dropdown
                        menu={{ items: menuItems }}
                        open={dropdownVisible}
                        onOpenChange={(flag) => setDropdownVisible(flag)}
                        trigger={["click"]}
                        placement="bottomRight"
                      >
                        <Button
                          id="archiveDropdown"
                          type="default"
                          size="small"
                          className="status-progress-bar-archive-dropdown"
                        >
                          Close Job
                        </Button>
                      </Dropdown>
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
                            <div
                              className="_cluster_jw67l_1 _header-text_1qsov_16"
                              style={{
                                "--space": "0.375rem",
                                "--align": "center",
                                "--justify": "flex-start",
                                "--wrap": "wrap",
                              }}
                            >
                              <span>
                                <span
                                  role="img"
                                  aria-label="bulb"
                                  className="anticon anticon-bulb"
                                >
                                  <BulbOutlined />
                                </span>
                              </span>
                              <span>
                                <strong>Guidance</strong>
                              </span>
                              <span>&gt;</span>
                              <span>Bookmarked Steps: 0% Complete</span>
                            </div>
                            <button
                              aria-label="toggle guidance"
                              className="_btn_mkpcn_1 none _toggle-btn_1qsov_25"
                              type="button"
                            >
                              <span
                                role="img"
                                aria-label="up-circle"
                                className="anticon anticon-up-circle"
                              >
                                <UpCircleOutlined />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
