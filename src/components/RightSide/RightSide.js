import React from "react";
import "./RightSide.css";
import SearchIcon from "@mui/icons-material/Search";
import YouMightLike from "./YouMightLike/YouMightLike";
import Trendsforyou from "./TrendsForYou/TrendsForYou";

const RightSection = () => {

  
  return (
    <div className="rightSectionContainer">
      <div className="search-bar">
        <button className="search-button">
          <SearchIcon sx={{ color: "rgb(95, 94, 94)" }} />
        </button>
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <YouMightLike />
      <Trendsforyou />
    </div>
  );
};

export default RightSection;