import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Posts.css";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";


const Post = () => {
  return (
    <div>
      <div className="postContainer">
        <div className="postInnerContainer">
          <img src="/images/masa.jpg" alt="My Logo" className="postOwnerPhoto" />
          <div className="postName">
            <div className="postOwner">
              <spam>danabramov.bsky.social</spam>
              <span className="gray">@dan_abramov . May 29</span>
            </div>
            <p className="postContent">Happy 10th birthday to @Reactjs</p>
          </div>
        </div>
        <MoreHorizIcon sx={{ height: "auto" }} />
      </div>
      <div className="postButtons">
      <span className="gray"> <ModeCommentIcon sx={{ color: "rgb(95, 94, 94)" }} />  46</span>
        <span className="gray"> <SwapCallsIcon sx={{ color: "rgb(95, 94, 94)" }} />  675</span>
        <span className="gray"> <FavoriteBorderIcon sx={{ color: "rgb(95, 94, 94)" }} />  3701</span>
        <span className="gray"> <DriveFolderUploadIcon sx={{ color: "rgb(95, 94, 94)" }} />  1.1M</span>
      </div>
    </div>
  );
};

export default Post;