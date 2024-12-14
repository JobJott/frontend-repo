import Homeicon from "../../../assets/homeicon.svg";
import { AiFillContacts } from "react-icons/ai";
import { BiSupport, BiUser } from "react-icons/bi";

export const SideDashData = [
  {
    id: 1,
    title: "Home",
    icon: <img src={Homeicon} alt="" />,
    path: "/dashboard",
  },
  { id: 2, title: "Contacts", icon: <AiFillContacts />, path: "/contacts" },
];

export const SideDashData2 = [
  { id: 3, title: "Support Center", icon: <BiSupport />, path: "/support" },
  { id: 4, title: "Account", icon: <BiUser />, path: "/account" },
];
