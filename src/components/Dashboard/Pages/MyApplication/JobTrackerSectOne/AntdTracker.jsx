import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  DatePicker,
  Button,
  Select,
  Typography,
  message,
  Input,
  Tabs,
  Modal,
  Tooltip,
} from "antd";
import {
  PlusCircleOutlined,
  CalendarOutlined,
  DownCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import {
  deleteInterviewDetails,
  fetchInterviewDetails,
  updateInterviewDetails,
  updateJobDates,
} from "../../../../../utils/api/jobService";
import {
  addContactToAPI,
  deleteContactFromAPI,
  fetchContactsFromAPI,
  updateContactInAPI,
} from "../../../../../utils/api/contactService";
import { ContactscreenLoader } from "./ExtendedSections";
import { generateCoverLetter } from "../../../../../utils/api/userService";

const { Option } = Select;
const { Paragraph } = Typography;

const AntdTracker = ({
  activeTab,
  selectedJob,
  setJobs,
  setSelectedJob,
  setActiveTab,
}) => {
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const [isDatesCollapsed, setDatesCollapsed] = useState(true);
  const [isInterviewsCollapsed, setInterviewsCollapsed] = useState(true);
  const [interviewDate, setInterviewDate] = useState(null);
  const [interviewType, setInterviewType] = useState(null);
  const [interviewFormat, setInterviewFormat] = useState(null);

  const [coverLetter, setCoverLetter] = useState([]);
  const [showCoverLetterForm, setShowCoverLetterForm] = useState(false);

  const [showContacts, setShowContacts] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editContactId, setEditContactId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [errors, setErrors] = useState({});

  const { TabPane } = Tabs;

  const [jobDates, setJobDates] = useState({});
  const dateFields = [
    { label: "Applied", key: "applied" },
    { label: "Saved", key: "saved" },
    { label: "Deadline", key: "deadline" },
    { label: "Follow Up", key: "followUp" },
  ];
  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    notes: "",
  });
  const [coverLetterForm, setCoverLetterForm] = useState({
    companyName: "",
    jobTitle: "",
    insights: "",
  });

  const validateForm = () => {
    const newErrors = {};
    if (!contactFormData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!contactFormData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!contactFormData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Enter a valid email.";
    if (!contactFormData.phoneNumber.match(/^\+?[0-9]{10,15}$/))
      newErrors.phoneNumber = "Enter a valid phone number (10-15 digits).";
    return newErrors;
  };

  const toggleDates = () => setDatesCollapsed(!isDatesCollapsed);
  const toggleInterviews = () => setInterviewsCollapsed(!isInterviewsCollapsed);

  useEffect(() => {
    if (selectedJob) {
      setJobDates(selectedJob.dates || {});
    }
  }, [selectedJob]);

  const handleDateChange = async (date, dateType) => {
    if (!selectedJob) return;

    // Convert the date to ISO string or set it to null if cleared
    const dateValue = date ? date.toISOString() : null;

    try {
      // Update job dates in the backend
      const updatedJob = await updateJobDates(selectedJob._id, {
        dateType,
        dateValue,
      });

      if (updatedJob) {
        // Update local state
        const updatedDates = {
          ...jobDates,
          [dateType]: dateValue,
        };

        setJobDates(updatedDates);
        setJobs((prevJobs) =>
          prevJobs.map((job) =>
            job._id === selectedJob._id ? { ...job, dates: updatedDates } : job
          )
        );

        // Update the selected job state
        setSelectedJob((prevJob) => ({
          ...prevJob,
          dates: updatedDates,
        }));
      }
    } catch (error) {
      console.error(`Failed to update ${dateType} date:`, error);
    }
  };

  useEffect(() => {
    const loadInterviewDetails = async () => {
      if (!selectedJob) return;

      try {
        const data = await fetchInterviewDetails(selectedJob._id);
        setInterviewDate(
          data.interview.interviewDate
            ? dayjs(data.interview.interviewDate)
            : null
        );
        setInterviewType(data.interview.interviewType || "");
        setInterviewFormat(data.interview.interviewFormat || "");
      } catch (error) {
        message.error("Failed to load interview details: " + error.message);
      }
    };

    loadInterviewDetails();
  }, [selectedJob]);

  const handleSaveDetails = async () => {
    if (!selectedJob) return;

    try {
      const interviewDetails = {
        interviewDate: interviewDate ? interviewDate.toISOString() : null,
        interviewType,
        interviewFormat,
      };

      const updatedJob = await updateInterviewDetails(
        selectedJob._id,
        interviewDetails
      );
      message.success("Interview details saved successfully!");
      // setSelectedJob(updatedJob);
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job._id === selectedJob._id
            ? { ...job, interview: updatedJob.interview }
            : job
        )
      );
      setSelectedJob((prev) => ({ ...prev, interview: updatedJob.interview }));
    } catch (error) {
      message.error("Failed to save interview details: " + error.message);
    }
  };

  const handleDeleteInterview = async () => {
    if (!selectedJob) return;

    try {
      await deleteInterviewDetails(selectedJob._id);
      message.success("Interview details deleted successfully!");
      setJobs((prevJobs) =>
        prevJobs.map((job) =>
          job._id === selectedJob._id ? { ...job, interview: null } : job
        )
      );
      setSelectedJob((prev) => ({ ...prev, interview: null }));
      setInterviewDate(null);
      setInterviewType(null);
      setInterviewFormat(null);
    } catch (error) {
      message.error("Failed to delete interview details: " + error.message);
    }
  };

  const handleGenerateCoverLetter = () => {
    setShowCoverLetterForm(true);
  };

  const handleCoverLetterCancel = () => {
    setShowCoverLetterForm(false);
  };

  // Fetch contacts dynamically based on the selected job
  useEffect(() => {
    if (activeTab === "contacts" && selectedJob?._id) {
      loadContacts();
    }
  }, [activeTab, selectedJob]);

  const loadContacts = async () => {
    setLoading(true);
    try {
      const data = await fetchContactsFromAPI(selectedJob?._id);
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setActiveTab("job-info");
  };

  const handleAddContact = () => {
    setShowContacts(false);
    setShowForm(true);
  };

  const handleEditContact = (contactId) => {
    const contact = contacts.find((c) => c._id === contactId);
    setContactFormData(contact);
    setEditContactId(contactId);
  };

  const handleCancel = () => {
    setShowForm(false);
    setShowContacts(true);
  };

  const handleCancelEdit = () => {
    setEditContactId(null);
    setContactFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      notes: "",
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setContactFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSaveContact = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    try {
      const savedContact = await addContactToAPI({
        ...contactFormData,
        jobId: selectedJob?._id,
      });
      setContacts((prev) => [...prev, savedContact.contact]);
      setContactFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        notes: "",
      });
      message.success({
        icon: <InfoCircleOutlined />,
        content: "Contact saved!",
      });
      setShowForm(false);
      setShowContacts(true);
    } catch (error) {
      console.error("Error adding contact:", error);
      message.error("Failed to save contact.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateContact = async (contactId, updatedContactData) => {
    setLoading(true);
    try {
      const updatedContact = await updateContactInAPI(
        contactId,
        updatedContactData
      );

      setContacts((prev) =>
        prev.map((contact) =>
          contact._id === contactId ? updatedContact.contact : contact
        )
      );
      message.success({
        icon: <InfoCircleOutlined />,
        content: "Contact updated!",
      });
      setEditContactId(null);
      console.log("Contact updated successfully");
    } catch (error) {
      console.error("Error updating contact:", error);
      message.error("Failed to update contact.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteContact = (contactId) => {
    setContactToDelete(contactId);
    setShowDeleteModal(true);
  };

  const confirmDeleteContact = async () => {
    setLoading(true);
    try {
      await deleteContactFromAPI(contactToDelete);
      setContacts((prev) =>
        prev.filter((contact) => contact._id !== contactToDelete)
      );
      setShowDeleteModal(false);
      setContactToDelete(null);
      message.success("Contact deleted!");
    } catch (error) {
      console.error("Error deleting contact:", error);
      message.error("Failed to delete contact.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Text copied to clipboard!");
    });
  };

  const handleCopySubject = () => {
    const subjectText = document.querySelector("h6.font-extrabold").innerText;
    copyToClipboard(subjectText);

    message.success({
      icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
      content: "Template Subject copied successfully",
    });
  };

  const handleCopyMessage = () => {
    const messageText = document.querySelector("p.true").innerText;
    copyToClipboard(messageText);

    message.success({
      icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
      content: "Template Message copied successfully",
    });
  };

  const handleCoverLetterInputChange = (e) => {
    const { id, value } = e.target;
    setCoverLetterForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSaveGenerateCoverLetter = async () => {
    try {
      const saveCoverLetter = await generateCoverLetter({
        ...coverLetterForm,
      });
      // setCoverLetter((prev) => [...prev, savedContact.contact]);
      console.log(saveCoverLetter);
      setCoverLetterForm({
        companyName: "",
        jobTitle: "",
        insights: "",
      });
      message.success({
        icon: <InfoCircleOutlined />,
        content: "Cover letter generated!",
      });
    } catch (error) {
      console.error("Error generating cover letter:", error);
      message.error("Failed to generate cover letter.");
    } finally {
      setLoading(false);
    }
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
                <Row
                  gutter={[16, 16]}
                  className="job-tracker-dates"
                  style={{ marginLeft: 0 }}
                >
                  {dateFields.map(({ label, key }) => (
                    <Col className="w-full md:w-1/4" key={key}>
                      <label htmlFor={key}>
                        <span className="label">{label}</span>
                        <DatePicker
                          id={key}
                          placeholder={`Add ${label.toLowerCase()} date`}
                          suffixIcon={<CalendarOutlined />}
                          value={
                            selectedJob?.dates?.[key]
                              ? dayjs(selectedJob.dates[key])
                              : null
                          }
                          onChange={(date) => handleDateChange(date, key)}
                        />
                      </label>
                    </Col>
                  ))}
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
                        <button
                          onClick={handleSaveDetails}
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-75 bg-primary text-primary-foreground shadow-primary hover:bg-primary/90 focus-visible:ring-primary h-9 px-3 rounded-md"
                        >
                          Save Details
                        </button>
                        <button
                          onClick={handleDeleteInterview}
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-75 border bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md delete-btn border-red-500"
                        >
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
                            value={interviewDate}
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
                              value={interviewType}
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
                              value={interviewFormat}
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
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "cover-letter" && (
        <div className="ant-col tools-drawer scroll">
          <div className="action-wrapper summary-module-wrapper _job-listing-tool-content_1pqaz_5">
            <div className="module-header !block !w-full">
              {!showCoverLetterForm && (
                <div>
                  <Button
                    type="primary"
                    size="small"
                    className="full-width"
                    onClick={handleGenerateCoverLetter}
                  >
                    <PlusCircleOutlined />
                    <span>Generate a new cover letter </span>
                  </Button>
                </div>
              )}
            </div>

            <div className="module-body opened border !border-t-0 !pt-0 !pb-0">
              {showCoverLetterForm && (
                <div className="cover-letter-container mb-9">
                  <div className="generate-cover-letter-form">
                    <div className="field-row grid grid-cols-2 gap-4">
                      <div className="cover-letter-input flex flex-col gap-1">
                        <label htmlFor="companyName" className="font-medium">
                          Name of Company
                        </label>
                        <Input
                          id="companyName"
                          type="text"
                          value={coverLetterForm.companyName}
                          onChange={handleCoverLetterInputChange}
                          placeholder="Enter the company name"
                          className="p-2 border !rounded-md"
                        />
                        {/* {errors.companyName && (
                          <p className="text-red-500 text-sm">
                            {errors.companyName}
                          </p>
                        )} */}
                      </div>
                      <div className="cover-letter-input flex flex-col gap-1">
                        <label htmlFor="jobTitle" className="font-medium">
                          Job Title
                        </label>
                        <Input
                          id="jobTitle"
                          placeholder="Enter the job title"
                          type="text"
                          value={coverLetterForm.jobTitle}
                          onChange={handleCoverLetterInputChange}
                          className="p-2 border !rounded-md"
                        />
                        {/* {errors.jobTitle && (
                          <p className="text-red-500 text-sm">
                            {errors.jobTitle}
                          </p>
                        )} */}
                      </div>
                    </div>
                  </div>

                  <div className="field-row mt-4">
                    <div className="cover-letter-input flex flex-col gap-1">
                      <label htmlFor="insights" className="font-medium">
                        Insights
                      </label>
                      <Input.TextArea
                        id="insights"
                        placeholder="Add insights or details for the cover letter"
                        rows={6}
                        value={coverLetterForm.insights}
                        onChange={handleCoverLetterInputChange}
                        className="border p-2 !rounded-md"
                      />
                    </div>
                  </div>
                  <div className="field-row flex gap-4 mt-4 ">
                    <Button
                      type="primary"
                      size="small"
                      onClick={handleSaveGenerateCoverLetter}
                    >
                      Generate
                    </Button>
                    <Button
                      type="default"
                      size="small"
                      onClick={handleCoverLetterCancel}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === "contacts" && (
        <div className="ant-col tools-drawer scroll">
          <div className="action-wrapper summary-module-wrapper _job-listing-tool-content_1pqaz_5">
            <div className="module-header">
              <h3>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  viewBox="0 0 20 17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="!w-6 !h-6"
                >
                  <rect height="13" rx="0.5" width="18" x="1" y="2.5"></rect>
                  <path d="M10 1V4"></path>
                  <path d="M14 1V4"></path>
                  <path d="M6 1V4"></path>
                  <circle cx="9.99998" cy="8.21043" r="1.59764"></circle>
                  <path d="M12.4727 12.75C12.4727 12.3889 12.4088 12.0313 12.2845 11.6976C12.1602 11.364 11.9781 11.0608 11.7485 10.8055C11.5189 10.5501 11.2463 10.3475 10.9463 10.2093C10.6463 10.0711 10.3247 10 10 10C9.67531 10 9.35377 10.0711 9.05377 10.2093C8.75377 10.3475 8.48119 10.5501 8.25158 10.8055C8.02197 11.0608 7.83983 11.364 7.71557 11.6976C7.5913 12.0313 7.52734 12.3889 7.52734 12.75"></path>
                </svg>
                Contacts
              </h3>
              <div className="module-header-action">
                <button
                  type="button"
                  className="_button_11uyj_1 _with-icon_11uyj_47 _icon-only_11uyj_51 _round_11uyj_141 _flat_11uyj_95 _medium_11uyj_127 _close-button_1pqaz_1 !text-red-500 !text-lg"
                  onClick={handleClose}
                >
                  <CloseCircleOutlined className="!w-5 !h-5" />
                </button>
              </div>
            </div>

            <div className="module-body opened">
              {showContacts ? (
                <div className="job-contact-list-container">
                  <>
                    {loading && <ContactscreenLoader />}
                    <ul className="job-contact-list">
                      <li className="add-new-contact-btn-wrapper">
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
                      </li>

                      {contacts.map((contact) => (
                        <li
                          key={contact._id}
                          className={`job-contact-list-item ${
                            editContactId === contact._id ? "editing-mode" : ""
                          }`}
                        >
                          {editContactId === contact._id ? (
                            <div>
                              {/* Inline Edit Form */}
                              <div className="edit-contact-form">
                                <div className="field-row grid grid-cols-2 gap-4">
                                  <div className="job-contacts-input flex flex-col gap-1">
                                    <label
                                      htmlFor="firstName"
                                      className="font-medium"
                                    >
                                      First Name
                                    </label>
                                    <Input
                                      id="firstName"
                                      placeholder="First Name"
                                      value={contactFormData.firstName}
                                      onChange={(e) =>
                                        setContactFormData((prev) => ({
                                          ...prev,
                                          firstName: e.target.value,
                                        }))
                                      }
                                      className="p-2 border !rounded-md"
                                    />
                                    {errors.firstName && (
                                      <p className="text-red-500 text-sm">
                                        {errors.firstName}
                                      </p>
                                    )}
                                  </div>
                                  <div className="job-contacts-input flex flex-col gap-1">
                                    <label
                                      htmlFor="lastName"
                                      className="font-medium"
                                    >
                                      Last Name
                                    </label>
                                    <Input
                                      id="lastName"
                                      placeholder="Last Name"
                                      value={contactFormData.lastName}
                                      onChange={(e) =>
                                        setContactFormData((prev) => ({
                                          ...prev,
                                          lastName: e.target.value,
                                        }))
                                      }
                                      className="p-2 border !rounded-md"
                                    />
                                    {errors.lastName && (
                                      <p className="text-red-500 text-sm">
                                        {errors.lastName}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <div className="field-row grid grid-cols-2 gap-4 mt-4">
                                  <div className="job-contacts-input flex flex-col gap-1">
                                    <label
                                      htmlFor="email"
                                      className="font-medium"
                                    >
                                      Email
                                    </label>
                                    <Input
                                      id="email"
                                      placeholder="hello@example.com"
                                      type="email"
                                      value={contactFormData.email}
                                      onChange={(e) =>
                                        setContactFormData((prev) => ({
                                          ...prev,
                                          email: e.target.value,
                                        }))
                                      }
                                      className="p-2 border !rounded-md"
                                    />
                                    {errors.email && (
                                      <p className="text-red-500 text-sm">
                                        {errors.email}
                                      </p>
                                    )}
                                  </div>
                                  <div className="job-contacts-input flex flex-col gap-1">
                                    <label
                                      htmlFor="phoneNumber"
                                      className="font-medium"
                                    >
                                      Phone Number
                                    </label>
                                    <Input
                                      id="phoneNumber"
                                      placeholder="+234 80X XXXXXXX"
                                      value={contactFormData.phoneNumber}
                                      onChange={(e) =>
                                        setContactFormData((prev) => ({
                                          ...prev,
                                          phoneNumber: e.target.value,
                                        }))
                                      }
                                      className="border p-2 !rounded-md"
                                    />
                                    {errors.phoneNumber && (
                                      <p className="text-red-500 text-sm">
                                        {errors.phoneNumber}
                                      </p>
                                    )}
                                  </div>
                                </div>

                                <div className="field-row mt-4">
                                  <div className="job-contacts-input flex flex-col gap-1">
                                    <label
                                      htmlFor="notes"
                                      className="font-medium"
                                    >
                                      Notes
                                    </label>
                                    <Input.TextArea
                                      id="notes"
                                      placeholder="Add notes about this contact"
                                      rows={4}
                                      value={contactFormData.notes}
                                      onChange={(e) =>
                                        setContactFormData((prev) => ({
                                          ...prev,
                                          notes: e.target.value,
                                        }))
                                      }
                                      className="border p-2 !rounded-md"
                                    />
                                  </div>
                                </div>
                                <div className="field-row flex gap-4 mt-4 mb-5">
                                  <Button
                                    type="primary"
                                    size="small"
                                    onClick={() =>
                                      handleUpdateContact(
                                        contact._id,
                                        contactFormData
                                      )
                                    }
                                  >
                                    Save
                                  </Button>
                                  <Button
                                    type="default"
                                    size="small"
                                    onClick={handleCancelEdit}
                                  >
                                    Cancel
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="job-contacts-read-only">
                                <div className="h4 read-only-name text-lg">
                                  <span>
                                    {contact.firstName} {contact.lastName}
                                  </span>
                                </div>
                                <div className="read-only-contact-info email flex items-center">
                                  <MailOutlined className="mr-2" />
                                  <span>
                                    <a
                                      href={`mailto:${contact.email}`}
                                      rel="noopener noreferrer"
                                      className="font-normal text-[#111313] underline hover:no-underline"
                                    >
                                      {contact.email}
                                    </a>
                                  </span>
                                </div>
                                <div className="read-only-contact-info phone flex items-center">
                                  <PhoneOutlined className="mr-2" />
                                  <span>{contact.phoneNumber}</span>
                                </div>
                                <div className="read-only-contact-info notes mt-3">
                                  <span className="label font-semibold">
                                    Notes:
                                  </span>
                                  <div className="notes-container max-h-36 overflow-y-auto">
                                    <p>{contact.notes}</p>
                                  </div>
                                </div>
                              </div>
                              <button
                                type="button"
                                className="ant-btn ant-btn-link ant-btn-lg ant-btn-icon-only ant-btn-dangerous delete-contact-btn w-auto h-auto"
                                onClick={() => handleDeleteContact(contact._id)}
                              >
                                <DeleteOutlined className="!border-red-500" />
                              </button>
                              <button
                                type="button"
                                className="ant-btn ant-btn-link ant-btn-lg ant-btn-icon-only edit-contact-btn muted-icon w-auto h-auto"
                                onClick={() => handleEditContact(contact._id)}
                              >
                                <EditOutlined className="text-[#bdbdbd]" />
                              </button>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                </div>
              ) : (
                showForm && (
                  <div className="interview-contacts-container">
                    <div className="add-interview-form">
                      <div className="field-row grid grid-cols-2 gap-4">
                        <div className="job-contacts-input flex flex-col gap-1">
                          <label htmlFor="firstName" className="font-medium">
                            First Name
                          </label>
                          <Input
                            id="firstName"
                            type="text"
                            value={contactFormData.firstName}
                            onChange={handleInputChange}
                            placeholder="First Name"
                            className="p-2 border !rounded-md"
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm">
                              {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div className="job-contacts-input flex flex-col gap-1">
                          <label htmlFor="lastName" className="font-medium">
                            Last Name
                          </label>
                          <Input
                            id="lastName"
                            placeholder="Last Name"
                            type="text"
                            value={contactFormData.lastName}
                            onChange={handleInputChange}
                            className="p-2 border !rounded-md"
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm">
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="field-row grid grid-cols-2 gap-4 mt-4">
                        <div className="job-contacts-input flex flex-col gap-1">
                          <label htmlFor="email" className="font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            placeholder="hello@example.com"
                            type="email"
                            value={contactFormData.email}
                            onChange={handleInputChange}
                            className="p-2 border !rounded-md"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div className="job-contacts-input flex flex-col gap-1">
                          <label htmlFor="phoneNumber" className="font-medium">
                            Phone Number
                          </label>
                          <Input
                            id="phoneNumber"
                            placeholder="+234 80X XXXXXXX"
                            value={contactFormData.phoneNumber}
                            onChange={handleInputChange}
                            className="border p-2 !rounded-md"
                          />
                          {errors.phoneNumber && (
                            <p className="text-red-500 text-sm">
                              {errors.phoneNumber}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="field-row mt-4">
                        <div className="job-contacts-input flex flex-col gap-1">
                          <label htmlFor="notes" className="font-medium">
                            Notes
                          </label>
                          <Input.TextArea
                            id="notes"
                            placeholder="Add notes about this contact"
                            rows={4}
                            value={contactFormData.notes}
                            onChange={handleInputChange}
                            className="border p-2 !rounded-md"
                          />
                        </div>
                      </div>
                      <div className="field-row flex gap-4 mt-4 mb-5">
                        <Button
                          type="primary"
                          size="small"
                          onClick={handleSaveContact}
                        >
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
                )
              )}
            </div>
          </div>

          {/* Delete Confirmation Modal */}
          <Modal
            open={showDeleteModal}
            footer={null}
            onCancel={() => setShowDeleteModal(false)}
            closable={false} // To match the original modal without a close button
          >
            <p className="!text-[26px] !font-semibold !text-[#111313] !leading-[1.4]">
              Are you sure you want to disconnect this contact from this job
              post?
            </p>
            <div className="flex justify-end mt-4 gap-2">
              <Button
                className="!order-2 !ml-2 !font-medium !border !border-[#111313] !rounded !text-[#111313] hover:!bg-neutralHover"
                onClick={() => setShowDeleteModal(false)}
              >
                No, keep contact
              </Button>
              <Button
                className="!order-2 !ml-2 !font-medium !border !border-[#c32525] !rounded !text-dangerText hover:!bg-neutralHover"
                onClick={confirmDeleteContact}
              >
                Yes, disconnect contact
              </Button>
            </div>
          </Modal>
        </div>
      )}

      {activeTab === "templates" && (
        <div className="ant-col tools-drawer scroll">
          <div className="action-wrapper summary-module-wrapper _job-listing-tool-content_1pqaz_5">
            <div className="module-header">
              <h3>
                <svg
                  fill="none"
                  height="40"
                  viewBox="0 0 20 16"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  className="!w-6 !h-6"
                >
                  <rect
                    height="13"
                    rx="0.5"
                    width="18"
                    x="1.07727"
                    y="1.5"
                  ></rect>
                  <path d="M1.07727 2L9.7703 8.76125C9.95086 8.90168 10.2037 8.90168 10.3842 8.76125L19.0773 2"></path>
                </svg>
                Email Templates
              </h3>
              <div className="module-header-action">
                <button
                  type="button"
                  className="_button_11uyj_1 _with-icon_11uyj_47 _icon-only_11uyj_51 _round_11uyj_141 _flat_11uyj_95 _medium_11uyj_127 _close-button_1pqaz_1 !text-red-500 !text-lg"
                  onClick={handleClose}
                >
                  <CloseCircleOutlined className="!w-5 !h-5" />
                </button>
              </div>
            </div>

            <div className="module-body opened">
              <div className="job-templates-container">
                <div className="templates-scrollable-wrapper">
                  <Tabs
                    type="card"
                    items={[
                      {
                        key: "template-1",
                        label: (
                          <Tooltip title="Use this template to apply for a job.">
                            Job Application
                          </Tooltip>
                        ),
                        children: (
                          <div className="category-template-item">
                            <h6 className="font-extrabold">
                              Subject: Application for [Job Title] - [Your Full
                              Name]
                            </h6>
                            <p className="true">
                              Dear [Hiring Manager's Name or "Hiring Manager"],{" "}
                              <br />
                              <br />
                              I hope this message finds you well. I am writing
                              to express my interest in the [Job Title] position
                              at [Company Name], as advertised on [Job
                              Board/Company Website/Referral]. <br />
                              <br />
                              With my background in [Your Field/Industry],
                              including over [X years of experience] in
                              [specific skills or achievements], I am confident
                              in my ability to contribute significantly to your
                              team. In my previous role(s) at [Previous Company
                              Name(s)], I successfully [specific accomplishments
                              or responsibilities that are relevant to the job].{" "}
                              <br />
                              <br />
                              I have attached my resume and [any additional
                              documents, if applicable] for your review. I would
                              welcome the opportunity to further discuss how my
                              skills and experiences align with the needs of
                              your team. <br />
                              <br />
                              Thank you for considering my application. Please
                              feel free to contact me at [your email address] or
                              [your phone number] at your convenience. I look
                              forward to the possibility of contributing to
                              [Company Name]'s success.
                              <br />
                              <br />
                              Best regards, <br />
                              [Your Full Name] <br />
                              [Your LinkedIn Profile (if applicable)] <br />
                              [Your Contact Information]
                            </p>
                            <footer>
                              <Button
                                type="button"
                                className="bg-[#111313] !text-white"
                                onClick={handleCopySubject}
                              >
                                Copy Subject
                              </Button>
                              <Button
                                type="button"
                                className="bg-[#111313] !text-white"
                                onClick={handleCopyMessage}
                              >
                                Copy Message
                              </Button>
                            </footer>
                          </div>
                        ),
                      },
                      {
                        key: "template-2",
                        label: (
                          <Tooltip title="Follow up on a job application.">
                            Follow Up
                          </Tooltip>
                        ),
                        children: (
                          <div className="category-template-item">
                            <h6 className="font-extrabold">
                              Subject: Following up on [X ROLE] application at
                              [X]
                            </h6>
                            <p className="true">
                              Hi [RECRUITER'S NAME], <br />
                              <br />
                              I hope you're well. I wanted to follow up on my
                              previous email to see if you had any updates
                              regarding the timeline for hiring a [ROLE] at
                              [COMPANY NAME]. <br />
                              <br />
                              I'm sure you're quite busy but wanted to reiterate
                              my interest in the position. <br />
                              <br />
                              Again, I appreciate your time and consideration
                              and look forward to hearing from you. Thanks so
                              much! <br />
                              <br />
                              Best, <br />
                              [YOUR NAME]
                            </p>
                            <footer>
                              <Button
                                type="button"
                                className="bg-[#111313] !text-white"
                                onClick={handleCopySubject}
                              >
                                Copy Subject
                              </Button>
                              <Button
                                type="button"
                                className="bg-[#111313] !text-white"
                                onClick={handleCopyMessage}
                              >
                                Copy Message
                              </Button>
                            </footer>
                          </div>
                        ),
                      },
                      {
                        key: "template-3",
                        label: (
                          <Tooltip title="Respond to a rejection letter professionally.">
                            Rejection Letter
                          </Tooltip>
                        ),
                        children: (
                          <div className="category-template-item">
                            <h6 className="font-extrabold">
                              Subject: Thank You for the Opportunity - [Your
                              Full Name]
                            </h6>
                            <p className="true">
                              Dear [Hiring Manager's Name], <br />
                              <br />
                              Thank you for getting back to me regarding the
                              [Job Title] position at [Company Name]. While I am
                              disappointed to hear that I was not selected for
                              the role, I truly appreciate the opportunity to
                              interview and learn more about your team and
                              organization. <br />
                              <br />
                              I would like to stay in touch and hope to be
                              considered for any future opportunities that align
                              with my skills and experience. <br />
                              <br />
                              Wishing you and your team all the best. <br />
                              <br />
                              Best regards, <br />
                              [YOUR NAME] <br />
                              [Your Contact Information]
                            </p>
                            <footer>
                              <Button
                                type="button"
                                className="bg-[#111313] !text-white"
                                onClick={handleCopySubject}
                              >
                                Copy Subject
                              </Button>
                              <Button
                                type="button"
                                className="bg-[#111313] !text-white"
                                onClick={handleCopyMessage}
                              >
                                Copy Message
                              </Button>
                            </footer>
                          </div>
                        ),
                      },
                      {
                        key: "template-4",
                        label: (
                          <Tooltip title="Job application email for referral from a connection">
                            Referral
                          </Tooltip>
                        ),
                        children: (
                          <div className="category-template-item">
                            <h6 className="font-extrabold">
                              Subject: Job application for the position of [job
                              title]
                            </h6>
                            <p className="true">
                              Respected [Recipient's Name], <br />
                              <br />
                              My name is [your name], and I'm writing to apply
                              for the [job title] position. I have been
                              researching your company for the past few months
                              and have only heard positive things about your
                              organization.
                              <br />
                              <br />
                              I have been referred to you by Mr./Ms. [Referrer's
                              name], who is working for [Referrer's company
                              name] as [designation's name]. They also highly
                              regard your company and have especially
                              recommended me to you.
                              <br />
                              <br />
                              I have a work experience of over [years] at
                              [company's name]. Therefore, I have the experience
                              necessary to work for your esteemed organization.
                              <br />
                              <br />
                              I have also attached my resume and await your
                              valuable response.
                              <br />
                              <br />
                              Thanking you, <br />
                              Yours sincerely,
                              <br />
                              [Your Name]
                            </p>
                            <footer>
                              <Button
                                type="button"
                                className="bg-[#111313] !text-white"
                                onClick={handleCopySubject}
                              >
                                Copy Subject
                              </Button>
                              <Button
                                type="button"
                                className="bg-[#111313] !text-white"
                                onClick={handleCopyMessage}
                              >
                                Copy Message
                              </Button>
                            </footer>
                          </div>
                        ),
                      },
                      {
                        key: "template-5",
                        label: (
                          <Tooltip title="Withdraw a job application politely.">
                            Withdraw Application
                          </Tooltip>
                        ),
                        children: (
                          <div className="category-template-item">
                            <h6 className="font-extrabold">
                              Subject: Request to withdraw my job application
                            </h6>
                            <p className="true">
                              Respected [Recipient's Name], <br />
                              <br />
                              Thank you for taking the time to interview me for
                              the position of [Job Title] at your reputed
                              company. <br />
                              <br />
                              However, with a heavy heart, I would like to
                              withdraw my application. It was a hard decision,
                              but I had to take it owing to [state the reason].{" "}
                              <br />
                              <br />
                              Thanking you, <br />
                              Sincerely, <br />
                              [Your Name]
                            </p>
                            <footer>
                              <Button
                                type="button"
                                className="bg-[#111313] !text-white"
                                onClick={handleCopySubject}
                              >
                                Copy Subject
                              </Button>
                              <Button
                                type="button"
                                className="bg-[#111313] !text-white"
                                onClick={handleCopyMessage}
                              >
                                Copy Message
                              </Button>
                            </footer>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AntdTracker;
