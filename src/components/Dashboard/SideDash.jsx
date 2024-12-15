import React from "react";
import { FiLoader } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { SideDashData, SideDashData2 } from "./Sidedash/SidedashData";
import chevronCollapse from "../../assets/chevronCollapse.svg";

const SideDash = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-container">
        <div className="sidebar-container-wrap">
          <div className="side-nav-header">
            <div className="side-nav-content">
              <div className="content-text">
                <h1>
                  JobJ
                  <span>
                    <FiLoader />
                  </span>
                  tt
                </h1>
              </div>
              <button className="toggle-btn" onClick={toggleSidebar}>
                <img
                  src={chevronCollapse}
                  style={{ color: "white" }}
                  className={`chevron ${isOpen ? "" : "rotate"}`}
                />
              </button>
            </div>
          </div>

          <div className="side-nav-menu">
            {SideDashData.map((item) => (
              <div key={item.id} className="menu-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  {({ isActive }) => (
                    <div className="menu-content">
                      <span
                        className={`sidebar-icon ${isActive ? "selected" : ""}`}
                      >
                        {item.icon}
                      </span>
                      {isOpen && (
                        <span
                          className={`sidebar-title ${
                            isActive ? "selected" : ""
                          }`}
                        >
                          {item.title}
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              </div>
            ))}
          </div>

          <div className="side-nav-footer">
            {SideDashData2.map((item) => (
              <div key={item.id} className="menu-item">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  {({ isActive }) => (
                    <div className="menu-content">
                      <span
                        className={`sidebar-icon ${isActive ? "selected" : ""}`}
                      >
                        {item.icon}
                      </span>
                      {isOpen && (
                        <span
                          className={`sidebar-title ${
                            isActive ? "selected" : ""
                          }`}
                        >
                          {item.title}
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideDash;
