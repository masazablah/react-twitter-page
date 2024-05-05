import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import "./Profile.css";
import Post from "./Posts/Posts";
import WhoToFollow from "./WhoToFollow/WhoToFollow";

const Profile = () => {


  const Headings = ({ heading, sub }) => {
    return (
      <div className="headingContainer">
        <spam>{heading}</spam>
        <p className="subHeading">{sub}</p>
      </div>
    );
  };

const data = [
  {
    img: "/images/freecodecamp.jpg",
    name: "freeCodeCamp.org ",
    subname: "@freeCodeCamp",
    followers: "Nodejs and 9 others follow",
    text: " We're a community of millions of people who are building new skills and getting new jobs together. A 501(c)(3) public charity. Tweets by @abbeyrenn.",
  },
  {
    img: "/images/typescript.png",
    name: "TypeScript",
    subname: "@Typescript",
    followers: "Nodejsand 5 others follow",
    text: "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    img: "/images/TailWindCSS.png",
    name: "TailWind CSS",
    subname: "@TailWindCSS",
    followers: "AhmadAmira and 3 others follow",
    text: "The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.",
  },
];


  return (
    <div className="mainSectionContainer">
      <div className="header">
        <ArrowBackIcon
          sx={{ color: "white", height: "auto", marginRight: "30px" }}
        />
        <Headings heading="React" sub="2,611 posts" />
      </div>
      <img
        src="/images/feature-react.webp"
        alt="My Logo"
        className="profilePhoto"
      />
      <img src="/images/react.png" alt="My Logo" className="reactImage" />
      <div className="belowHero">
        <div className="btnDiv">
          <button className="navButtonIcon">
            <MoreHorizIcon />
          </button>
          <button className="navButtonIcon">
            <NotificationAddIcon />
          </button>
          <button className="navButtonFollow">Following</button>
        </div>
        <Headings heading="React" sub="@Reactjs" />
        <p>The library for web and native user interfaces</p>
        <div className="linkAndDate">
          <InsertLinkIcon
            sx={{ color: "rgb(95, 94, 94)", marginRight: "5px" }}
          />
          <span className="reactLink">react.dev</span>
          <CalendarMonthIcon
            sx={{ color: "rgb(95, 94, 94)", marginLeft: "25px" }}
          />
          <span className="gray"> Joined July 2013</span>
        </div>
        <div className="linkAndDate">
          267
          <span className="gray"> Following</span>
          <span className="followers">708.1k</span>
          <span className="gray"> Followers</span>
        </div>
        <span className="gray">Followed by Mohammad Kukhun, Yaza Alsade, and 14 others you follow</span>
        <div className="navigation">
          <button className="postsButton">Posts</button>
          <button className="navButton">Replies</button>
          <button className="navButton">Media</button>
          <button className="navButton"> Links</button>
        </div>
        <hr />
        <Post />
        <hr />
        <h3>Who to follow</h3>
        {data.map((item, index) => (
          <WhoToFollow
            key={index}
            img={item.img}
            name={item.name}
            subname={item.subname}
            followers={item.followers}
            text={item.text}
          />
        ))}
        <button className="showMoreBtn">Show more</button>
        <hr />
      </div>
    </div>
  );
};

export default Profile;