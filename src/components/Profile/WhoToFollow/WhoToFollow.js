import React from "react";
import "./WhoToFollow.css";
import PersonIcon from "@mui/icons-material/Person";



const WhoToFollow = ({ img, name, subname, followers, text }) => {

  const Followbutton = () => {
    return (
      <div>
        <button className="followBtn">Follow</button>
      </div>
    );
  };

  const Headings = ({ heading, sub }) => {
    return (
      <div className="headingContainer">
        <spam>{heading}</spam>
        <p className="subHeading">{sub}</p>
      </div>
    );
  };

  return (
    <div className="followContainer">
      <div className="whoFollows">
        <PersonIcon sx={{ color: "rgb(95, 94, 94)" }} />
        <span className="gray">{followers}</span>
      </div>
      <div className="headingFollow">
        <div className="followBox">
          <img src={img} alt="My Logo" className="followLogo" />
          <Headings heading={name} sub={subname} />
        </div>
        <Followbutton />
      </div>
      <div className="followText">{text}</div>
    </div>
  );
};

export default WhoToFollow;