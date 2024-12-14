import React, { useState } from "react";
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
  input {
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
    font-size: 14px;
  }

  button {
    font-family: "Montserrat", sans-serif !important;
    font-size: 14px;
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

const Newjob = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="newjob-container">
      {" "}
      <button
        type="button"
        className="filter-btn filter-btn-primary filter-btn-sm"
        onClick={() => setModalOpen(true)}
      >
        <span
          role="img"
          aria-label="plus-circle"
          className="newjob-icon newjob-icon-plus-circle"
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="plus-circle"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"></path>
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
          </svg>
        </span>
        <span>Add a New Job</span>
      </button>
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
          <h3 className="text-primary">Add a New Job Post</h3>
          <form className="flex flex-col gap-6 w-full" id="job-post">
            <div className="space-y-2 w-full">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:text-neutral-400"
                htmlFor=":rn:-form-item"
              >
                Job Title
              </label>
              <input
                className="flex h-9 w-full px-3 py-2 rounded-md border border-input bg-background text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-duotone disabled:cursor-not-allowed disabled:opacity-50"
                name="role"
                placeholder="Job Title"
                aria-describedby=":rn:-form-item-description"
                aria-invalid="false"
                id=":rn:-form-item"
                defaultValue=""
              />
            </div>

            <div className="space-y-2 w-full">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:text-neutral-400"
                htmlFor=":ro:-form-item"
              >
                URL for Original Posting
              </label>
              <input
                className="flex h-9 w-full px-3 py-2 rounded-md border border-input bg-background text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-duotone disabled:cursor-not-allowed disabled:opacity-50"
                name="url"
                placeholder="URL for Original Posting"
                aria-describedby=":ro:-form-item-description"
                aria-invalid="false"
                id=":ro:-form-item"
                defaultValue=""
              />
            </div>

            <div className="space-y-2 w-full">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:text-neutral-400"
                htmlFor=":rp:-form-item"
              >
                Company Name
              </label>
              <input
                className="flex h-9 w-full px-3 py-2 rounded-md border border-input bg-background text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-duotone disabled:cursor-not-allowed disabled:opacity-50"
                name="company_name"
                placeholder="Company Name"
                aria-describedby=":rp:-form-item-description"
                aria-invalid="false"
                id=":rp:-form-item"
                defaultValue=""
              />
            </div>

            <div className="space-y-2 w-full">
              <label
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:text-neutral-400"
                htmlFor=":rq:-form-item"
              >
                Location
              </label>
              <input
                className="flex h-9 w-full px-3 py-2 rounded-md border border-input bg-background text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-duotone disabled:cursor-not-allowed disabled:opacity-50"
                name="location"
                placeholder="Location"
                aria-describedby=":rq:-form-item-description"
                aria-invalid="false"
                id=":rq:-form-item"
                defaultValue=""
              />
            </div>

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
    </div>
  );
};

export default Newjob;
