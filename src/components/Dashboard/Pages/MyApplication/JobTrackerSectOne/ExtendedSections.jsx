import React, { useState } from "react";
import { Checkbox, Modal, Button } from "antd";
import styled from "styled-components";

export const BookmarkExtended = ({ isChecked, setIsChecked }) => {
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
                Review the Job Position details
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
              <div>
                Look through the highlighted skills and keywords to see if the
                job matches your experience
              </div>
            </li>
            <li className="bulleted">
              <div>
                Research the company and its values to look for alignment with
                your career goals
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
        type: "text",
        content:
          "Use our cover letter generator in the resume builder to get started",
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
