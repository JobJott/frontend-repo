// import React from 'react'
// import {MdMenu} from 'react-icons/md'
// import '../../styles/Utils.css'

// const Utils = () => {
//   return (
//     <>
//     <div className="util-container">
//         <div className="utils">
//             <div className="checkbox">
//                 <input type="checkbox" name="" id="" /> <span>0</span> Selected
//             </div>
//             <div className="right-util">
//                 <div className="util-status">
//                     <label htmlFor="">Group by: </label>
//                     <select id="status">
//                         <option value="status">Status</option>
//                         <option value="bookmark">None</option>
//                     </select>
//                 </div>
//                 <div className="columns">
//                     <button>Columns</button>
//                     </div>
//                 <div className="menu"> <MdMenu/> Menu</div>
//                 <div className="add-job"> 
//                     <button> Add a New Job</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Utils


import React from 'react';
import { MdMenu } from 'react-icons/md';
import './styles/Utils.css';

const Utils = () => {
  return (
    <div className="util-container">
      <div className="utils">
        <div className="checkbox">
          <input type="checkbox" name="selectAll" id="selectAll" /> 
          <span>0</span> Selected
        </div>
        <div className="right-util">
          <div className="util-status">
            <label htmlFor="status">Group by:</label>
            <select id="status">
              <option value="status">Status</option>
              <option value="bookmark">None</option>
            </select>
          </div>
          <div className="columns">
            <button>Columns</button>
          </div>
          <div className="menu">
            <MdMenu size={24} /> Menu
          </div>
          <div className="add-job">
            <button>Add a New Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utils;
