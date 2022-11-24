import React from "react";
import "../Styles/Settings.css";
import "../Styles/Voyage2.css";
import Mars from "../Styles/img/mars.svg";
const Voyage2 = () => {
  return (
    <div className="page1">
      <div className="planet1">
        <h2>Moon</h2>
        <img src={Mars} alt="mars" />
      </div>
      <div className="border"></div>
      <div className="texte1">
        <h3>Description of the planet</h3>
        <p>
        The Moon, or Earth Ib, is the only permanent natural satellite of the planet Earth. It is the fifth largest natural satellite in the Solar System, and the largest of the planetary satellites relative to the size of the planet around which it orbits. It is the second densest satellite in the Solar System after Io, a satellite of Jupiter. 
        </p>
        <img src="" alt="" />
      </div>
      <div className="border"></div>
      <div className="activity1">
        <h3>Activité</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
          reiciendis quam delectus sed minus modi provident, alias vero iusto
          ducimus nobis autem cumque obcaecati illo fugit maxime aut laboriosam
          ratione?
        </p>
        <button type="button">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Voyage2;
