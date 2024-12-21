import React, { useState } from "react";
import { Row, Col, DatePicker, Button, Select, Input, Typography } from "antd";
import {
  PlusCircleOutlined,
  CalendarOutlined,
  DownCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { Paragraph } = Typography;

const AntdTracker = ({ activeTab }) => {
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const [isDatesCollapsed, setDatesCollapsed] = useState(true);
  const [isInterviewsCollapsed, setInterviewsCollapsed] = useState(true);
  const [isJobDescriptionCollapsed, setJobDescriptionCollapsed] =
    useState(true);
  const [interviewDate, setInterviewDate] = useState(null);
  const [interviewType, setInterviewType] = useState(null);
  const [interviewFormat, setInterviewFormat] = useState(null);
  const [relationshipType, setRelationshipType] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [jobDescription, setJobDescription] = useState(
    "I am a software engineer"
  );
  const [originalDescription, setOriginalDescription] = useState(
    "I am a software engineer"
  );
  const [showContacts, setShowContacts] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [notes, setNotes] = useState("Add your notes here...");
  const [richText, setRichText] = useState("");

  const toggleDates = () => setDatesCollapsed(!isDatesCollapsed);
  const toggleInterviews = () => setInterviewsCollapsed(!isInterviewsCollapsed);
  const toggleJobDescription = () =>
    setJobDescriptionCollapsed(!isJobDescriptionCollapsed);
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

  const handleSaveChanges = () => {
    setOriginalDescription(jobDescription); // Update the original description
    setIsEditing(false); // Exit editing mode
  };

  const handleJobEditCancel = () => {
    setJobDescription(originalDescription); // Revert to the original description
    setIsEditing(false); // Exit editing mode
  };

  const handleSaveNote = () => {
    setIsEditingNote(false);
  };

  const handleCancelNote = () => {
    setIsEditingNote(false);
    setRichText(notes); // Revert changes
  };

  const handleEditNote = () => {
    setIsEditingNote(true);
  };

  return (
    <div className="ant-row ant-row-no-wrap scroll-parent">
      {activeTab === "job-info" && (
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
                icon={
                  <DownCircleOutlined rotate={isDatesCollapsed ? 0 : 180} />
                }
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

          {/* Job Description Editing Module */}
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
                  <DownCircleOutlined
                    rotate={isInterviewsCollapsed ? 0 : 180}
                  />
                }
              />
            </div>

            {!isInterviewsCollapsed && (
              <div className="module-body interview-module">
                <div className="interviews-container">
                  <div className="interview-list">
                    <div
                      className="interview active"
                      role="button"
                      tabIndex={0}
                    >
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
                          <label htmlFor="interview_at">
                            Date of Interview
                          </label>
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
                                  />
                                </div>
                                <div className="job-contacts-input">
                                  <label htmlFor="interview-jobTitle">
                                    Job Title
                                  </label>
                                  <Input
                                    id="interview-jobTitle"
                                    placeholder="Job Title"
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
                                  />
                                </div>
                                <div className="job-contacts-input">
                                  <label htmlFor="interview-relationship">
                                    Relationship
                                  </label>
                                  <Select
                                    placeholder="None"
                                    style={{ width: "100%" }}
                                    onChange={(value) =>
                                      setRelationshipType(value)
                                    }
                                    id="interview-relationship"
                                  >
                                    <Option value="self">Self</Option>
                                    <Option value="co-worker">Co-Worker</Option>
                                    <Option value="friend">Friend</Option>
                                    <Option value="family">Family</Option>
                                    <Option value="other">Other</Option>
                                    <Option value="recruiter">Recruiter</Option>
                                    <Option value="mentor">Mentor</Option>
                                    <Option value="hiring manager">
                                      Hiring Manager
                                    </Option>
                                  </Select>
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

          {/* Interview Tracking Module */}
          <div className="action-wrapper summary-module-wrapper _job-description-matching_1c9k0_58g">
            <div
              className="module-header collapsible"
              role="button"
              tabIndex={0}
              onClick={toggleJobDescription}
            >
              <div className="flex items-center gap-2">
                <h3>Job Description</h3>
                {!isEditing && (
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-75 md:hover:bg-accent md:focus-visible:ring-primary h-9 px-3 rounded-md text-primary md:hover:text-primary"
                    onClick={() => setIsEditing(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-pencil-line h-4 w-4"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                      <path d="m15 5 3 3"></path>
                    </svg>
                    Edit
                  </button>
                )}
              </div>
              {!isEditing && (
                <Button
                  className="toggle-btn"
                  type="text"
                  icon={
                    <DownCircleOutlined rotate={isDatesCollapsed ? 0 : 180} />
                  }
                />
              )}
            </div>

            {!isJobDescriptionCollapsed && (
              <div className="module-body">
                <div className="job-keywords-and-description">
                  <Row
                    className="job-description-container"
                    style={{ marginLeft: "-12px", marginRight: "-12px" }}
                  >
                    <Col
                      xs={{ span: 24, order: 2 }}
                      sm={{ span: 24, order: 2 }}
                      md={{ span: 24, order: 2 }}
                      lg={{ span: 24, order: 1 }}
                      style={{ paddingLeft: "12px", paddingRight: "12px" }}
                    >
                      {isEditing ? (
                        <div className="flex flex-col gap-3">
                          <div className="rounded-md border border-input bg-background text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-duotone disabled:cursor-not-allowed disabled:opacity-50 has-[:focus-visible]:outline-none has-[:focus-visible]:shadow-duotone flex flex-col flex-auto data-[editable=false]:opacity-50">
                            <textarea
                              className="tiptap ProseMirror relative cursor-text w-full md:min-w-96 focus-visible:outline-none data-[editable=false]:cursor-default [&_.ProseMirror-selectednode]:bg-primary [&_.is-editor-empty:first-child]:before:content-[attr(data-placeholder)] [&_.is-editor-empty:first-child]:before:absolute [&_.is-editor-empty:first-child]:before:text-muted-foreground [&_.is-editor-empty:first-child]:before:pointer-events-none [&_.is-editor-empty:first-child]:before:h-0 [&_h1]:text-xl [&_h2]:text-lg [&_h3]:text-base px-3 py-2 h-48 overflow-y-auto wsc-ignore md:max-h-96 job-description-textarea"
                              value={jobDescription}
                              onChange={(e) =>
                                setJobDescription(e.target.value)
                              }
                              rows="4"
                              placeholder="I am a software engineer"
                              type="text"
                              style={{ width: "100%", marginBottom: "1rem" }}
                            />
                          </div>
                          <div className="field-row flex items-center gap-4 mb-2">
                            <Button
                              type="primary"
                              size="small"
                              onClick={handleSaveChanges} // Save changes
                            >
                              Save Changes
                            </Button>
                            <Button
                              type="default"
                              size="small"
                              onClick={handleJobEditCancel}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <p>{jobDescription}</p>
                      )}
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "notes" && (
        <div className="ant-col tools-drawer scroll">
          <div className="action-wrapper summary-module-wrapper _job-listing-tool-content_1pqaz_5">
            <div className="module-header">
              <h3>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 16 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.94303 0.832031H1.38184"></path>
                  <path d="M14.7202 19.1769L14.7202 6.25037"></path>
                  <path d="M1.27979 19.1766L1.27978 0.831909"></path>
                  <path d="M8.94336 6.25022L8.94336 0.832031"></path>
                  <path d="M8.94284 6.25037L14.7202 6.25037"></path>
                  <path d="M8.94281 0.832129L14.6078 6.12559"></path>
                  <path d="M14.7205 19.1768L1.27979 19.1768"></path>
                </svg>
                Notes
              </h3>
              <div className="module-header-action">
                <button
                  type="button"
                  className="_button_11uyj_1 _with-icon_11uyj_47 _icon-only_11uyj_51 _round_11uyj_141 _flat_11uyj_95 _medium_11uyj_127 _close-button_1pqaz_1"
                  onClick={() => console.log("Close drawer action")}
                >
                  <CloseCircleOutlined />
                </button>
              </div>
            </div>

            <div className="module-body opened">
              {isEditing ? (
                <div className="rounded-md border border-input bg-background text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-duotone disabled:cursor-not-allowed disabled:opacity-50 has-[:focus-visible]:outline-none has-[:focus-visible]:shadow-duotone flex flex-col flex-auto data-[editable=false]:opacity-50">
                  <textarea
                    className="tiptap ProseMirror relative cursor-text w-full md:min-w-96 focus-visible:outline-none data-[editable=false]:cursor-default [&_.ProseMirror-selectednode]:bg-primary [&_.is-editor-empty:first-child]:before:content-[attr(data-placeholder)] [&_.is-editor-empty:first-child]:before:absolute [&_.is-editor-empty:first-child]:before:text-muted-foreground [&_.is-editor-empty:first-child]:before:pointer-events-none [&_.is-editor-empty:first-child]:before:h-0 [&_h1]:text-xl [&_h2]:text-lg [&_h3]:text-base px-3 py-2 h-48 overflow-y-auto wsc-ignore md:max-h-96 job-description-textarea"
                    value={richText}
                    onChange={(e) => setRichText(e.target.value)}
                    placeholder="Add your notes here..."
                  />
                  <div className="edit-actions">
                    <Button type="primary" onClick={handleSaveNote}>
                      Save
                    </Button>
                    <Button onClick={handleCancelNote}>Cancel</Button>
                  </div>
                </div>
              ) : (
                <Paragraph
                  className="display-notes"
                  editable={{
                    onStart: handleEditNote,
                  }}
                >
                  {notes}
                </Paragraph>
              )}
            </div>
            <div className="footer-note text-neutral-500 text-xs">
              * Changes will be automatically saved
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AntdTracker;
