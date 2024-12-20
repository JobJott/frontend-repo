import React from "react";
import { Empty, Button } from "antd";
import styled from "styled-components";

const StyledEmpty = styled(Empty)`
  .ant-empty-image {
    height: 60px;
  }

  .ant-empty-description div .p1 {
    font-size: 18px;
    font-weight: 600;
    color: #000;
    margin-bottom: 0;
  }

  .ant-empty-description div .p2 {
    max-width: 576px;
    margin: 0 auto 1.5rem;
    color: #333;
  }

  button {
    font-family: "Montserrat", sans-serif !important;
    font-size: 14px;
  }

  .ant-btn:not(.ant-btn-dangerous, [disabled]) {
    color: #111313;
    border-color: #111313;
  }

  .ant-empty .ant-btn {
    line-height: 1;
    font-size: 16px;
    padding: 8px 16px;
    letter-spacing: 0;
    box-shadow: none;
    border-radius: 4px;
  }

  .ant-btn .anticon {
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    font-weight: 500;
  }
  .ant-btn > .anticon {
    line-height: 1;
  }

  .addp1 {
    font-size: 18px;
    font-weight: 500;
    color: #000;
  }
`;

const Addjob = ({ setModalOpen }) => {
  return (
    <div>
      {" "}
      <div className="job-tracker-section false">
        <div className="job-tracker-table-container">
          <div className="table-column-wrapper">
            <div className="ant-empty ant-empty-normal">
              <StyledEmpty
                description={
                  <div>
                    <p className="p1">You don't have any saved jobs.</p>
                    <p className="p2">
                      Start by adding new job applications to track their
                      progress!
                    </p>
                  </div>
                }
              >
                {" "}
                <Button
                  type="button"
                  className="ant-btn ant-btn-default"
                  ant-click-animating-without-extra-node="false"
                  onClick={() => setModalOpen(true)}
                >
                  <span
                    role="img"
                    aria-label="plus-circle"
                    className="anticon anticon-plus-circle"
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
                  <span className="addp1">Add job</span>
                </Button>
              </StyledEmpty>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addjob;
