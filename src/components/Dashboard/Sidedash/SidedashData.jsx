import Homeicon from "../../../assets/homeicon.svg";
import resumeicon from "../../../assets/resumebuilder.svg";
import application from "../../../assets/myapplication.svg";
import contacticon from "../../../assets/contacticon.svg";
import helpicon from "../../../assets/helpicon.svg";
import usericon from "../../../assets/usericon.svg";

export const SideDashData = [
  {
    id: 1,
    title: "Overview",
    icon: <img src={Homeicon} alt="" />,
    path: "/dashboard/Overview",
  },
  {
    id: 2,
    title: "Resume Builder",
    icon: <img src={resumeicon} alt="" />,
    path: "/dashboard/resume-builder",
  },
  {
    id: 3,
    title: "My Applications",
    icon: <img src={application} alt="" />,
    path: "/dashboard/my-applications",
  },
  {
    id: 4,
    title: "Contacts",
    icon: <img src={contacticon} alt="" />,
    path: "/dashboard/contacts",
  },
];

export const SideDashData2 = [
  {
    id: 5,
    title: "Support Center",
    icon: <img src={helpicon} alt="" />,
    path: "/dashboard/support",
  },
  {
    id: 6,
    title: "Account",
    icon: <img src={usericon} alt="" />,
    path: "/dashboard/account",
  },
];
