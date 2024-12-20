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
`;

const EditJobModal = ({ modalOpen, setModalOpen, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    URL: "",
    companyName: "",
    location: "",
    jobDescription: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Reset form data and errors when the modal is closed
    if (!modalOpen) {
      setFormData({
        jobTitle: "",
        URL: "",
        companyName: "",
        location: "",
        jobDescription: "",
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
    if (!formData.jobTitle.trim())
      newErrors.jobTitle = "Job title is required.";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required.";

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
        <h3 className="text-primary">Edit Job Post</h3>
        <form
          className="flex flex-col gap-6 w-full"
          id="job-post"
          onSubmit={handleSubmit}
        >
          {[
            {
              label: "Job Title",
              name: "jobTitle",
              type: "text",
              placeholder: "Job Title",
              id: "job-title",
            },
            {
              label: "URL for Original Posting",
              name: "URL",
              type: "text",
              placeholder: "URL for Original Posting",
              id: "URL",
            },
            {
              label: "Company Name",
              name: "companyName",
              type: "text",
              placeholder: "Company Name",
              id: "company-name",
            },
            {
              label: "Location",
              name: "location",
              type: "text",
              placeholder: "Location",
              id: "location",
            },
          ].map((input) => (
            <div className="space-y-2 w-full" key={input.name}>
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:text-neutral-400"
                htmlFor={input.id}
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
                id={input.id}
              />
              {errors[input.name] && (
                <span className="text-red-500 text-xs">
                  {errors[input.name]}
                </span>
              )}
            </div>
          ))}

          <div className="space-y-2 w-full">
            {/* Label for the input */}
            <label
              htmlFor="job-description"
              className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:text-neutral-400"
            >
              Job Description
            </label>

            {/* Input container */}
            <div className="rounded-md border border-input bg-background text-sm flex flex-col flex-auto placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-duotone disabled:cursor-not-allowed disabled:opacity-50">
              <textarea
                id="job-description"
                className="tiptap ProseMirror relative cursor-text w-full h-48 md:h-72 px-3 py-2 overflow-y-auto focus-visible:outline-none focus-visible:shadow-duotone "
                placeholder="Enter the job description here..."
                spellCheck="false"
                type="text"
                value={formData.jobDescription}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

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
              Save Job
            </button>
          </div>
        </form>
      </div>
    </StyledModal>
  );
};

export default EditJobModal;
