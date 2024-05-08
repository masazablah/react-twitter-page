import React from "react";
import "./TrendsForYou.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const data = [
  {
    category: "Gaming.Trending",
    title: "#VALORANT champions",
    posts: "27.9k posts",
  },
  {
    category: "الانستا",
    title: " ",
    posts: "1,411 Posts",
  },

  {
    category: "Gaming.Trending",
    title: "MAKO ",
    posts: "14.1K Posts",
  },

];

const TrendsForYou = () => {
  const TrendForYouCard = ({ trend }) => {
    return (
      <div className="trendsForYouContainer">
        <div className="trendsForYouHeader">
          <div>
            <span className="gray">{trend.category}</span>
            <div>{trend.title}</div>
            <span className="gray">{trend.posts}</span>

          </div>
          <MoreHorizIcon sx={{ color: "rgb(95, 94, 94)" }} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="TrendsForYouContainer">
        <h3 className="TrendsForYouHeader">Trends for you</h3>
        {data.map((trend, index) => (
          <TrendForYouCard key={index} trend={trend} />
        ))}
        <button className="showMoreBtn">Show more</button>
      </div>
      <div className="footer">
        <span className="footer_gray">Terms of policy </span>
        <span className="footer_gray">privacy policy </span>  
        <span className="footer_gray">  cookie policy</span>
        <span className="footer_gray">Accessability  </span>
        <span className="footer_gray">Ads info </span>  
        <span className="footer_gray"> More...</span>
        <span className="footer_gray">@2023 X Crop  </span>
      </div>
    </div>
  );
};

export default TrendsForYou;
