import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  Typography,
  Form,
  InputNumber,
  Select,
  Button,
  Spin,
  Tooltip,
  message,
} from "antd";
import { PlusCircleOutlined, EditOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "./AddSalaryRange.css";
import axios from "axios";

const { Option } = Select;

const AddSalaryRange = ({
  selectedJobId,
  loadingSalary,
  setLoadingSalary,
  fallbackSymbol = "¤",
}) => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [loadingCurrencies, setLoadingCurrencies] = useState(true);
  const [salaryRange, setSalaryRange] = useState(null); // To hold the fetched salary range
  const isFetchingRef = useRef(false);
  const [form] = Form.useForm(); // Ant Design form instance

  // Fetch salary range for selected job on mount or when selectedJobId changes
  useEffect(() => {
    if (selectedJobId) {
      fetchSalaryRange();
    }
  }, [selectedJobId]);

  // Fetch salary range for editing
  const fetchSalaryRange = async () => {
    try {
      if (isFetchingRef.current) return; // Prevent multiple fetches
      isFetchingRef.current = true;
      setLoadingSalary(true);

      const response = await axios.get(
        `http://localhost:8080/api/jobs/salary-range/${selectedJobId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authtoken")}`,
          },
        }
      );

      // If no salary range is found, the backend responds with a message
      if (response.data.message === "No salary details found for this job") {
        setSalaryRange(null); // No salary range found, so the user can add a new one
      } else {
        const salaryData = response.data.savedSalaryRange || response.data;
        setSalaryRange(salaryData); // Store the single salary range for rendering
        localStorage.setItem(
          `salaryRange_${selectedJobId}`,
          JSON.stringify(salaryData)
        );
      }
    } catch (error) {
      console.error("Failed to fetch salary range:", error);
      setSalaryRange(null);
    } finally {
      isFetchingRef.current = false; // Mark fetching as false
      setLoadingSalary(false);
    }
  };

  const handleSave = async (values) => {
    try {
      setLoadingSalary(true);
      const apiUrl = salaryRange
        ? `http://localhost:8080/api/jobs/salary-range/${selectedJobId}`
        : `http://localhost:8080/api/jobs/salary-range/add`;

      const method = salaryRange ? "put" : "post";
      const response = await axios[method](
        apiUrl,
        {
          jobId: selectedJobId,
          ...values,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authtoken")}`,
          },
        }
      );

      message.success(
        `Salary range ${salaryRange ? "updated" : "added"} successfully!`
      );
      // Update state and re-fetch to ensure consistency
      setSalaryRange(response.data.savedSalaryRange || response.data);
      fetchSalaryRange();
    } catch (error) {
      console.error("Failed to save salary range:", error);
      message.error("Failed to save salary range.");
    } finally {
      setLoadingSalary(false);
      setIsAddModalVisible(false);
      setIsEditModalVisible(false);
    }
  };

  useEffect(() => {
    // Fetch currencies from REST API
    const fetchCurrencies = async () => {
      setLoadingCurrencies(true);
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=currencies"
        );
        const data = await response.json();

        const currencyMap = [];
        const uniqueCurrencies = new Set();

        data.forEach((country) => {
          if (country.currencies) {
            Object.keys(country.currencies).forEach((currencyCode) => {
              const currencySymbol = country.currencies[currencyCode]?.symbol;
              const currencyName = country.currencies[currencyCode]?.name;

              // Add currency only if it hasn't been added before
              if (
                currencyName &&
                currencySymbol &&
                !uniqueCurrencies.has(currencyName)
              ) {
                uniqueCurrencies.add(currencyName);
                currencyMap.push({
                  name: currencyName,
                  symbol: currencySymbol,
                  code: currencyCode,
                });
              }
            });
          }
        });

        const sortedCurrencies = currencyMap.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setCurrencies(sortedCurrencies);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      } finally {
        setLoadingCurrencies(false);
      }
    };

    fetchCurrencies();
  }, []);

  const initializeForm = () => {
    form.setFieldsValue({
      minSalary: salaryRange?.minSalary,
      maxSalary: salaryRange?.maxSalary,
      currency: salaryRange?.currency,
      payPeriod: salaryRange?.payPeriod,
    });
  };

  useEffect(() => {
    if (isAddModalVisible || isEditModalVisible) {
      initializeForm();
    }
  }, [salaryRange, form, isAddModalVisible, isEditModalVisible]);

  const showAddModal = () => {
    setIsAddModalVisible(true);
  };

  // Fetch salary range when the modal is opened for editing
  const showEditModal = () => {
    setIsEditModalVisible(true);
    fetchSalaryRange();
  };

  const handleCancel = () => {
    setIsAddModalVisible(false);
    setIsEditModalVisible(false);
    form.resetFields();
  };

  // Function to format numbers with commas
  const formatNumber = (value) => {
    if (value == null || isNaN(value)) return value;
    return Number(value)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const extractCurrencySymbol = (currencyName) => {
    const matchedCurrency = currencies.find(
      (currency) => currency.name === currencyName
    );
    return matchedCurrency ? matchedCurrency.symbol : fallbackSymbol; // Fallback symbol
  };

  const getPayPeriodAbbreviation = (payPeriod) => {
    switch (payPeriod) {
      case "Monthly":
        return "mth";
      case "Yearly":
        return "yr";
      case "Weekly":
        return "wk";
      default:
        return payPeriod?.substring(0, 3).toLowerCase(); // Fallback for any other values
    }
  };

  return (
    <>
      <div
        className={
          salaryRange
            ? "compensation-edit-salary-range--container"
            : "compensation-add-salary-range--container"
        }
        role="button"
        tabIndex={0}
        style={{ cursor: "pointer" }}
        onClick={salaryRange ? showEditModal : showAddModal}
      >
        {salaryRange ? (
          <div className="read-only-row start">
            <span>
              <div>
                <Typography.Title level={2} className="compensation-header">
                  {extractCurrencySymbol(salaryRange.currency)}
                  {formatNumber(salaryRange.minSalary)} -{" "}
                  {extractCurrencySymbol(salaryRange.currency)}
                  {formatNumber(salaryRange.maxSalary)}
                </Typography.Title>
                <span>/{getPayPeriodAbbreviation(salaryRange.payPeriod)}</span>
              </div>
            </span>

            <div className="read-only-row-btn-container start">
              <Tooltip
                title="Edit Salary Range"
                className="font-medium font-sans"
              >
                <Button
                  aria-label="Edit Salary Range"
                  type="button"
                  size="large"
                  icon={<EditOutlined />}
                  onClick={showEditModal}
                  className="edit-btn gold-text"
                />
              </Tooltip>
            </div>
          </div>
        ) : (
          <Typography.Text
            className="compensation-add-salary-range"
            type="secondary"
          >
            <PlusCircleOutlined style={{ marginRight: 8 }} />
            Add Salary Range
          </Typography.Text>
        )}
      </div>

      <Modal
        open={isAddModalVisible || isEditModalVisible}
        onCancel={handleCancel}
        className="job-tracker-job-compensation-modal"
        width={520}
        maskClosable={true}
        destroyOnClose
        footer={null}
      >
        {/* Modal Body */}
        <div className="job-compensation-form-container">
          <h3>{isEditModalVisible ? "Edit Salary" : "Add Salary"}</h3>
          <Form
            form={form}
            onFinish={handleSave}
            id="job-compensation"
            layout="vertical"
            initialValues={{
              minSalary: salaryRange?.minSalary,
              maxSalary: salaryRange?.maxSalary,
              currency: salaryRange?.currency,
              payPeriod: salaryRange?.payPeriod,
            }}
          >
            {/* Min Salary */}
            <Form.Item
              label="Min. Salary"
              name="minSalary"
              rules={[{ required: true, message: "Please input min salary!" }]}
            >
              <InputNumber
                className="compensation-input text-[#111313] font-medium"
                placeholder="Min. Salary"
                style={{ width: "100%" }}
                formatter={formatNumber}
              />
            </Form.Item>

            {/* Max Salary */}
            <Form.Item
              label="Max. Salary"
              name="maxSalary"
              rules={[{ required: true, message: "Please input max salary!" }]}
            >
              <InputNumber
                className="compensation-input text-[#111313] font-medium"
                placeholder="Max. Salary"
                style={{ width: "100%" }}
                formatter={formatNumber}
              />
            </Form.Item>

            {/* Currency */}
            <Form.Item
              label="Currency"
              name="currency"
              rules={[{ message: "Please select a currency!" }]}
              className="full-width"
            >
              <Select
                placeholder="Select Currency"
                className="compensation-input compensation-currency-select bgfm"
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
              >
                {loadingCurrencies ? (
                  <Option disabled>
                    <Spin />
                  </Option>
                ) : (
                  currencies.map((currency, index) => (
                    <Option key={index} value={currency.name}>
                      {currency.name}
                    </Option>
                  ))
                )}
              </Select>
            </Form.Item>

            {/* Salary Pay Period */}
            <Form.Item
              label="Salary Pay Period"
              name="payPeriod"
              rules={[{ required: true, message: "Please select pay period!" }]}
              className="full-width"
            >
              <Select placeholder="Select Pay Period" className="bgfm">
                <Option value="Monthly">Monthly</Option>
                <Option value="Yearly">Yearly</Option>
                <Option value="Weekly">Weekly</Option>
              </Select>
            </Form.Item>

            <Form.Item className="full-width">
              <Button
                type="button"
                className="ant-btn ant-btn-link ant-btn-sm mr-1"
                onClick={handleCancel}
              >
                <span>Cancel</span>
              </Button>
              <Button
                type="submit"
                htmlType="submit"
                className="ant-btn ant-btn-primary"
                loading={loadingSalary}
              >
                <span> {salaryRange ? "Update" : "Save"}</span>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddSalaryRange;
