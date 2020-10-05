import React from "react";
import AllPosts from "./AllPosts";
import "./Feed.css";
import OnYourMind from "./OnYourMind";
import Story from "./Story";
const Feed = () => {
  return (
    <div className="feed">
      <Story />
      <OnYourMind />
      <AllPosts />
    </div>
  );
};

export default Feed;
