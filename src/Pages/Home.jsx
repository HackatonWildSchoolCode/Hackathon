import React from "react";
import Space from "../assets/Space.mp4";
import "../Styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="space">
        <video src={Space} autoPlay loop muted />
      </div>
    </>
  );
};

export default Home;
