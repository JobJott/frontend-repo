import HomeIcon from "../../../assets/homeicon.svg?react";
import ResumeIcon from "../../../assets/resumebuilder.svg?react";
import ApplicationIcon from "../../../assets/myapplication.svg?react";
import ContactIcon from "../../../assets/contacticon.svg?react";
import HelpIcon from "../../../assets/helpicon.svg?react";
import { FaRegUserCircle } from "react-icons/fa";

export const SideDashData = [
  {
    id: 1,
    title: "Overview",
    icon: <HomeIcon />,
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Resume Builder",
    icon: <ResumeIcon />,
    path: "/dashboard/resume-builder",
  },
  {
    id: 3,
    title: "My Applications",
    icon: <ApplicationIcon />,
    path: "/dashboard/my-applications",
  },
  {
    id: 4,
    title: "Contacts",
    icon: <ContactIcon />,
    path: "/dashboard/contacts",
  },
];

export const SideDashData2 = [
  {
    id: 5,
    title: "Support Center",
    icon: <HelpIcon />,
    path: "/dashboard/supportcenter",
  },
  {
    id: 6,
    title: "Account",
    icon: <FaRegUserCircle />,
    path: "/dashboard/account",
  },
];
