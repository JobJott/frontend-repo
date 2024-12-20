import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0 !important;
    border-radius: 0px;
  }

  .ant-modal-body {
    padding: 2rem 2.5rem;
  }

  @media (min-width: 480px) {
    h3,
    .h3 {
      font-size: 26px;
    }
  }

  .text-primary {
    color: #111313;
  }

  .custom-modal .ant-modal-body h3 {
    font-size: 24px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    text-transform: none;
    letter-spacing: 0;
    font-weight: 600;
    line-height: 1.2;
    font-family: "Montserrat", sans-serif !important;
  }

  label,
  input,
  textarea,
  button {
    font-family: "Montserrat", sans-serif !important;
    font-size: 14px;
  }

  .bg-background {
    background-color: hsl(var(--background));
  }
  .border-input {
    border-color: hsl(var(--input));
  }
  .rounded-md {
    border-radius: calc(var(--radius) - 2px);
  }

  .ProseMirror {
    word-wrap: break-word;
    white-space: pre-wrap;
    white-space: break-spaces;
    -webkit-font-variant-ligatures: none;
    font-variant-ligatures: none;
    font-feature-settings: "liga" 0;
  }

  .ProseMirror {
    position: relative;
  }

  textarea {
    color: #000;
  }

  .shadow-primary {
    --tw-shadow-color: hsl(var(--primary));
    --tw-shadow: var(--tw-shadow-colored);
  }

  .text-primary-foreground {
    color: hsl(var(--primary-foreground));
  }

  .bg-primary {
    background-color: hsl(var(--primary));
  }
`;

const AntContactModal = ({ modalOpen, setModalOpen, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    email: "",
    linkedIn: "",
    twitter: "",
    location: "",
    phoneNumber: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Reset form data and errors when the modal is closed
    if (!modalOpen) {
      setFormData({
        firstName: "",
        lastName: "",
        jobTitle: "",
        companyName: "",
        email: "",
        linkedIn: "",
        twitter: "",
        location: "",
        phoneNumber: "",
      });
      setErrors({});
    }
  }, [modalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (validateForm()) {
      onFormSubmit(formData); // Save the data and pass it to the mainboard
      setModalOpen(false); // Close the modal after saving
    }
  };

  return (
    <StyledModal
      centered
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      footer={null}
      className="custom-modal !max-w-[80%] !w-fit "
      style={{
        minWidth: "300px",
        maxWidth: "80% !important",
        width: "fit-content !important",
        top: "16px",
      }}
    >
      <div className="flex flex-col gap-3 w-96 md:w-[520px]">
        <h3 className="text-primary">Add a New Contact</h3>
        <form
          className="ant-input phantom-input with-border"
          id="job-post"
          onSubmit={handleSubmit}
        >
          {[
            {
              label: "First Name",
              name: "firstName",
              type: "text",
              placeholder: "First Name",
            },
            {
                label: "Last Name",
                name: "lastName",
                type: "text",
                placeholder: "Last Name",
            },
            {
                label: "Job Title",
                name: "jobTitle",
                type: "text",
                placeholder: "Job Title",
            },
            {
              label: "Company Name",
              name: "companyName",
              type: "text",
              placeholder: "Company Name",
            },
            {
              label: "Email",
              name: "email",
              type: "text",
              placeholder: "Email Address",
            },
            {
              label: "LinkedIn",
              name: "linkedIn",
              type: "text",
              placeholder: "LinkedIn Profile",
            },
            {
                label: "Twitter",
                name: "twitter",
                type: "text",
                placeholder: "Twitter Handle URL",
            },
            {
                label: "Location",
                name: "location",
                type: "text",
                placeholder: "Location",
            },
            {
                label: "Phone Number",
                name: "phoneNumber",
                type: "text",
                placeholder: "Phone",
            },
          ].map((input) => (
            <div className="space-y-2 w-full" key={input.name}>
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:text-neutral-400"
                htmlFor=":rn:-form-item"
              >
                {input.label}
              </label>
              <input
                className="flex h-9 w-full px-3 py-2 rounded-md border border-input bg-background text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-duotone disabled:cursor-not-allowed disabled:opacity-50"
                aria-describedby=":rn:-form-item-description"
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={formData[input.name]}
                onChange={handleChange}
                aria-invalid="false"
                id=":rn:-form-item"
              />
              {errors[input.name] && (
                <span className="text-red-500 text-xs">
                  {errors[input.name]}
                </span>
              )}
            </div>
          ))}

          <div className="flex items-center gap-2 justify-end">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-75 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md"
              type="button"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all duration-75 bg-primary text-primary-foreground shadow-primary hover:bg-primary/90 focus-visible:ring-primary h-10 px-4 py-2 rounded-md"
              type="submit"
            >
              Save Contact
            </button>
          </div>
        </form>
      </div>
    </StyledModal>
  );
};

export default AntContactModal;