import React, { useState, useEffect } from "react";
import {
  Modal,
  Typography,
  Form,
  InputNumber,
  Select,
  Button,
  Spin,
} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "./AddSalaryRange.css";

const { Option } = Select;

const AddSalaryRange = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Add functionality for form submission if necessary
    console.log("Submitted");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch currencies from REST API
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();

        const currencySet = new Set();
        data.forEach((country) => {
          if (country.currencies) {
            Object.keys(country.currencies).forEach((currencyCode) => {
              const currencyName = country.currencies[currencyCode]?.name;
              if (currencyName) {
                currencySet.add(`${currencyName} (${currencyCode})`);
              }
            });
          }
        });

        const currencyArray = Array.from(currencySet).sort();
        setCurrencies(currencyArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching currencies:", error);
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <>
      <div
        className="compensation-add-salary-range--container"
        role="button"
        tabIndex={0}
        style={{ cursor: "pointer" }}
        onClick={showModal}
      >
        <Typography.Text
          className="compensation-add-salary-range"
          type="secondary"
        >
          <PlusCircleOutlined style={{ marginRight: 8 }} />
          Add Salary Range
        </Typography.Text>
      </div>

      <Modal
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="job-tracker-job-compensation-modal"
        width={520}
        maskClosable={true}
        destroyOnClose
        okText="Save"
        cancelText="Cancel"
        footer={null}
      >
        {/* Modal Body */}
        <div className="job-compensation-form-container">
          <h3>Edit Salary</h3>
          <Form
            id="job-compensation"
            layout="vertical"
            initialValues={{
              minSalary: "",
              maxSalary: "",
              currency: "USD",
              payPeriod: "Monthly",
            }}
          >
            {/* Min Salary */}
            <Form.Item
              label="Min. Salary"
              name="minSalary"
              rules={[{ message: "Please input min salary!" }]}
            >
              <InputNumber
                className="compensation-input"
                placeholder="Min. Salary"
                style={{ width: "100%" }}
              />
            </Form.Item>

            {/* Max Salary */}
            <Form.Item
              label="Max. Salary"
              name="maxSalary"
              rules={[{ message: "Please input max salary!" }]}
            >
              <InputNumber
                className="compensation-input"
                placeholder="Max. Salary"
                style={{ width: "100%" }}
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
                className="compensation-input compensation-currency-select"
                showSearch
                style={{ width: "100%" }}
                loading={loading}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                {loading ? (
                  <Option disabled>
                    <Spin />
                  </Option>
                ) : (
                  currencies.map((currency, index) => (
                    <Option key={index} value={currency}>
                      {currency}
                    </Option>
                  ))
                )}
              </Select>
            </Form.Item>

            {/* Salary Pay Period */}
            <Form.Item
              label="Salary Pay Period"
              name="payPeriod"
              rules={[{ message: "Please select pay period!" }]} // to make any of them required add required: true,
              className="full-width"
            >
              <Select placeholder="Select Pay Period">
                <Option value="Monthly">Monthly</Option>
                <Option value="Yearly">Yearly</Option>
                <Option value="Weekly">Weekly</Option>
              </Select>
            </Form.Item>

            <Form.Item className="full-width">
              <Button
                type="button"
                className="ant-btn ant-btn-link ant-btn-sm mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button type="submit" className="ant-btn ant-btn-primary">
                <span>Save</span>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddSalaryRange;
