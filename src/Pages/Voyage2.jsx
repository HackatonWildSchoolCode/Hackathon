import React from "react";
import "../Styles/Settings.css";
import "../Styles/Voyage2.css";
import Mars from "../assets/Lune.mp4";
import logo from "../assets/Logo.png";
import Zoom from "react-reveal/Zoom";

const Voyage2 = () => {
  return (
    <div className="page2">
      <img className="logo" src={logo} />
      <div className="planet2">
        <h2>Dinner on the moon</h2>
        <div className="horizontal-border"></div>
        <video src={Mars} autoPlay loop muted />
      </div>
      <div className="texte2">
        <Zoom>
          <h3>Description</h3>
          <p>
            The Moon, or Earth Ib, is the only permanent natural satellite of
            the planet Earth. It is the fifth largest natural satellite in the
            Solar System, and the largest of the planetary satellites relative
            to the size of the planet around which it orbits.
          </p>
        </Zoom>
        <img src="" alt="" />
      </div>
      <div className="border"></div>
      <div className="activity2">
        <Zoom>
        <h3>Activities</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
          reiciendis quam delectus sed minus modi provident, alias vero iusto
          ducimus nobis autem cumque obcaecati illo
        </p>
        </Zoom>
        <button type="button">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Voyage2;
