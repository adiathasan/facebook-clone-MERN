import { Avatar } from "@material-ui/core";
import React from "react";
import SidebarNail from "../SidebarNails/SidebarNail";
import "./LeftSidebar.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

const LeftSidebar = () => {
  return (
    <div className="leftSidebar">
      <SidebarNail avatar icon={Avatar} title={"Adiat Hasan Ratul"} />
      <SidebarNail
        icon={FavoriteBorderIcon}
        title={"COVID-19 information Center"}
      />
      <SidebarNail icon={PeopleAltIcon} title={"Friends"} />
      <SidebarNail icon={PeopleOutlineIcon} title={"Groups"} />
      <SidebarNail icon={OndemandVideoIcon} title={"Videos"} />
      <SidebarNail icon={ArrowDropDownIcon} title={"See More"} />
    </div>
  );
};

export default LeftSidebar;
