import "../styles/Nav.css"
import Logo from "../assets/jobjott.jpg"
const Nav = () =>{
    return(
        <div className="Jobjot-container">
            
            <img src={Logo} alt="logo" />
            

            <div className="Navigation">
                <a>Job Application Tracker</a>
                <a>Resources</a> 
                
                <div className="dropdown">
                    <button className="dropbtn">More</button>
                    <div className="dropdown-content">
                        <a href="#">Career Hub</a>
                        <a href="#">Cover Letter Templates</a>
                        <a href="#">Resume Templates</a>
                        <a href="#">Interview Question Templates</a>
                        <a href="#">Career Path</a>
                    </div>
                </div>
            </div>

            <div className="Login">
                <nav>Log in</nav>
                <div className="Signup">
                    <button>Sign Up</button>
                </div> 
            </div>
        </div>
    )
}

export default Nav;