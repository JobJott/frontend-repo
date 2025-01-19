import React from "react";
import { FiLoader } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { SideDashData, SideDashData2 } from "./Sidedash/SidedashData";
import chevronCollapse from "../../assets/chevronCollapse.svg";
import { RadarOutlined } from "@mui/icons-material";

const SideDash = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-container">
        <div className="sidebar-container-wrap">
          <div className="side-nav-header">
            <div className="side-nav-content w-full bg-[#99BFBF] rounded-xl p-2">
              <div className="content-text">
                <h1 className="!tracking-normal">
                  J
                  <span>
                    {/* <FiLoader /> */}
                    <RadarOutlined />
                  </span>
                  bJ
                  <span>
                    {/* <FiLoader /> */}
                    <RadarOutlined />
                  </span>
                  tt
                </h1>
              </div>
              <button className="toggle-btn !top-0" onClick={toggleSidebar}>
                <img
                  src={chevronCollapse}
                  style={{ color: "white" }}
                  className={`chevron ${isOpen ? "" : "rotate"}`}
                />
              </button>
            </div>
          </div>

          <div className="side-nav-menu !pt-10 !gap-8">
            {SideDashData.map((item) => (
              <div
                key={item.id}
                className={`side-nav-menu-item ${
                  isOpen ? "" : "flex items-center justify-center"
                }`}
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  {({ isActive }) => (
                    <div className="menu-content gap-3">
                      <span
                        className={`sidebar-icon ${isActive ? "selected" : ""}`}
                      >
                        {item.icon}
                      </span>
                      {isOpen && (
                        <span
                          className={`sidebar-title !ml-0 ${
                            isActive ? "selected" : ""
                          }`}
                        >
                          {item.title}
                        </span>
                      )}
                      {!isOpen && (
                        <div
                          className={`side-nav-item-label ${
                            isActive ? "selected" : ""
                          }`}
                          // style={{ top: "92px" }}
                        >
                          {item.title}
                        </div>
                      )}
                    </div>
                  )}
                </NavLink>
              </div>
            ))}
          </div>

          <div className="side-nav-footer !pt-10 mb-6 !gap-8">
            {SideDashData2.map((item) => (
              <div
                key={item.id}
                className={`side-nav-menu-item ${
                  isOpen ? "" : "flex items-center justify-center"
                }`}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  {({ isActive }) => (
                    <div className="menu-content gap-3">
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
                      {!isOpen && (
                        <div
                          className={`side-nav-item-label ${
                            isActive ? "selected" : ""
                          }`}
                          // style={{ top: "92px" }}
                        >
                          {item.title}
                        </div>
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
