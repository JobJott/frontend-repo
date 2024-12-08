import { Link } from "react-router-dom"
import "../../styles/SideBar.css"

const SideBar = ({toggle, setToggle}) => {
    const test = () =>{
        setToggle(false)
    }
return (
    <>
        <div className="container">
            <div className="drop-down-contents">
                <Link to='#' onClick={test}>
                <nav>Resources</nav>
                </Link>
                <Link to='#'  onClick={test}><nav>Career Hub</nav></Link>
                <Link to='#'  onClick={test}><nav>Resume Templates</nav></Link>
                <Link to='#'  onClick={test}><nav>Interview Question Template</nav></Link>
                <Link to='#'  onClick={test}><nav>Career Path</nav></Link>
                
            </div>
        </div>
    </>
)
}
export default SideBar

