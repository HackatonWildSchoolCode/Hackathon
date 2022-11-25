import React from "react";
import "../Styles/Settings.css";
import "../Styles/Voyage4.css";
import Sun from "../assets/Soleil.mp4";
import logo from "../assets/Logo.png";
import Zoom from "react-reveal/Zoom";

const Voyage4 = () => {
  return (
    <div className="page4">
      <img className="logo" src={logo} />
      <div className="planet4">
        <h2> Fire Land </h2>
        <div className="horizontal-border"></div>
        <video src={Sun} autoPlay loop muted />
      </div>
      <div className="texte4">
        <Zoom>
          <h3>Description</h3>
          <p>
            The Sun is the star of the Solar System. In astronomical
            classification, it is a yellow dwarf star. The Sun is part of the
            galaxy called the Milky Way and is located about 8 kpc from the
            galactic center, in the Orion arm. The Sun orbits the galactic
            center in a galactic year of 225 to 250 million years.
          </p>
        </Zoom>
        <img src="" alt="" />
      </div>
      <div className="border"></div>
      <div className="activity4">
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

export default Voyage4;
