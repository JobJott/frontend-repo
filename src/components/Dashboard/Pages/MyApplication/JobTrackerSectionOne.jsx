import React from "react";
import "../../styles/JobTrackerSectionOne.css";

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
      </div>
    </div>
  );
};

export default JobTrackerSectionOne;
