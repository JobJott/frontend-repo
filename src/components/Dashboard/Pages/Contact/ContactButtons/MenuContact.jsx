import React, { useState, useRef, useEffect } from "react";

const MenuContact = () => {
  const [isMenuContactOpen, setIsMenuContactOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenuContact = () => {
    setIsMenuContactOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuContactOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="menu-container" ref={dropdownRef}>
      {" "}
      <button
        type="button"
        className={`filter-btn filter-btn-default filter-btn-sm filter-dropdown-trigger ${
          isMenuContactOpen ? "filter-dropdown-open" : ""
        }`}
        onClick={toggleMenuContact}
      >
        <span role="img" aria-label="menu" className="menuicon menuicon-menu">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="menu"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </span>
        <span>Menu</span>
      </button>
      {isMenuContactOpen && (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          {" "}
          <div>
            <div
              className="filter-dropdown filter-dropdown-placement-bottomLeft"
              style={{ minWidth: "94.6562px", left: "0px", top: "35px" }}
            >
              <ul
                className="filter-dropdown-menu filter-dropdown-menu-root filter-dropdown-menu-vertical filter-dropdown-menu-light"
                role="menu"
                tabIndex="0"
                data-menu-list="true"
              >
                <li
                  className="filter-dropdown-menu-item"
                  role="menuitem"
                  tabIndex="-1"
                  data-menu-id="download-data"
                >
                  <span
                    role="img"
                    aria-label="download"
                    className="dropdown-menuicon dropdown-menuicon-download filter-dropdown-menu-item-icon"
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="download"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                    </svg>
                  </span>
                  <span className="filter-dropdown-menu-title-content">
                    Download Data
                  </span>
                </li>
              </ul>
              <div aria-hidden="true" style={{ display: "none" }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuContact;