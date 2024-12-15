import React, { useState, useRef, useEffect } from "react";

const DropdownComponent = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Group by: None");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div
        className="dropdown-1 filter-input dropdown-single dropdown-show-arrow"
        onClick={toggleDropdown}
      >
        <div
          className={`dropdown-selector ${
            isDropdownVisible ? "dropdown-selector-focused" : ""
          }`}
        >
          <span className="dropdown-selection-search">
            <input
              type="search"
              autoComplete="off"
              className="dropdown-search-input"
              role="combobox"
              aria-haspopup="listbox"
              aria-owns="dropdown-list"
              aria-autocomplete="list"
              aria-controls="dropdown-list"
              aria-activedescendant="dropdown-item-0"
              readOnly
              unselectable="on"
              value=""
              style={{ opacity: "0" }}
              id="dropdown-input"
              aria-expanded={isDropdownVisible}
            />
          </span>
          <span
            className={`dropdown-selection-item ${
              isDropdownVisible ? "dropdown-selection-item-open" : ""
            }`}
            title={selectedItem}
          >
            {selectedItem}
          </span>
        </div>
        <span
          className="dropdown-arrow"
          unselectable="on"
          aria-hidden="true"
          style={{ userSelect: "none" }}
        >
          <span
            role="img"
            aria-label="down"
            className="dropdown-icon icon-down dropdown-suffix"
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

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div
          className="dropdown-list-container"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
          }}
        >
          <div className="dropdown-list-wrapper">
            <div
              className={`dropdown-list dropdown-placement ${
                isDropdownVisible ? "" : "dropdown-hidden"
              }`}
              style={{
                minWidth: "160px",
                width: "160px",
                left: "0px",
                top: "35px",
              }}
            >
              <div
                role="listbox"
                id="dropdown-list"
                style={{ height: "0px", width: "0px", overflow: "hidden" }}
              >
                <div
                  aria-label="Group by: None"
                  role="option"
                  id="dropdown-item-0"
                  aria-selected="true"
                >
                  none
                </div>
                <div
                  aria-label="Group by: Status"
                  role="option"
                  id="dropdown-item-1"
                  aria-selected="false"
                >
                  statusName
                </div>
              </div>
              <div
                className="dropdown-virtual-list"
                style={{ position: "relative" }}
              >
                <div
                  className="virtual-list-holder"
                  style={{
                    maxHeight: "256px",
                    overflowY: "hidden",
                    overflowAnchor: "none",
                  }}
                >
                  <div>
                    <div
                      className="virtual-list-holder-inner"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div
                        aria-selected={selectedItem === "Group by: None"}
                        className={`dropdown-item-option ${
                          selectedItem === "Group by: None"
                            ? "dropdown-item-select-active dropdown-item-option-selected"
                            : ""
                        }`}
                        title="Group by: None"
                        onClick={() => handleSelectItem("Group by: None")}
                      >
                        <div className="dropdown-item-content">
                          Group by: None
                        </div>
                        <span
                          className="dropdown-item-state"
                          unselectable="on"
                          aria-hidden="true"
                          style={{ userSelect: "none" }}
                        ></span>
                      </div>
                      <div
                        aria-selected={selectedItem === "Group by: Status"}
                        className={`dropdown-item-option ${
                          selectedItem === "Group by: Status"
                            ? "dropdown-item-select-active dropdown-item-option-selected"
                            : ""
                        }`}
                        title="Group by: Status"
                        onClick={() => handleSelectItem("Group by: Status")}
                      >
                        <div className="dropdown-item-content">
                          Group by: Status
                        </div>
                        <span
                          className="dropdown-item-state"
                          unselectable="on"
                          aria-hidden="true"
                          style={{ userSelect: "none" }}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
