import { Modal } from "antd";
import React from "react";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  .ant-modal {
    min-width: 300px;
    width: -moz-fit-content !important;
    width: fit-content !important;
    max-width: 80% !important;
    font-family: Montserrat, sans-serif;
  }

  .ant-modal-content {
    padding: 0px !important;
  }

  .ant-modal-header {
    padding: 2.25rem 2.25rem 0;
    border-bottom: 0;
  }
  .ant-modal-confirm-title,
  .ant-modal-title {
    font-size: 26px;
    font-weight: 600;
    color: #000;
    font-family: Montserrat, sans-serif;
  }

  .ant-modal-body {
    padding: 0rem 2.25rem 2.25rem;
    font-size: 14px;
    line-height: 1.5715;
    word-wrap: break-word;
    font-family: Montserrat, sans-serif;
  }

  .ant-form .ant-form-item-label > label {
    height: auto;
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    color: #000;
  }

  .ant-btn.ant-btn-link {
    color: #000;
    position: relative;
    border: none;
  }

  .ant-btn.ant-btn-round,
  .ant-btn.ant-btn-round-outline {
    border-radius: 50vh;
  }

  .ant-btn {
    line-height: 1;
    font-size: 16px;
    padding: 8px 16px;
    letter-spacing: 0;
    box-shadow: none;
    border-radius: 4px;
  }
`;

const InterviewModal = ({ selectedJob, modalNotifOpen, setModalNotifOpen }) => {
  return (
    <StyledModal
      title="Job Details"
      open={modalNotifOpen}
      onCancel={() => setModalNotifOpen(false)}
      footer={null}
    >
      <hr className="mb-4 border-t border-gray-300" />

      {selectedJob && (
        <div className="flex  flex-col gap-2 text-[#111313]">
          <p>
            <strong className="text-[20px]">Job Title:</strong>{" "}
            <span className="text-[18px] font-medium">
              {selectedJob.jobTitle}
            </span>
          </p>
          <p>
            <strong className="text-[20px]">Company Name:</strong>{" "}
            <span className="text-[18px] font-medium">
              {selectedJob.companyName}
            </span>
          </p>
          <p>
            <strong className="text-[20px]">Location:</strong>{" "}
            <span className="text-[18px] font-medium">
              {selectedJob.location}
            </span>
          </p>
          <p>
            <strong className="text-[20px]">Interview Date:</strong>{" "}
            <span className="text-[18px] font-medium text-red-700">
              {" "}
              {new Date(
                selectedJob.interview?.interviewDate
              ).toLocaleString()}{" "}
            </span>
          </p>
          <p>
            <strong className="text-[20px]">Interview Type:</strong>{" "}
            <span className="text-[18px] font-medium">
              {selectedJob.interview?.interviewType}
            </span>
          </p>
          <p>
            <strong className="text-[20px]">Description:</strong>{" "}
            <span className="text-[18px] font-medium">
              {selectedJob.jobDescription}
            </span>
          </p>
        </div>
      )}
    </StyledModal>
  );
};

export default InterviewModal;
