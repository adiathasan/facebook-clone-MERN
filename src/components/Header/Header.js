import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="/favicon.ico" alt="" />
        <form>
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </form>
      </div>
      <div className="header__middle">
        <HomeIcon />
        <OndemandVideoIcon />
        <SupervisedUserCircleIcon />
        <DashboardIcon />
      </div>
      <div className="header__right">
        <Avatar className="avatar" />
        <p>Adiat Hasan</p>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <WhatsAppIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
