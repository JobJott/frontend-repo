import React, { useState } from "react";
import { Checkbox, Modal } from "antd";
import styled from "styled-components";

const StyledDeleteModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
  }

  .ant-modal-body {
    padding: 32px 32px 24px;
  }

  .ant-modal-confirm-title {
    display: block;
    overflow: hidden;
    color: #111313;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    font-family: "Montserrat", sans-serif !important;
  }

  .ant-modal-confirm-title {
    font-size: 26px;
    font-weight: 700;
  }

  .ant-modal-confirm-content {
    margin-top: 1rem;
  }

  .ant-btn:not(.ant-btn-dangerous, [disabled]) {
    color: #111313;
    border-color: #111313;
    border: 1px solid;
  }

  .ant-btn-dangerous {
    color: #c32525;
    border-color: #c32525;
    border: 1px solid;
    background: #fff;
  }

  .ant-modal-confirm-btns {
    display: flex;
    justify-content: flex-end;
  }

  .ant-modal-confirm-btns .ant-btn:not(.ant-btn-primary) {
    order: 2;
    margin-left: 0.5rem;
    min-width: 86px;
  }

  .ant-modal-confirm-btns .ant-btn {
    font-size: 14px;
  }
`;
export const DeleteJobModal = ({ deleteModalOpen, setDeleteModalOpen }) => {
  const handleDeleteClick = () => {
    // Add custom logic for "Delete Job"
    console.log("Job Deleted");

    setDeleteModalOpen(false); // Close dropdown
  };

  return (
    <StyledDeleteModal
      open={deleteModalOpen}
      onOk={() => setDeleteModalOpen(false)}
      onCancel={() => setDeleteModalOpen(false)}
      footer={null}
      closable={false}
    >
      <span className="ant-modal-confirm-title">
        Are you sure you want to delete this job post?
      </span>
      <div className="ant-modal-confirm-content"></div>
      <div className="ant-modal-confirm-btns">
        <button
          type="button"
          className="ant-btn ant-btn-default"
          onClick={() => setDeleteModalOpen(false)}
        >
          <span>No, Keep Job Post</span>
        </button>
        <button
          type="button"
          className="ant-btn ant-btn-default ant-btn-dangerous"
          onClick={handleDeleteClick}
        >
          <span>Yes, Delete Job Post</span>
        </button>
      </div>
    </StyledDeleteModal>
  );
};

export const BookmarkExtended = ({
  isChecked,
  setIsChecked,
  setIsExpanded,
}) => {
  const handleBoxChecked = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSuggestionBoxClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsExpanded(true); // Keep the section expanded
  };

  return (
    <div
      className="_content-wrapper_1qsov_77"
      data-projection-id="7"
      style={{ height: "auto" }}
    >
      <div
        className="_cluster_jw67l_1 _content_1qsov_77"
        style={{
          "--space": 0,
          "--align": "top",
          "--justify": "flex-start",
          "--wrap": "wrap",
        }}
      >
        {/* Checklist */}
        <ul className="_checklist_1qsov_32">
          <li className="_selected_1qsov_40">
            <button
              className="_btn_mkpcn_1 none _item-label_1qsov_46"
              type="button"
            >
              <div
                className="_cluster_jw67l_1"
                style={{
                  "--space": "0.75rem",
                  "--align": "baseline",
                  "--justify": "flex-start",
                  "--wrap": "wrap",
                }}
              >
                <label className="ant-checkbox-wrapper">
                  <Checkbox onChange={handleBoxChecked} checked={isChecked} />
                </label>
                Review the Job Position details
              </div>
            </button>
          </li>
        </ul>

        {/* Suggestions */}
        <div
          className="_box_1rxfg_1 _suggestions_1qsov_50_bookmark"
          style={{
            "--py": 0,
            "--px": 0,
            "--bg": "#fff",
            "--color": "#e5e5e5",
            "--rad": 0,
            "--style": "solid",
            "--width": 0,
          }}
          onClick={handleSuggestionBoxClick}
        >
          <ul>
            <li className="bulleted">
              <div>
                Check if the job matches your experience based on the
                highlighted skills and keywords
              </div>
            </li>
            <li className="bulleted">
              <div>
                Explore the company and its values to determine if they aligns
                with your career goals
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const StyledAppModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
  }

  .ant-modal-body {
    padding: 32px 32px 24px;
  }

  .ant-modal-confirm-title {
    display: block;
    overflow: hidden;
    color: #111313;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.4;
    font-family: "Montserrat", sans-serif !important;
  }

  .ant-modal-confirm-title {
    font-size: 26px;
    font-weight: 700;
  }

  .ant-modal-confirm-content {
    margin-top: 1rem;
  }

  .ant-btn:not(.ant-btn-dangerous, [disabled]) {
    color: #111313;
    border-color: #111313;
    border: 1px solid;
  }

  .ant-btn-dangerous {
    color: #c32525;
    border-color: #c32525;
    border: 1px solid;
    background: #fff;
  }

  .ant-modal-confirm-btns {
    display: flex;
    justify-content: flex-end;
  }

  .ant-modal-confirm-btns .ant-btn:not(.ant-btn-primary) {
    order: 2;
    margin-left: 0.5rem;
    min-width: 86px;
  }

  .ant-modal-confirm-btns .ant-btn {
    font-size: 14px;
  }
`;
export const ApplicationModal = ({ modalOpenApp, setModalOpenApp }) => {
  return (
    <StyledAppModal
      open={modalOpenApp}
      onOk={() => setModalOpenApp(false)}
      onCancel={() => setModalOpenApp(false)}
      footer={null}
      closable={false}
    >
      <span className="ant-modal-confirm-title">
        Are you sure you want to move the job to Applied?
      </span>
      <div className="ant-modal-confirm-content"></div>
      <div className="ant-modal-confirm-btns">
        <button
          type="button"
          className="ant-btn ant-btn-default"
          onClick={() => setModalOpenApp(false)}
        >
          <span>No</span>
        </button>
        <button
          type="button"
          className="ant-btn ant-btn-default ant-btn-dangerous"
          onClick={() => setModalOpenApp(false)}
        >
          <span>Yes, Update status</span>
        </button>
      </div>
    </StyledAppModal>
  );
};

