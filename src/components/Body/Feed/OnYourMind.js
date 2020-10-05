import { Avatar, Button } from "@material-ui/core";
import React from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

const OnYourMind = () => {
  return (
    <form className="onYourMind">
      <div className="onYourMind__input">
        <Avatar className="avatar" />
        <input type="text" placeholder={`what's on your mind ###`} />
        <Button type="submit">Post</Button>
      </div>
      <div className="onYourMind__inputIcons">
        <div className="onYourMind__inputIconsRow">
          <VideoCallIcon />
        </div>
        <div className="onYourMind__inputIconsRow">
          <span>
            <PhotoLibraryIcon></PhotoLibraryIcon>
            <input type="file" />
          </span>
          <p>Photo/Video</p>
        </div>
        <div className="onYourMind__inputIconsRow">
          <span>
            <InsertEmoticonIcon />
          </span>
        </div>
      </div>
    </form>
  );
};

export default OnYourMind;
