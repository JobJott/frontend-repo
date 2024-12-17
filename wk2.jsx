{/* <div
  role="dialog"
  aria-modal="true"
  class="ant-modal job-tracker-job-compensation-modal"
  style="width: 520px; transform-origin: 978.219px -50px;"
>
  <div
    tabindex="0"
    style="width: 0px; height: 0px; overflow: hidden; outline: none;"
  ></div>
  <div class="ant-modal-content">
    <button type="button" aria-label="Close" class="ant-modal-close">
      <span class="ant-modal-close-x">
        <span
          role="img"
          aria-label="close"
          class="anticon anticon-close ant-modal-close-icon"
        >
          <svg
            fill-rule="evenodd"
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="close"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"></path>
          </svg>
        </span>
      </span>
    </button>
    <div class="ant-modal-body">
      <div class="job-compensation-form-container">
        <h3>Edit Salary</h3>
        <form id="job-compensation" class="ant-form ant-form-vertical">
          <div class="ant-form-item ant-form-item-has-success">
            <div class="ant-row ant-form-item-row">
              <div class="ant-col ant-form-item-label">
                <label
                  for="job-compensation_min_salary"
                  class=""
                  title="Min. Salary"
                >
                  Min. Salary
                </label>
              </div>
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <div class="ant-input-number ant-input-number-in-form-item ant-input-number-status-success compensation-input phantom-input with-border">
                      <div class="ant-input-number-handler-wrap">
                        <span
                          unselectable="on"
                          role="button"
                          aria-label="Increase Value"
                          aria-disabled="false"
                          class="ant-input-number-handler ant-input-number-handler-up"
                        >
                          <span
                            role="img"
                            aria-label="up"
                            class="anticon anticon-up ant-input-number-handler-up-inner"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="up"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                            </svg>
                          </span>
                        </span>
                        <span
                          unselectable="on"
                          role="button"
                          aria-label="Decrease Value"
                          aria-disabled="false"
                          class="ant-input-number-handler ant-input-number-handler-down"
                        >
                          <span
                            role="img"
                            aria-label="down"
                            class="anticon anticon-down ant-input-number-handler-down-inner"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="down"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div class="ant-input-number-input-wrap">
                        <input
                          autocomplete="off"
                          role="spinbutton"
                          step="1"
                          id="job-compensation_min_salary"
                          class="ant-input-number-input"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-form-item ant-form-item-has-success">
            <div class="ant-row ant-form-item-row">
              <div class="ant-col ant-form-item-label">
                <label
                  for="job-compensation_max_salary"
                  class=""
                  title="Max. Salary"
                >
                  Max. Salary
                </label>
              </div>
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <div class="ant-input-number ant-input-number-in-form-item ant-input-number-status-success compensation-input phantom-input with-border">
                      <div class="ant-input-number-handler-wrap">
                        <span
                          unselectable="on"
                          role="button"
                          aria-label="Increase Value"
                          aria-disabled="false"
                          class="ant-input-number-handler ant-input-number-handler-up"
                        >
                          <span
                            role="img"
                            aria-label="up"
                            class="anticon anticon-up ant-input-number-handler-up-inner"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="up"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
                            </svg>
                          </span>
                        </span>
                        <span
                          unselectable="on"
                          role="button"
                          aria-label="Decrease Value"
                          aria-disabled="false"
                          class="ant-input-number-handler ant-input-number-handler-down"
                        >
                          <span
                            role="img"
                            aria-label="down"
                            class="anticon anticon-down ant-input-number-handler-down-inner"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="down"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div class="ant-input-number-input-wrap">
                        <input
                          autocomplete="off"
                          role="spinbutton"
                          step="1"
                          id="job-compensation_max_salary"
                          class="ant-input-number-input"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-form-item full-width">
            <div class="ant-row ant-form-item-row">
              <div class="ant-col ant-form-item-label">
                <label
                  for="job-compensation_salary_currency"
                  class=""
                  title="Currency"
                >
                  Currency
                </label>
              </div>
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <div class="ant-select ant-select-in-form-item compensation-input compensation-currency-select ant-select-single ant-select-show-arrow ant-select-show-search">
                      <div class="ant-select-selector">
                        <span class="ant-select-selection-search">
                          <input
                            type="search"
                            id="job-compensation_salary_currency"
                            autocomplete="off"
                            class="ant-select-selection-search-input"
                            role="combobox"
                            aria-haspopup="listbox"
                            aria-owns="job-compensation_salary_currency_list"
                            aria-autocomplete="list"
                            aria-controls="job-compensation_salary_currency_list"
                            aria-activedescendant="job-compensation_salary_currency_list_0"
                            value=""
                          />
                        </span>
                        <span
                          class="ant-select-selection-item"
                          title="US Dollar"
                        >
                          US Dollar
                        </span>
                      </div>
                      <span
                        class="ant-select-arrow"
                        unselectable="on"
                        aria-hidden="true"
                        style="user-select: none;"
                      >
                        <span
                          role="img"
                          aria-label="down"
                          class="anticon anticon-down ant-select-suffix"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-form-item full-width compensation-input">
            <div class="ant-row ant-form-item-row">
              <div class="ant-col ant-form-item-label">
                <label
                  for="job-compensation_salary_pay_period"
                  class=""
                  title=""
                >
                  <span style="position: relative; top: 1px;">
                    Salary Pay Period
                    <span
                      role="img"
                      aria-label="question-circle"
                      tabindex="-1"
                      class="anticon anticon-question-circle muted-text"
                      style="position: relative; top: 1px; margin-left: 4px;"
                    >
                      <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="question-circle"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"></path>
                      </svg>
                    </span>
                  </span>
                </label>
              </div>
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <div class="ant-select ant-select-in-form-item ant-select-single ant-select-allow-clear ant-select-show-arrow">
                      <div class="ant-select-selector">
                        <span class="ant-select-selection-search">
                          <input
                            type="search"
                            id="job-compensation_salary_pay_period"
                            autocomplete="off"
                            class="ant-select-selection-search-input"
                            role="combobox"
                            aria-haspopup="listbox"
                            aria-owns="job-compensation_salary_pay_period_list"
                            aria-autocomplete="list"
                            aria-controls="job-compensation_salary_pay_period_list"
                            aria-activedescendant="job-compensation_salary_pay_period_list_0"
                            readonly=""
                            unselectable="on"
                            value=""
                            style="opacity: 0;"
                          />
                        </span>
                        <span class="ant-select-selection-placeholder">
                          Select a Pay Period
                        </span>
                      </div>
                      <span
                        class="ant-select-arrow"
                        unselectable="on"
                        aria-hidden="true"
                        style="user-select: none;"
                      >
                        <span
                          role="img"
                          aria-label="down"
                          class="anticon anticon-down ant-select-suffix"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-form-item full-width">
            <div class="ant-row ant-form-item-row">
              <div class="ant-col ant-form-item-control">
                <div class="ant-form-item-control-input">
                  <div class="ant-form-item-control-input-content">
                    <button
                      type="button"
                      class="ant-btn ant-btn-link ant-btn-sm mr-1"
                    >
                      <span>Cancel</span>
                    </button>
                    <button type="submit" class="ant-btn ant-btn-primary">
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div
    tabindex="0"
    style="width: 0px; height: 0px; overflow: hidden; outline: none;"
  ></div>
</div>; */}
