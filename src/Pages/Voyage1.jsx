import React from "react";
import "../Styles/Settings.css";
import "../Styles/Voyage1.css";
import Mars from "../Styles/img/mars.svg";

const Voyage1 = () => {
  return (
    
    <div className="page1">
      <div className="planet1">
        <h2>Mars</h2>
        <img src={Mars} alt="mars" />
      </div>
      <div className="texte1">
        <h3>Description of the planet</h3>
        <p>
        Mars is one of the 4 telluric (or rocky) planets of the Solar System. Colder than the Earth, the average temperature on its surface is -67°C. It is called the "red planet" because its rocky and desert surface is covered with a dust rich in iron oxide of reddish color. There are also many high volcanoes and deep canyons. Mars has 2 small known natural satellites: Phobos (about 22 km in diameter, orbiting at 9 400 km) and Deimos (about 13 km in diameter, orbiting at 23 500 km from Mars).
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

export default Voyage1;
