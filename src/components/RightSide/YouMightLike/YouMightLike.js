import React from "react";
import "./YouMightLike.css";

const YouMightLike = () => {

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

const Profiles = ({ img, name, subname }) => {
  return (
    <div className="profileContainer">
      <div className="ymlBox">
        <img src={img} alt="My Logo" className="youMightLikeLogo" />
        <Headings heading={name} sub={subname} />
      </div>
      <Followbutton />
    </div>
  );
};

const data = [
  {
    img: "/images/freecodecamp.jpg",
    name: "freeCodeCamp.org ",
    subname: "@freeCodeCamp",
  },
  {
    img: "/images/typescript.png",
    name: "TypeScript",
    subname: "@Typescript",
  },
  {
    img: "/images/TailWindCSS.png",
    name: "TailWind CSS",
    subname: "@TailWindCSS",
  },
];


  return (
    <div className="youMightLikeContainer">
      <h3 className="youMightLikeHeader">You might like</h3>
      {data.map((item, index) => (
        <Profiles
          key={index}
          img={item.img}
          name={item.name}
          subname={item.subname}
        />
      ))}
      <button className="showMoreBtn">Show more</button>
    </div>
  );
};

export default YouMightLike;