import React, { useState } from "react";
import "../styles/Mainboard.css"
import GroupDropdown from "./Contact/ContactButtons/GroupDropdown";
import ColumnContact from "./Contact/ContactButtons/ColumnContact";
import MenuContact from "./Contact/ContactButtons/MenuContact";
import AddNewContact from "./Contact/ContactButtons/AddNewContact";
import AddContact from "./Contact/ContactButtons/AddContact";
import { StyleProvider } from "@ant-design/cssinjs";
import AntContactModal from "./Contact/ContactButtons/AntContactModal";


const Contact = ({ isSideDashOpen })=>{
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <div  className={`mainboard-section ${
                isSideDashOpen ? "" : "expanded-mainboard"
               }`}
        >
            <main className="mainboard-content">
                 <div className="job-tracker-container">
          <div className="job-tracker-content-wrapper">
             <div className="job-tracker-section false">
              <div className="cluster job-tracker-actions">
                 <div className="ant-col"></div>
                 <div className="ant-col action-buttons">
                   <GroupDropdown />
                   <ColumnContact />
                   <MenuContact />

                   <StyleProvider layer>
                     <AddNewContact setModalOpen={setModalOpen} />
                  </StyleProvider>
                 </div>
               </div>
             </div>
             <AddContact setModalOpen={setModalOpen} />
           </div>
        </div>
      </main>

       <StyleProvider layer>
         <AntContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
       </StyleProvider>   
        </div>
    );
};
export default Contact


