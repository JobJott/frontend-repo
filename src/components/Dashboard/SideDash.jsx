
// omo ologo chat gpt

import { useState } from "react";
import { MdOutlineArrowLeft, MdContacts, MdOutlineManageAccounts } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
import jobjott from '../../assets/jobjott1.svg';
import './styles/sideDash.css'

const SideDash = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((prevToggle) => !prevToggle);
    };

    return (
        <div className={`sideDash ${toggle ? "collapsed" : "expanded"}`}>
            <div className="jobjott-container">
                <h4>JOBJOTT</h4>
                <img className="jobjot-img" src={jobjott} alt="JobJott Logo" />
                <MdOutlineArrowLeft onClick={handleToggle} className="toggle-icon" />
            </div>

            {!toggle && (
                <ul className="list">
                    <li className="list-name" title="Tracker"><FaHome /> Job Tracker</li>
                    <li className="list-name" title="Contacts"><MdContacts /> Contacts</li>
                    <li className="list-name"><FcSupport /> Support Center</li>
                    <li className="list-name"><MdOutlineManageAccounts /> Account</li> 
                </ul>
            )}

            {toggle && (
                <div className="icon-only-list">
                    <FaHome className="icon" title="Job Tracker" />
                    <MdContacts className="icon" title="Contacts" />
                    <FcSupport className="icon" title="Support Center" />
                    <MdOutlineManageAccounts className="icon" title="Account" />
                </div>
            )}
        </div>
    );
};

export default SideDash;
