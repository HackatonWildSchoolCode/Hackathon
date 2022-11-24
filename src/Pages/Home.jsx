import React from "react";
import Space from "../assets/Space.mp4";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="space">
        <video src={Space} autoPlay loop muted />
      </div>
      <div className="slogan">
        <h3>Keep the lights on in the dark</h3>
      </div>
    </>
  );
};

export default Home;
