import React from "react";
import { FiLoader } from "react-icons/fi";
import send from "../assets/send.png"
import { Link } from "react-router-dom";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-1">
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

            <div className="copyright">
              <p>Copyright © 2024 JobJott ltd.</p>
              <p>All rights reserved</p>
            </div>
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

            <div className="stay">
              <h4>Stay up to date</h4>
              <div className="email-subscribe">
                <input type="email" placeholder="Your email address" />
                <button type="submit">
                  <img src={send} alt="Send" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
