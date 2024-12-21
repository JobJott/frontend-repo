import React, { useState } from "react";
import { Checkbox, Divider, Button, Col } from "antd";
import {
  EditOutlined,
  InboxOutlined,
  DeleteOutlined,
  RightOutlined,
} from "@ant-design/icons";
import JobPipeline from "./JobTrackerSectTwo/JobPipeline";
import DropdownComponent from "./ActionButtons/DropdownComponent";
import FilterDropdownMenu from "./ActionButtons/FilterDropdown";
import MenuDropdown from "./ActionButtons/MenuDropdown";
import { StyleProvider } from "@ant-design/cssinjs";
import Newjob from "./ActionButtons/Newjob";
import AntJobModal from "./ActionButtons/AntJobModal";
import { DeleteJobModal } from "./JobTrackerSectOne/ExtendedSections";
import "./JobTrackerSectTwo/JobTrackerSectionTwo.css";
import "./JobTrackerSectOne/JobTrackerSectionOne.css";

const JobTrackerSectionTwo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [selected, setSelected] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleChange = (e) => {
    // setSelected(isChecked ? 1 : 0); // Update selected count
    setIsChecked(e.target.checked);
  };

  const handleDeleteJobClick = () => {
    setDeleteModalOpen(true); // Open delete job modal
  };

  const data = [
    {
      key: "1",
      selected: false,
      role: "Sail Innovation Engineer",
      company_name: "Sails Hub",
      applied_at: null,
      added_at: "12/21/2024",
      application_deadline: null,
      posted_at: null,
      follow_up_at: null,
      min_salary: "US$0.00",
      statusName: "Bookmarked",
      location: "Ikorodu, Lagos",
      max_salary: "US$0.00",
    },
    //for more objects
  ];

  const columns = [
    {
      title: "",
      dataIndex: "selected",
      key: "selected",
      render: (selected, record) => (
        <input type="checkbox" checked={selected} readOnly />
      ),
      width: 40,
      height: 37,
      align: "center",
    },
    {
      title: "Job Position",
      dataIndex: "role",
      key: "role",
      width: 180,
      height: 37,
      align: "center",
      render: (text) => (
        <Button type="link" className="invisible-button">
          {text}
        </Button>
      ),
    },
    {
      title: "Company",
      dataIndex: "company_name",
      key: "company_name",
      width: 171,
      height: 37,

      align: "center",
      render: (text) => (
        <Button type="link" className="invisible-button">
          {text} <RightOutlined />
        </Button>
      ),
    },
    {
      title: "Deadline",
      dataIndex: "application_deadline",
      key: "application_deadline",
      width: 134,
      height: 37,

      align: "center",
      render: (text) => (text ? text : "N/A"),
    },
    {
      title: "Date Posted",
      dataIndex: "posted_at",
      key: "posted_at",
      width: 114,
      height: 37,

      align: "center",
      render: (text) => (text ? text : "N/A"),
    },
    {
      title: "Follow up",
      dataIndex: "follow_up_at",
      key: "follow_up_at",
      width: 114,
      height: 37,

      align: "center",
      render: (text) => (text ? text : <Button type="link">Add date</Button>),
    },
    {
      title: "Min. Salary",
      dataIndex: "min_salary",
      key: "min_salary",
      width: 114,
      height: 37,

      align: "center",
      render: (text) => text,
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: 120,
      height: 37,

      align: "center",
      render: (text) => (
        <span className="tabulator-cell-line-clamp">{text}</span>
      ),
    },
  ];

  return (
    <>
      <JobPipeline />
      <>
        <div className="job-tracker-section false">
          <div
            className="_cluster_jw67l_1 job-tracker-actions"
            style={{
              "--space": 0,
              "--align": "stretch",
              "--justify": "space-between",
              "--wrap": "wrap",
            }}
          >
            <Col>
              <div className="selection-bar">
                <Checkbox className="font-semibold" onChange={handleChange}>
                  {/* {selected} selected */}
                  {isChecked ? "1 selected" : "0 selected"}
                </Checkbox>

                {isChecked && (
                  <>
                    <Divider type="vertical" className="vertical-separator" />
                    <Button icon={<EditOutlined />} size="small">
                      Status
                    </Button>
                    <Divider type="vertical" className="vertical-separator" />
                    <Button icon={<InboxOutlined />} size="small">
                      Archive
                    </Button>
                    <Button
                      icon={<DeleteOutlined />}
                      size="small"
                      danger
                      onClick={handleDeleteJobClick}
                    >
                      Delete
                    </Button>
                    <DeleteJobModal
                      deleteModalOpen={deleteModalOpen}
                      setDeleteModalOpen={setDeleteModalOpen}
                    />
                  </>
                )}
              </div>
            </Col>

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
        <StyleProvider layer>
          <AntJobModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </StyleProvider>
      </>

      <div className="job-tracker-section false">
        <div className="job-tracker-table-container">
          <div className="table-column-wrapper">
            <div
              className="job-tracker-table tabulator"
              role="grid"
              tabulator-layout="fitColumns"
              style={{ height: "100%" }}
            >
              {/* Table Header */}
              <div className="tabulator-header" role="rowgroup">
                <div className="tabulator-header-contents" role="rowgroup">
                  <div className="tabulator-headers" style={{ height: "37px" }}>
                    {columns.map((col, index) => (
                      <div
                        key={col.key}
                        className={`${
                          index === 0
                            ? "tabulator-col text-center"
                            : "tabulator-col tabulator-sortable tabulator-col-sorter-element role-cell"
                        }`}
                        style={{
                          width: `${col.width}px`,
                          justifyContent: col.align,
                          minWidth: `${col.width}px`,
                          height: `${col.height}px`,
                        }}
                        role="columnheader"
                        aria-sort="none"
                      >
                        <div className="tabulator-col-content">
                          <div className="tabulator-col-title-holder">
                            <div className="tabulator-col-title">
                              {col.title}
                              {index > 0 && (
                                <div className="tabulator-col-sorter">
                                  <div className="tabulator-arrow"></div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div
                className="tabulator-tableholder"
                style={{
                  height: "calc(100% - 38px)",
                  maxHeight: "calc(100% - 38px)",
                }}
              >
                <div className="tabulator-table">
                  {data.map((row) => (
                    <div key={row.key} className="tabulator-row" role="row">
                      {columns.map((col) => (
                        <div
                          key={col.key}
                          className={`${
                            col.key === "selected"
                              ? "tabulator-cell text-center"
                              : "tabulator-cell role-cell"
                          }`}
                          style={{
                            width: `${col.width}px`,
                            justifyContent: col.align,
                          }}
                        >
                          <div className="formatterCell">
                            {col.render
                              ? col.render(row[col.dataIndex], row)
                              : row[col.dataIndex]}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobTrackerSectionTwo;
