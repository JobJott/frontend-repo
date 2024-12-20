import React, { useState } from "react";
import { Row, Col, DatePicker, Button, Select, Input } from "antd";
import {
  PlusCircleOutlined,
  CalendarOutlined,
  DownCircleOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const AntdTracker = () => {
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const [isDatesCollapsed, setDatesCollapsed] = useState(true);
  const [isInterviewsCollapsed, setInterviewsCollapsed] = useState(true);
  const [interviewDate, setInterviewDate] = useState(null);
  const [interviewType, setInterviewType] = useState(null);
  const [interviewFormat, setInterviewFormat] = useState(null);
  const [showContacts, setShowContacts] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleDates = () => setDatesCollapsed(!isDatesCollapsed);
  const toggleInterviews = () => setInterviewsCollapsed(!isInterviewsCollapsed);
  const handleAddClick = () => {
    setShowContacts(true);
  };

  const handleAddContact = () => {
    setShowContacts(false);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setShowContacts(false);
  };

  return (
    <div className="ant-row ant-row-no-wrap scroll-parent">
      <div className="ant-col job-info scroll">
        <div className="action-wrapper summary-module-wrapper">
          <div
            className="module-header collapsible"
            role="button"
            tabIndex={0}
            onClick={toggleDates}
          >
            <h3>Dates</h3>
            <Button
              className="toggle-btn"
              type="text"
              icon={<DownCircleOutlined rotate={isDatesCollapsed ? 0 : 180} />}
            />
          </div>

          {!isDatesCollapsed && (
            <div className="module-body">
              <Row gutter={[16, 16]} className="job-tracker-dates">
                {["Posted", "Saved", "Deadline", "Applied", "Follow Up"].map(
                  (label, index) => (
                    <Col className="w-full md:w-1/5" key={index}>
                      <label htmlFor={label.toLowerCase()}>
                        <span className="label">{label}</span>
                        <DatePicker
                          id={label.toLowerCase()}
                          placeholder={`Add ${label.toLowerCase()} date`}
                          suffixIcon={<CalendarOutlined />}
                        />
                      </label>
                    </Col>
                  )
                )}
              </Row>
            </div>
          )}
        </div>

        {/* Interview Tracking Module */}
        <div className="action-wrapper summary-module-wrapper job-posting-interview-tracking">
          <div
            className="module-header collapsible"
            role="button"
            tabIndex={0}
            onClick={toggleInterviews}
          >
            <h3>Interview Tracking</h3>
            <Button
              className="toggle-btn"
              type="text"
              icon={
                <DownCircleOutlined rotate={isInterviewsCollapsed ? 0 : 180} />
              }
            />
          </div>

          {!isInterviewsCollapsed && (
            <div className="module-body interview-module">
              <div className="interviews-container">
                <div className="interview-list">
                  <div className="interview active" role="button" tabIndex={0}>
                    1st Interview
                  </div>
                  <div className="btn-container">
                    <button className="add-btn" type="button">
                      <PlusCircleOutlined />
                      <span>Add Interview</span>
                    </button>
                  </div>
                </div>

                <div className="interview-details">
                  <div className="interview-details-header">
                    <span className="title">Details</span>
                    <div className="flex flex-row gap-4">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-75 bg-primary text-primary-foreground shadow-primary hover:bg-primary/90 focus-visible:ring-primary h-9 px-3 rounded-md">
                        Save Details
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-75 border bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md delete-btn border-red-500">
                        <svg
                          fill="none"
                          height="20"
                          viewBox="0 0 20 20"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                        >
                          <path
                            clipRule="evenodd"
                            d="M13.914 0.691406H6.08573L4.39906 4.06474H1.56641V5.81474H2.48066L4.16735 19.3082H15.8323L17.519 5.81474H18.4333V4.06474H15.6007L13.914 0.691406ZM13.6441 4.06474L12.8325 2.44141H7.16729L6.35562 4.06474H13.6441ZM5.71221 17.5582L4.24428 5.81474H15.7554L14.2875 17.5582H5.71221Z"
                            fill="currentColor"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="interview-details-container">
                    {/* Interview Date Section */}
                    <div className="interview-details-form">
                      <div className="form-field w-1/3 interview_date">
                        <label htmlFor="interview_at">Date of Interview</label>
                        <DatePicker
                          id="interview_at"
                          showTime={{
                            format: "HH:mm:amp",
                          }}
                          format="YYYY-MM-DD HH:mm"
                          placeholder="-"
                          autoComplete="off"
                          onChange={(date) => setInterviewDate(date)}
                          suffixIcon={<CalendarOutlined />}
                          style={{ width: "100%" }}
                          onOk={onOk}
                        />
                      </div>
                      <div className="form-fields-type-format">
                        <div className="form-field w-1/2">
                          <label htmlFor="interview_type">Type</label>
                          <Select
                            id="interview_type"
                            placeholder="-"
                            onChange={(value) => setInterviewType(value)}
                            style={{ width: "100%" }}
                          >
                            <Option value="initial screening">
                              Initial Screening
                            </Option>
                            <Option value="technical">Technical</Option>
                            <Option value="work culture">Work Culture</Option>
                            <Option value="panel">Panel</Option>
                            <Option value="other">Other</Option>
                          </Select>
                        </div>

                        <div className="form-field w-1/2">
                          <label htmlFor="interview_format">Format</label>
                          <Select
                            id="interview_format"
                            placeholder="-"
                            onChange={(value) => setInterviewFormat(value)}
                            style={{ width: "100%" }}
                          >
                            <Option value="virtual">Virtual</Option>
                            <Option value="phone">Phone</Option>
                            <Option value="in-person">In-Person</Option>
                            <Option value="other">Other</Option>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="interview-details-interviewers">
                      <p className="title">Interviewers</p>
                      {!showContacts && !showForm && (
                        <div>
                          <button
                            className="add-btn"
                            type="button"
                            onClick={handleAddClick}
                          >
                            <PlusCircleOutlined />
                            <span>Add Interview</span>
                          </button>
                        </div>
                      )}

                      {showContacts && (
                        <div className="interview-contacts-container">
                          <div>
                            <Select
                              showSearch
                              placeholder="Find an existing contact"
                              optionFilterProp="children"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div className="divider-container">
                            <div className="divider">
                              <span>or</span>
                            </div>
                          </div>
                          <div>
                            <Button
                              type="primary"
                              size="small"
                              className="full-width"
                              onClick={handleAddContact}
                            >
                              <PlusCircleOutlined />
                              <span>Add a Contact</span>
                            </Button>
                          </div>
                        </div>
                      )}

                      {showForm && (
                        <div className="interview-contacts-container">
                          <div className="add-interview-form">
                            <div className="field-row">
                              <div className="job-contacts-input">
                                <label htmlFor="interview-firstName">
                                  First Name
                                </label>
                                <Input
                                  id="interview-firstName"
                                  placeholder="First Name"
                                />
                              </div>
                              <div className="job-contacts-input">
                                <label htmlFor="interview-lastName">
                                  Last Name
                                </label>
                                <Input
                                  id="interview-lastName"
                                  placeholder="Last Name"
                                />
                              </div>
                            </div>
                            <div className="field-row">
                              <div className="job-contacts-input">
                                <label htmlFor="interview-contactEmail">
                                  Email
                                </label>
                                <Input
                                  id="interview-contactEmail"
                                  placeholder="hello@example.com"
                                  size="small"
                                />
                              </div>
                              <div className="job-contacts-input">
                                <label htmlFor="interview-jobTitle">
                                  Job Title
                                </label>
                                <Input
                                  id="interview-jobTitle"
                                  placeholder="Job Title"
                                  size="small"
                                />
                              </div>
                            </div>
                            <div className="field-row">
                              <div className="job-contacts-input">
                                <label htmlFor="interview-linkedIn">
                                  LinkedIn
                                </label>
                                <Input
                                  id="interview-linkedIn"
                                  placeholder="https://www.linkedin.com/in/yourname"
                                  size="small"
                                />
                              </div>
                              <div className="job-contacts-input">
                                <label htmlFor="interview-relationship">
                                  Relationship
                                </label>
                                <Select
                                  placeholder="None"
                                  style={{ width: "100%" }}
                                  id="interview-relationship"
                                />
                              </div>
                            </div>
                            <div className="field-row">
                              <div className="job-contacts-input">
                                <label htmlFor="interview-contactNotes">
                                  Notes
                                </label>
                                <Input.TextArea
                                  id="interview-contactNotes"
                                  placeholder="Add notes about this contact"
                                  rows={4}
                                />
                              </div>
                            </div>
                            <div className="field-row">
                              <Button type="primary" size="small">
                                Save
                              </Button>
                              <Button
                                type="default"
                                size="small"
                                onClick={handleCancel}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AntdTracker;
