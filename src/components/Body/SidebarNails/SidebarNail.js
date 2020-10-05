import React from "react";

const SidebarNail = ({ icon, title, avatar }) => {
  const Icon = icon;
  return (
    <div className="sidebarNail">
      <Icon className={avatar && "sidebarNail__icon"} />
      <p>{title}</p>
    </div>
  );
};

export default SidebarNail;
