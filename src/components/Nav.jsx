import "../styles/Nav.css";
import arrowdown from "../assets/chevron-arrow-down.svg";
import divider from "../assets/Divider.svg";
import Logo from "../assets/jobjott1.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar-header">
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            <a href="/" className="menu-links">
              <p className="menu-title">Job Application Tracker</p>
            </a>
            <a href="/" className="menu-links">
              <p className="menu-title">
                Resources
                <span className="dropdown-icon">
                  <img src={arrowdown} alt="arrow-down" />
                </span>
              </p>
            </a>
            <a href="/" className="menu-links">
              <p className="menu-title">
                More
                <span className="dropdown-icon">
                  <img src={arrowdown} alt="arrow-down" />
                </span>
              </p>
            </a>
          </div>
        </div>

        <div className="navbar-right">
          <Link to="/auth/signin">
            <button className="cta-button">
              <span className="box">Log in</span>
            </button>
          </Link>
          <img src={divider} alt="" />
          <Link to="/auth/signup">
            <button className="cta-button-2">
              <span className="box-2">Sign up</span>
            </button>
          </Link>
        </div>

        
        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </>
          )}
        </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="/" className="mobile-menu-link">
            Job Application Tracker
          </a>
          <a href="/" className="mobile-menu-link">
            Resources
          </a>
          <a href="/" className="mobile-menu-link">
            More
          </a>
          <Link to="/auth/signin" className="mobile-menu-link">
            Log in
          </Link>
          <Link to="/auth/signup" className="mobile-menu-link">
            Sign up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
