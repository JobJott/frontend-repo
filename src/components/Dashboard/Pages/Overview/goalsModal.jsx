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

  .ant-btn.ant-btn-secondary {
    background-color: #99bfbf;
    border: 1px solid #99bfbf;
    color: #000;
    border: none;
  }

  .ant-select-selection-item {
    flex: 1;
    overflow: hidden;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #000;
    font-weight: 500;
  }
`;

const GoalsModal = ({
  goalModalOpen,
  setGoalModalOpen,
  goal,
  selectedGoal,
  refreshGoals,
  currencies,
  setCurrencies,
}) => {
  const [form] = Form.useForm();
  const [loadingCurrencies, setLoadingCurrencies] = useState(false);

  // Function to format numbers with commas
  const formatNumber = (value) => {
    if (value == null || isNaN(value)) return value;
    return Number(value)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Fetch currencies and update state
  useEffect(() => {
    const getCurrencies = async () => {
      setLoadingCurrencies(true);
      try {
        const currencyList = await fetchCurrencies();
        setCurrencies(currencyList);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      } finally {
        setLoadingCurrencies(false);
      }
    };

    getCurrencies();
  }, []);

  const initializeForm = () => {
    if (goal) {
      form.setFieldsValue({
        targetGoal: goal?.targetGoal,
        targetTitle: goal?.targetTitle,
        targetDate: goal?.targetDate ? dayjs(goal.targetDate) : null, // Convert to dayjs
        salaryMin: goal?.salaryMin,
        salaryMax: goal?.salaryMax,
        currency: goal?.currency,
      });
    }
  };

  useEffect(() => {
    // Check if modal is open and goal is set before initializing the form
    if (goalModalOpen && goal) {
      initializeForm();
    }
  }, [goalModalOpen, goal]);

  const handleFinish = async (values) => {
    try {
      if (selectedGoal) {
        await updateGoal(selectedGoal, values);
      } else {
        await createGoal(values);
      }
      setGoalModalOpen(false);
      refreshGoals();
    } catch (error) {
      console.error("Failed to save goal:", error);
    }
  };

  return (
    <StyledModal
      centered
      open={goalModalOpen}
      title={selectedGoal ? "Edit Goal" : "Add Goal"}
      onCancel={() => setGoalModalOpen(false)}
      footer={null}
      className="ant-modal goals-modal mt-16 mb-5"
    >
      <div className="job-post-form-container">
        <Form
          form={form}
          name="basic"
          layout="vertical"
          onFinish={handleFinish}
        >
          <Form.Item
            label="Next Career Goal"
            name="targetGoal"
            className="font-sans"
          >
            <Select
              placeholder="What's Next?"
              className="font-sans text-[#111313] text-[14px]"
            >
              <Option
                value="Land a new job in the same career path"
                className="font-sans text-[#111313] font-medium"
              >
                Land a new job in the same career path
              </Option>
              <Option
                value="Land a new job in a new career path"
                className="font-sans text-[#111313] font-medium"
              >
                Land a new job in a new career path
              </Option>
              <Option
                value="Explore new career paths"
                className="font-sans text-[#111313] font-medium"
              >
                Explore new career paths
              </Option>
            </Select>
          </Form.Item>
          <Form.Item label="Target Title" name="targetTitle">
            <Input
              placeholder="Enter your target job title"
              className="font-sans text-[#111313] font-medium"
            />
          </Form.Item>
          <Form.Item label="Target Date" name="targetDate">
            <DatePicker
              style={{ width: "100%" }}
              className="font-sans text-[#111313] font-medium"
            />
          </Form.Item>
          <Form.Item label="Salary Range" style={{ marginBottom: 0 }}>
            <Form.Item
              name="salaryMin"
              rules={[
                {
                  type: "number",
                  min: 0,
                  message: "Min salary must be a positive number!",
                },
              ]}
              style={{ display: "inline-block", width: "48%" }}
            >
              <InputNumber
                min={0}
                placeholder="Min Salary"
                style={{ width: "100%" }}
                formatter={formatNumber}
                className="font-sans text-[#111313] font-medium"
              />
            </Form.Item>
            <span
              style={{
                display: "inline-block",
                width: "4%",
                textAlign: "center",
              }}
            >
              -
            </span>
            <Form.Item
              name="salaryMax"
              style={{ display: "inline-block", width: "48%" }}
              rules={[
                {
                  type: "number",
                  min: 0,
                  message: "Max salary must be a positive number!",
                },
              ]}
            >
              <InputNumber
                min={0}
                placeholder="Max Salary"
                style={{ width: "100%" }}
                formatter={formatNumber}
                className="font-sans text-[#111313] font-medium"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Currency" name="currency">
            <Select
              placeholder="Select Currency"
              showSearch
              style={{ width: "100%" }}
              loading={loadingCurrencies}
              optionFilterProp="children"
              filterOption={(input, option) =>
                option?.children
                  ?.toString()
                  ?.toLowerCase()
                  ?.includes(input.toLowerCase())
              }
              className="font-sans text-[#111313] font-medium"
            >
              {loadingCurrencies ? (
                <Option disabled>
                  <Spin />
                </Option>
              ) : (
                currencies.map((currency, index) => (
                  <Option
                    key={index}
                    value={currency.name || currency.code} // Ensure a valid value
                    className="font-sans text-[#111313] font-medium"
                  >
                    {currency.name}
                  </Option>
                ))
              )}
            </Select>
          </Form.Item>
          <Form.Item className="w-full text-right">
            <Button
              type="primary"
              htmlType="submit"
              className="ant-btn ant-btn-round ant-btn-link bg-transparent hover:!bg-[#0051491a] hover:!text-[#000] font-medium"
              onClick={() => setGoalModalOpen(false)}
            >
              <span>Cancel</span>
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="ant-btn ant-btn-round ant-btn-primary ml-2 ant-btn-secondary hover:!bg-[#99bfbf] hover:!text-[#000] font-medium"
            >
              {selectedGoal ? "Update Goal" : "Add Goal"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </StyledModal>
  );
};

export default GoalsModal;
