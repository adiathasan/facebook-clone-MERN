import { Avatar } from "@material-ui/core";
import React from "react";

const Story = () => {
  return (
    <div className="story">
      <div className="card">
        <img
          src="https://images.fineartamerica.com/images-medium-large-5/abstract-portrait-zlatko-music.jpg"
          alt=""
        />
        <Avatar className="avatar" />
        <p>Your Story</p>
      </div>
      <div className="card">
        <img src="https://jooinn.com/images/abstract-portrait-1.jpg" alt="" />
        <Avatar className="avatar" />
        <p>Mark Henry</p>
      </div>
      <div className="card">
        <img
          src="https://secure.img1-fg.wfcdn.com/im/54193866/compr-r85/5571/55719939/abstract-portrait-of-a-woman-graphic-art-print-multi-piece-image-on-canvas.jpg"
          alt=""
        />
        <Avatar className="avatar" />
        <p>Shairin Islam</p>
      </div>
    </div>
  );
};

export default Story;
