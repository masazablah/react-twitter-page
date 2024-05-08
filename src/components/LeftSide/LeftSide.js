import React from "react";
import "./LeftSide.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Navbar from "./Navbar/Navbar";

const LeftSide= () => {
  return (
    <div className="leftContainer">
      <img src="/images/Vector.png" alt="My Logo" className="logo" />
      <Navbar />
      <button className="postButton">Post</button>
      <div className="chatBox">
        <img src="/images/masa.jpg" alt="My Logo" className="profileLogo" />
        <div className="nameContainer">
          <spam>Masa Zablah</spam>
          <p className="subName">Masa Zablah</p>
        </div>
        <MoreHorizIcon sx={{ height: "auto", marginLeft: "25%" }} />
      </div>
    </div>
  );
};

export default LeftSide;