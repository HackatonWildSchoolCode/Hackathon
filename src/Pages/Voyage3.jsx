import React from "react";
import "../Styles/Settings.css";
import "../Styles/Voyage3.css";
import Saturne from "../assets/Saturne.mp4";
import logo from "../assets/Logo.png";
import Zoom from "react-reveal/Zoom";

const Voyage3 = () => {
  return (
    <div className="page3">
      <img className="logo" src={logo} />
      <div className="planet3">
        <h2>Trips to Saturn</h2>
        <div className="horizontal-border"></div>
        <video src={Saturne} autoPlay loop muted />
      </div>
      <div className="texte3">
        <Zoom>
          <h3>Description</h3>
          <p>
            Saturn is the sixth planet in the Solar System in order of distance
            from the Sun, and the second largest in size and mass after Jupiter,
            which is like it a gas giant planet. Orbiting on average at about
            1.4 billion kilometers from the Sun{" "}
          </p>
        </Zoom>
        <img src="" alt="" />
      </div>
      <div className="border"></div>
      <div className="activity3">
        <Zoom>
          <h3>Activities</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            reiciendis quam delectus sed minus modi provident, alias vero iusto
            ducimus nobis autem cumque obcaecati illo fugit maxime aut
            laboriosam ratione?
          </p>
        </Zoom>
        <button type="button">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Voyage3;