export const ApplyingExtended = ({
  checkedItems,
  setIsExpanded,
  selectedItem,
  handleBoxCheckedOne,
  handleItemSelectedOne,
}) => {
  const [modalOpenApp, setModalOpenApp] = useState(false);

  const handleSuggestionBoxClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsExpanded(true); // Keep the section expanded
  };

  const handleModalClick = () => {
    setModalOpenApp(true);
  };

  const suggestionsData = {
    "Get Referral": [
      {
        type: "link",
        content: "Check if you know anyone at Sails hub on LinkedIn",
        href: 'https://www.linkedin.com/search/results/people/?keywords=Sails%20hub&network=["F"]&amp;sid=_ZI',
      },
      {
        type: "button",
        content: "Ask a contact for an introduction to a person at Sails hub",
      },
      {
        type: "link",
        content: "Best practices for informational interviewing",
        href: "https://www.coursera.org/articles/informational-interview",
      },
      {
        type: "button",
        content: "Request a referral from a contact",
      },
    ],
    "Customize Resume": [
      {
        type: "text",
        content: "Review job post keywords to include in your application",
      },
      {
        type: "link",
        content: "Include job post title in your resume",
        href: "https://app.tealhq.com/resume-builder/career-history#target-titles",
      },
      {
        type: "text",
        content: "Tailor your resume blurb or summary using our AI tool",
      },
      { type: "text", content: "Tailor your achievements to the job post" },
      {
        type: "text",
        content: "Include skills that are referenced in the job post",
      },
      { type: "text", content: 'Save your resume using "first_last.file"' },
    ],
    "Customize Cover Letter": [
      {
        type: "link",
        content: "Check if the application requires a cover letter",
        href: "",
      },
      {
        type: "link",
        content: "Use a cover letter generator to get started",
        href: "https://www.grammarly.com/ai/ai-writing-tools/cover-letter-generator",
      },
      {
        type: "link",
        content: "Search Google News to learn more about the company",
        href: "",
      },
      {
        type: "link",
        content: "Use Grammarly for free to check for typos and grammar",
        href: "",
      },
    ],
    "Identify the Recruiter or Hiring Manager": [
      {
        type: "link",
        content: "Find recruiter details on LinkedIn",
        href: "https://www.linkedin.com",
      },
      {
        type: "link",
        content: "Send a message to the recruiter or hiring manager",
        href: "https://www.linkedin.com",
      },
    ],
    "Submit Application": [
      { type: "text", content: "Double-check for typos and formatting issues" },
      {
        type: "button",
        content: "Save application confirmation for your records",
        onClick: handleModalClick,
        id: "btn-click",
      },
    ],
  };

  return (
    <div
      className="_content-wrapper_1qsov_77"
      data-projection-id="22"
      style={{ height: "auto" }}
    >
      <div
        className="_cluster_jw67l_1 _content_1qsov_77"
        style={{
          "--space": "0",
          "--align": "top",
          "--justify": "flex-start",
          "--wrap": "wrap",
        }}
      >
        <ul className="_checklist_1qsov_32">
          {Object.keys(suggestionsData).map((item) => (
            <li
              key={item}
              className={`${selectedItem === item ? "_selected_1qsov_40" : ""}`}
              onClick={() => handleItemSelectedOne(item, event)}
            >
              <button
                className="_btn_mkpcn_1 none _item-label_1qsov_46"
                type="button"
              >
                <div
                  className="_cluster_jw67l_1"
                  style={{
                    "--space": "0.75rem",
                    "--align": "baseline",
                    "--justify": "flex-start",
                    "--wrap": "wrap",
                  }}
                >
                  <label className="ant-checkbox-wrapper">
                    <Checkbox
                      className="ant-checkbox-input"
                      checked={checkedItems.setOne.includes(item)}
                      onChange={(e) => handleBoxCheckedOne(e, item)}
                    >
                      {item}
                    </Checkbox>
                  </label>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <div
          className="_box_1rxfg_1 _suggestions_1qsov_50"
          style={{
            "--py": "0",
            "--px": "0",
            "--bg": "#fff",
            "--color": "#e5e5e5",
            "--rad": "0",
            "--style": "solid",
            "--width": "0",
          }}
          onClick={handleSuggestionBoxClick}
        >
          <ul>
            {(suggestionsData[selectedItem] || []).map((suggestion, index) => (
              <li key={index} className="bulleted">
                {suggestion.type === "link" ? (
                  <a
                    href={suggestion.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {suggestion.content}
                  </a>
                ) : suggestion.type === "button" ? (
                  <button
                    className="_btn _link"
                    type="button"
                    onClick={suggestion.onClick}
                    id={suggestion.id}
                  >
                    {suggestion.content}
                  </button>
                ) : (
                  <div>{suggestion.content}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ApplicationModal
        modalOpenApp={modalOpenApp}
        setModalOpenApp={setModalOpenApp}
      />
    </div>
  );
};

export const AppliedExtended = ({ isChecked, setIsChecked }) => {
  const handleBoxChecked = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div
      className="_content-wrapper_1qsov_77"
      data-projection-id="7"
      style={{ height: "auto" }}
    >
      <div
        className="_cluster_jw67l_1 _content_1qsov_77"
        style={{
          "--space": 0,
          "--align": "top",
          "--justify": "flex-start",
          "--wrap": "wrap",
        }}
      >
        {/* Checklist */}
        <ul className="_checklist_1qsov_32">
          <li className="_selected_1qsov_40">
            <button
              className="_btn_mkpcn_1 none _item-label_1qsov_46"
              type="button"
            >
              <div
                className="_cluster_jw67l_1"
                style={{
                  "--space": "0.75rem",
                  "--align": "baseline",
                  "--justify": "flex-start",
                  "--wrap": "wrap",
                }}
              >
                <label className="ant-checkbox-wrapper">
                  <Checkbox onChange={handleBoxChecked} checked={isChecked} />
                </label>
                Follow up on Job Applications
              </div>
            </button>
          </li>
        </ul>

        {/* Suggestions */}
        <div
          className="_box_1rxfg_1 _suggestions_1qsov_50"
          style={{
            "--py": 0,
            "--px": 0,
            "--bg": "#fff",
            "--color": "#e5e5e5",
            "--rad": 0,
            "--style": "solid",
            "--width": 0,
          }}
        >
          <ul>
            <li className="bulleted">
              <button className="_btn_mkpcn_1 _link_mkpcn_17" type="button">
                Send 1st follow up on 12/24/2024
              </button>
            </li>
            <li className="bulleted">
              <button className="_btn_mkpcn_1 _link_mkpcn_17" type="button">
                Send 2nd follow up on 12/31/2024
              </button>
            </li>
            <li className="bulleted">
              <button className="_btn_mkpcn_1 _link_mkpcn_17" type="button">
                Send 3rd follow up on 1/7/2025
              </button>
            </li>
            <li className="bulleted">
              <button className="_btn_mkpcn_1 _link_mkpcn_17" type="button">
                Archive job on job tracker if you haven't heard back after 3
                weeks
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const InterviewingExtended = ({
  checkedItems,
  setIsExpanded,
  secondSelectedItem,
  handleItemSelectedTwo,
  handleBoxCheckedTwo,
}) => {
  const handleSuggestionBoxClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsExpanded(true); // Keep the section expanded
  };

  const suggestionsData = {
    "Research & Prepare": [
      {
        type: "link",
        content: "  Research the Company via Google News",
        href: 'https://news.google.com/search?q="Sails%20hub"',
      },
      {
        type: "link",
        content: "Research your Interviewers via LinkedIn",
        href: "https://www.linkedin.com",
      },
      {
        type: "text",
        content: "Review the Job Description",
      },
    ],
    "Practice Interviewing": [
      {
        type: "text",
        content: "Practice a “tell me about yourself” response",
      },
      {
        type: "link",
        content: "Understand your Work Style",
        href: "",
      },
      {
        type: "text",
        content: "Review Behavioral Interview Questions",
      },
      { type: "text", content: "Prepare questions for your Interviewer" },
    ],
    "Test your Tech (virtual only)": [
      {
        type: "text",
        content: "Eliminate potential distractions and find a quiet place",
      },
      {
        type: "text",
        content: "Check your internet connection",
      },
      {
        type: "text",
        content: "Set up your background and camera angle",
      },
    ],
    "Follow Up": [
      {
        type: "text",
        content: "Send a Thank You Email to anyone you met with",
      },
      {
        type: "text",
        content: "Record your Interview & Follow Up dates",
      },
    ],
  };

  return (
    <div
      className="_content-wrapper_1qsov_77"
      data-projection-id="22"
      style={{ height: "auto" }}
    >
      <div
        className="_cluster_jw67l_1 _content_1qsov_77"
        style={{
          "--space": "0",
          "--align": "top",
          "--justify": "flex-start",
          "--wrap": "wrap",
        }}
      >
        <ul className="_checklist_1qsov_32">
          {Object.keys(suggestionsData).map((item) => (
            <li
              key={item}
              className={`${
                secondSelectedItem === item ? "_selected_1qsov_40" : ""
              }`}
              onClick={() => handleItemSelectedTwo(item, event)}
            >
              <button
                className="_btn_mkpcn_1 none _item-label_1qsov_46"
                type="button"
              >
                <div
                  className="_cluster_jw67l_1"
                  style={{
                    "--space": "0.75rem",
                    "--align": "baseline",
                    "--justify": "flex-start",
                    "--wrap": "wrap",
                  }}
                >
                  <label className="ant-checkbox-wrapper">
                    <Checkbox
                      className="ant-checkbox-input"
                      checked={checkedItems.setTwo.includes(item)}
                      onChange={(e) => handleBoxCheckedTwo(e, item)}
                    >
                      {item}
                    </Checkbox>
                  </label>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <div
          className="_box_1rxfg_1 _suggestions_1qsov_50"
          style={{
            "--py": "0",
            "--px": "0",
            "--bg": "#fff",
            "--color": "#e5e5e5",
            "--rad": "0",
            "--style": "solid",
            "--width": "0",
          }}
          onClick={handleSuggestionBoxClick}
        >
          <ul>
            {(suggestionsData[secondSelectedItem] || []).map(
              (suggestion, index) => (
                <li key={index} className="bulleted">
                  {suggestion.type === "link" ? (
                    <a
                      href={suggestion.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {suggestion.content}
                    </a>
                  ) : suggestion.type === "button" ? (
                    <button
                      className="_btn _link"
                      type="button"
                      onClick={suggestion.onClick}
                      id={suggestion.id}
                    >
                      {suggestion.content}
                    </button>
                  ) : (
                    <div>{suggestion.content}</div>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const NegotiatingExtended = ({
  checkedItems,
  setIsExpanded,
  thirdSelectedItem,
  handleItemSelectedThree,
  handleBoxCheckedThree,
}) => {
  const handleSuggestionBoxClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsExpanded(true); // Keep the section expanded
  };

  const suggestionsData = {
    "Research your Targets": [
      {
        type: "Text",
        content: "Calculate your Budget",
      },
      {
        type: "text",
        content: "Determine your Target Salary Range",
      },
      {
        type: "text",
        content: "Get market data from people and other resources",
      },
    ],
    "Prepare for Negotiations": [
      {
        type: "text",
        content: "  Review your accomplishments and unique skills",
      },
      {
        type: "text",
        content: "Focus in on what the employer needs",
      },
      {
        type: "text",
        content: "Practice talking about your value",
      },
      { type: "text", content: "Prepare your negotiation scripts" },
    ],
    "Evaluate an Offer": [
      {
        type: "text",
        content:
          "Take time to think over the full offer and total compensation before accepting a role.",
      },
      {
        type: "text",
        content: "Consider making a counter offer",
      },
      {
        type: "text",
        content: "Analyze your offer",
      },
      {
        type: "text",
        content: "Accept or Decline the offer",
      },
    ],
  };

  return (
    <div
      className="_content-wrapper_1qsov_77"
      data-projection-id="22"
      style={{ height: "auto" }}
    >
      <div
        className="_cluster_jw67l_1 _content_1qsov_77"
        style={{
          "--space": "0",
          "--align": "top",
          "--justify": "flex-start",
          "--wrap": "wrap",
        }}
      >
        <ul className="_checklist_1qsov_32">
          {Object.keys(suggestionsData).map((item) => (
            <li
              key={item}
              className={`${
                thirdSelectedItem === item ? "_selected_1qsov_40" : ""
              }`}
              onClick={() => handleItemSelectedThree(item, event)}
            >
              <button
                className="_btn_mkpcn_1 none _item-label_1qsov_46"
                type="button"
              >
                <div
                  className="_cluster_jw67l_1"
                  style={{
                    "--space": "0.75rem",
                    "--align": "baseline",
                    "--justify": "flex-start",
                    "--wrap": "wrap",
                  }}
                >
                  <label className="ant-checkbox-wrapper">
                    <Checkbox
                      className="ant-checkbox-input"
                      checked={checkedItems.setThree.includes(item)}
                      onChange={(e) => handleBoxCheckedThree(e, item)}
                    >
                      {item}
                    </Checkbox>
                  </label>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <div
          className="_box_1rxfg_1 _suggestions_1qsov_50"
          style={{
            "--py": "0",
            "--px": "0",
            "--bg": "#fff",
            "--color": "#e5e5e5",
            "--rad": "0",
            "--style": "solid",
            "--width": "0",
          }}
          onClick={handleSuggestionBoxClick}
        >
          <ul>
            {(suggestionsData[thirdSelectedItem] || []).map(
              (suggestion, index) => (
                <li key={index} className="bulleted">
                  {suggestion.type === "link" ? (
                    <a
                      href={suggestion.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {suggestion.content}
                    </a>
                  ) : suggestion.type === "button" ? (
                    <button
                      className="_btn _link"
                      type="button"
                      onClick={suggestion.onClick}
                      id={suggestion.id}
                    >
                      {suggestion.content}
                    </button>
                  ) : (
                    <div>{suggestion.content}</div>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const JobListingDrawer = () => {
  const [activeTab, setActiveTab] = useState("job-info");

  const tabs = [
    { id: "job-info", label: "Job Info", icon: JobInfoIcon },
    { id: "notes", label: "Notes", icon: NotesIcon },
    { id: "resumes", label: "Resumes", icon: ResumesIcon },
    { id: "contacts", label: "Contacts", icon: ContactsIcon },
    { id: "templates", label: "Email Templates", icon: EmailTemplatesIcon },
    { id: "checklist", label: "Check List", icon: CheckListIcon },
  ];
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      tabIndex={0}
      data-orientation="horizontal"
      style={{ outline: "none" }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`content-${tab.id}`}
          data-state={activeTab === tab.id ? "active" : "inactive"}
          id={`trigger-${tab.id}`}
          tabIndex={activeTab === tab.id ? "0" : "-1"}
          data-orientation="horizontal"
          type="button"
          className={`_button_11uyj_1 _with-icon_11uyj_47 _ghost_11uyj_112 _medium_11uyj_127 ${
            activeTab === tab.id ? "active" : ""
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <tab.icon />
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const JobInfoIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.1544 9L10.1544 15"></path>
    <path d="M10.1544 5L10.1544 6"></path>
    <path d="M10.1544 19C15.125 19 19.1544 14.9706 19.1544 10C19.1544 5.02944 15.125 1 10.1544 1C5.18386 1 1.15442 5.02944 1.15442 10C1.15442 14.9706 5.18386 19 10.1544 19Z"></path>
  </svg>
);

const NotesIcon = () => (
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
);

const ResumesIcon = () => (
  <svg
    fill="none"
    height="20"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 18 20"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.9449 6.5291V13.9082C13.9449 16.6544 11.7187 18.8807 8.97246 18.8807V18.8807C6.22625 18.8807 4 16.6544 4 13.9082V4.31498C4 2.48416 5.48416 1 7.31498 1V1C9.14579 1 10.63 2.48417 10.63 4.31498V12.6357C10.63 13.5511 9.88787 14.2931 8.97246 14.2931V14.2931C8.05706 14.2931 7.31498 13.5511 7.31498 12.6357V6.5291"></path>
  </svg>
);

const ContactsIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeWidth="1.5"
    viewBox="0 0 20 17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect height="13" rx="0.5" width="18" x="1" y="2.5"></rect>
    <path d="M10 1V4"></path>
    <path d="M14 1V4"></path>
    <path d="M6 1V4"></path>
    <circle cx="9.99998" cy="8.21043" r="1.59764"></circle>
    <path d="M12.4727 12.75C12.4727 12.3889 12.4088 12.0313 12.2845 11.6976C12.1602 11.364 11.9781 11.0608 11.7485 10.8055C11.5189 10.5501 11.2463 10.3475 10.9463 10.2093C10.6463 10.0711 10.3247 10 10 10C9.67531 10 9.35377 10.0711 9.05377 10.2093C8.75377 10.3475 8.48119 10.5501 8.25158 10.8055C8.02197 11.0608 7.83983 11.364 7.71557 11.6976C7.5913 12.0313 7.52734 12.3889 7.52734 12.75"></path>
  </svg>
);

const EmailTemplatesIcon = () => (
  <svg
    fill="none"
    height="40"
    viewBox="0 0 20 16"
    width="40"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeLinecap="round"
    strokeWidth="1.5"
  >
    <rect height="13" rx="0.5" width="18" x="1.07727" y="1.5"></rect>
    <path d="M1.07727 2L9.7703 8.76125C9.95086 8.90168 10.2037 8.90168 10.3842 8.76125L19.0773 2"></path>
  </svg>
);

const CheckListIcon = () => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.9997 1H1.12177"></path>
    <path d="M16.9997 17L16.9997 1"></path>
    <path d="M1 16.9998L1 1"></path>
    <path d="M17 16.9998L1 16.9998"></path>
    <path d="M5.48926 9.20947L8.06812 12.2095L13.2259 6.20947"></path>
  </svg>
);

export default JobListingDrawer;
