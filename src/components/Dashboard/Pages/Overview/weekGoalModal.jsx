import React, { useState, useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Button,
  Spin,
} from "antd";
import { createGoal, updateGoal } from "../../../../utils/api/goalService";
import { fetchCurrencies } from "../../../../utils/api/currencyService";
import styled from "styled-components";
import dayjs from "dayjs";

const { Option } = Select;

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
    padding: 1.5rem 2.25rem 2.25rem;
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

const WeekGoalModal = ({
  isVisible,
  setIsVisible,
  handleSave,
  inputGoal,
  setInputGoal,
}) => {
  return (
    <StyledModal
      title="Application Goal 🚀"
      open={isVisible}
      onCancel={() => setIsVisible(false)}
      className="application-modal"
      footer={[
        <Button key="cancel" onClick={() => setIsVisible(false)}>
          Cancel
        </Button>,
        <Button
          key="save"
          type="primary"
          onClick={handleSave}
          disabled={inputGoal <= 0}
          className="bg-[#111313] hover:!bg-[#111313]"
        >
          Save
        </Button>,
      ]}
    >
      <p id="application-goal-description" className="font-medium">
        Set a goal on the number of applications you would like to send weekly
        (Monday-Sunday).
      </p>
      <div className="flex items-center gap-4 justify-center">
        <Button
          type="ghost"
          onClick={() => setInputGoal((prev) => Math.max(prev - 1, 1))}
          className="border border-[#dcdcdc] p-2 w-[38px] h-[38px] flex justify-center items-center hover:bg-[#0051491a]"
        >
          <span className="align-middle">-</span>
        </Button>
        <input
          type="number"
          value={inputGoal}
          onChange={(e) => setInputGoal(Number(e.target.value))}
          min={1}
          max={100}
          className="ant-input border border-[#dcdcdc] p-2 w-[145px] h-[38px] flex justify-center items-center"
        />
        <Button
          type="ghost"
          onClick={() => setInputGoal((prev) => Math.min(prev + 1, 100))}
          className="border border-[#dcdcdc] p-2 w-[38px] h-[38px] flex justify-center items-center hover:bg-[#0051491a]"
        >
          +
        </Button>
      </div>
    </StyledModal>
  );
};

export default WeekGoalModal;
