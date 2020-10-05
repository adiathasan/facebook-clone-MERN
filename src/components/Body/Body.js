import React from "react";
import "./Body.css";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import Feed from "./Feed/Feed";
import RightSidebar from "./RightSidebar/RightSidebar";

const Body = () => {
  return (
    <div className="body">
      <div className="body__leftSidebar">
        <LeftSidebar />
      </div>
      <div className="body__feed">
        <Feed />
      </div>
      <div className="body__rightSidebar">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Body;
