import React from "react";
import SidebarNail from "../SidebarNails/SidebarNail";
import "./RightSidebar.css";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import { Avatar } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const RightSidebar = () => {
  return (
    <div className="rightSidebar">
      <div className="rightSidebar__row">
        <h3>Birthdays</h3>
        <SidebarNail
          icon={CardGiftcardIcon}
          title={"Nafis Fuad and 2 others have birthdays today."}
        />
      </div>
      <div className="rightSidebar__row">
        <div className="rightSidebar__rowHeader">
          <h3>Contacts</h3>
          <div className="icons">
            <VideoCallIcon />
            <SearchIcon />
            <MoreHorizIcon />
          </div>
        </div>
        <SidebarNail avatar icon={Avatar} title={"Gazi Sifat"} />
      </div>
    </div>
  );
};

export default RightSidebar;
