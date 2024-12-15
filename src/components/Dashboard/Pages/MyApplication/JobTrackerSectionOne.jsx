    import React from "react";
    import "../styles/JobTrackerSectionOne.css";

    const JobTrackerSectionOne = () => {
      return (
        <div className="job-tracker-section drawer-visible" data-projection-id="3">
          <div className="job-tracker-table-container hide-x-overflow shared-table-container ">
            <div className="table-column-wrapper">
              <div
                data-instance="tabulator-1734223037678-7874267"
                className="job-tracker-table tabulator"
                role="grid"
                tabulator-layout="fitColumns"
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
                        tabulator-field="role"
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
                      <div
                        className="tabulator-col tabulator-sortable tabulator-col-sorter-element"
                        role="columnheader"
                        aria-sort="none"
                        tabulator-field="added_at"
                        style="justify-content: center; display: none; min-width: 40px; height: 37px;"
                      >
                        <div className="tabulator-col-content">
                          <div className="tabulator-col-title-holder">
                            <div className="tabulator-col-title">Date Saved</div>
                            <div className="tabulator-col-sorter">
                              <div className="tabulator-arrow"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tabulator-col tabulator-sortable tabulator-col-sorter-element"
                        role="columnheader"
                        aria-sort="none"
                        tabulator-field="posted_at"
                        style="justify-content: center; display: none; min-width: 40px; height: 37px;"
                      >
                        <div className="tabulator-col-content">
                          <div className="tabulator-col-title-holder">
                            <div className="tabulator-col-title">&nbsp;</div>
                            <div className="tabulator-col-sorter">
                              <div className="tabulator-arrow"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tabulator-col tabulator-sortable tabulator-col-sorter-element"
                        role="columnheader"
                        aria-sort="none"
                        tabulator-field="applied_at"
                        style="justify-content: center; display: none; min-width: 40px; height: 37px;"
                      >
                        <div className="tabulator-col-content">
                          <div className="tabulator-col-title-holder">
                            <div className="tabulator-col-title">&nbsp;</div>
                            <div className="tabulator-col-sorter">
                              <div className="tabulator-arrow"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tabulator-col tabulator-sortable tabulator-col-sorter-element"
                        role="columnheader"
                        aria-sort="none"
                        tabulator-field="follow_up_at"
                        style="justify-content: center; display: none; min-width: 40px; height: 37px;"
                      >
                        <div className="tabulator-col-content">
                          <div className="tabulator-col-title-holder">
                            <div className="tabulator-col-title">&nbsp;</div>
                            <div className="tabulator-col-sorter">
                              <div className="tabulator-arrow"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tabulator-frozen-rows-holder"
                      style="min-width: 0px;"
                    ></div>
                  </div>
                </div>
                <div
                  className="tabulator-tableholder"
                  tabindex="0"
                  style="height: calc(100% - 38px); max-height: calc(100% - 38px);"
                >
                  <div
                    className="tabulator-table"
                    role="rowgroup"
                    style="padding-top: 0px; padding-bottom: 0px;"
                  >
                    <div
                      className="tabulator-row tabulator-selectable tabulator-row-odd"
                      role="row"
                    >
                      <div
                        className="tabulator-cell role-cell"
                        role="gridcell"
                        tabulator-field="role"
                        style="height: 56px; width: 280px;"
                      >
                        <div className="formatterCell">
                          <div
                            className="invisible-button selected"
                            role="button"
                            tabindex="0"
                          >
                            <div className="job-content">
                              <div className="job-role">
                                sail innovation enginner
                              </div>
                              <div className="job-company">jobjot </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tabulator-cell"
                        role="gridcell"
                        tabulator-field="added_at"
                        style="display: none; height: 56px;"
                      >
                        <span
                          className="tabulator-cell-line-clamp tabulator-cell-full-background"
                          style="background: "
                        >
                          12/15/2024
                        </span>
                      </div>
                      <div
                        className="tabulator-cell"
                        role="gridcell"
                        tabulator-field="posted_at"
                        style="display: none; height: 56px;"
                      >
                        &nbsp;
                      </div>
                      <div
                        className="tabulator-cell"
                        role="gridcell"
                        tabulator-field="applied_at"
                        style="display: none; height: 56px;"
                      >
                        &nbsp;
                      </div>
                      <div
                        className="tabulator-cell"
                        role="gridcell"
                        tabulator-field="follow_up_at"
                        style="display: none; height: 56px;"
                      >
                        &nbsp;
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
