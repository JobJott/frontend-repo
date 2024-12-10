import React from "react";
import { FiLoader } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="logo">
            <h1>
              <a href="/">
                JobJ
                <span>
                  <FiLoader />
                </span>
                tt
              </a>
            </h1>
          </div>

          <div className="footer-2">
            <div className="Company">
              <h4>Company</h4>
              <Link to="/about/">About us</Link>
              <a href="#">Blog</a>
              <a href="#">Contact us</a>
              <Link to="/FAQ/">How it Works</Link>
              <Link to="/testimonials/">Testimonials</Link>
            </div>

            <div className="support">
              <h4>Support</h4>
              <a href="#">Help center</a>
              <a href="#">Terms of service</a>
              <a href="#">Legal</a>
              <a href="#">Privacy policy</a>
              <a href="#">Status</a>
            </div>
            </div>

            <div className="socials">
              <h4>Follow us on</h4>
              <div className="social-icons">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
                <a href="#">
                  <FaFacebook />
                </a>
              </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©JobJott 2024.All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
