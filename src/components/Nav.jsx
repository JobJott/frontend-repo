import "../styles/Nav.css";
import arrowdown from "../assets/chevron-arrow-down.svg";
import divider from "../assets/Divider.svg";
import Logo from "../assets/jobjott1.svg";

const Nav = () => {
  return (
    <nav className="navbar-header">
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </div>

          <div className="navbar-menu">
            <a href="/" className="menu-links long-text">
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

        {/* <div className="dropdown">
          <button className="dropbtn">More</button>
          <div className="dropdown-content">
            <a href="#">Career Hub</a>
            <a href="#">Cover Letter Templates</a>
            <a href="#">Resume Templates</a>
            <a href="#">Interview Question Templates</a>
            <a href="#">Career Path</a>
          </div>
        </div>
      </div> */}

        <div className="navbar-right">
          <button className="cta-button">
            <span className="box">
              <a href="/">Log in</a>
            </span>
          </button>

          <img src={divider} alt="" />

          <button className="cta-button-2">
            <span className="box-2">
              <a href="/">Sign up</a>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
