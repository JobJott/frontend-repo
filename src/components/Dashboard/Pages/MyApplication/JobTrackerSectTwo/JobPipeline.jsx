import React from "react";
import "./JobPipeline.css";

const JobPipeline = () => {
  const pipelineSections = [
    { id: 1, value: "1", label: "bookmarked", disabled: false },
    { id: 2, value: "– –", label: "applying", disabled: true },
    { id: 3, value: "– –", label: "applied", disabled: true },
    { id: 4, value: "– –", label: "interviewing", disabled: true },
    { id: 5, value: "– –", label: "negotiating", disabled: true },
    { id: 6, value: "– –", label: "accepted", disabled: true },
  ];

  return (
    <div
      className="job-tracker-section pipeline-section"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="job-pipeline-container">
        <div className="active-jobs-container">
          {pipelineSections.map((section) => (
            <div
              key={section.id}
              className={`job-pipeline-section-wrapper reset-all-button-styles ${
                section.disabled ? "" : "contains-listings active-filter"
              }`}
            >
              <div className="section-wrapper-inner">
                <button
                  className="job-pipeline-section"
                  disabled={section.disabled}
                >
                  <div className="section-value h4">{section.value}</div>
                  <div className="section-label">{section.label}</div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPipeline;
