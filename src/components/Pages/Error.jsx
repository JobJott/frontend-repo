import React from "react";
import errorImg from "../../assets/errorimg.svg";
import { Link } from "react-router-dom";
import "../../styles/Error.css";

const Error = () => {
  return (
    <div className="error-section">
      <img src={errorImg} alt="error img" />
      <div className="error-main">
        <h1>Page Not Found</h1>
        <p>
        Sorry, the page you’re looking for doesn’t exist. <br />It might have been moved, deleted, or the URL may be incorrect.
        </p>
        <div className="error-btn">
          <Link to="/" className="go-home">
            {" "}
            <button>Go home</button>{" "}
          </Link>
          <Link to="/Contact" className="contact-us">
            {" "}
            <button>Contact Us</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
