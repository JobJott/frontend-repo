import "../../styles/Nav.css";
import arrowdown from "../../assets/chevron-arrow-down.svg";
import divider from "../../assets/Divider.svg";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx"; 
import { useState } from "react";
import SideBar from "./SideBar";


const Nav = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () =>{
    setToggle(!toggle)
  }
  return (<>
            <nav className="navbar-header">
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <a href="/" style={{ margin: "auto 0"}}>
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
        <Link to="/auth/signin">
          <button className="cta-button">
            <span className="box">
              Log in
            </span>
          </button>
          </Link>

          <img src={divider} alt="" />

          <Link to="/auth/signup">
          <button className="cta-button-2">
            <span className="box-2">
              Sign up
            </span>
          </button>
          </Link>
        </div>
        <div className="icon-menu" onClick={handleToggle}> <RxHamburgerMenu color="black" size={25}/> </div>
      </div>
    </nav>
     {
      toggle === false ? null : <SideBar toggle={toggle} setToggle={setToggle}/>
    }
         </>
    
  );
};

export default Nav;
