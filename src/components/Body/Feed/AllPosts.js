import { Avatar } from "@material-ui/core";
import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
const AllPosts = () => {
  return (
    <div className="allPosts">
      <div className="allPosts__singlePost">
        <div className="allPosts__singlePostHeader">
          <div className="allPosts__singlePostHeader__left">
            <Avatar className="avatar" />
            <div className="allPosts__singlePostHeader__leftText">
              <p>David De Gea</p>
              <span>
                17h . <PublicIcon />
              </span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="allPosts__singlePostSnippet">
          <p>
            It’s a marathon, not a sprint. Whether you practice for a half-hour
            or 8, feel accomplished committing to 100 days of code.
          </p>
        </div>
        <div className="allPosts__singlePostImage">
          <img
            src="https://wallup.net/wp-content/uploads/2016/12/08/151264-Tom_Cruise-748x561.jpg "
            alt=""
          />
        </div>
        <div className="allPosts__singlePostInterect">
          <div className="allPosts__singlePostInterectRow">
            <ThumbUpOutlinedIcon />
            <p>Like</p>
          </div>
          <div className="allPosts__singlePostInterectRow">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className="allPosts__singlePostInterectRow">
            <ReplyOutlinedIcon
              style={{
                transform: "rotateY(180deg)",
              }}
            />
            <p>Share</p>
          </div>
        </div>
        <div className="onYourMind__input">
          <Avatar className="avatar" />
          <input type="text" placeholder={`Write a comment`} />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
