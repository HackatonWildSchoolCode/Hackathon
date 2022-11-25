import React from "react";
import "../Styles/Settings.css";
import "../Styles/Voyage1.css";
import Jupiter from "../assets/Jupiter.mp4";
import logo from "../assets/Logo.png";
import Zoom from "react-reveal/Zoom";

const Voyage1 = () => {
  return (
    <div className="page1">
      <img className="logo" src={logo} />
      <div className="planet1">
        <h2>Trips to Saturn</h2>
        <div className="horizontal-border"></div>
        <video src={Jupiter} autoPlay loop muted />
      </div>
      <div className="texte1">
        <Zoom>
        <h3>Description</h3>
        <p>
          Jupiter is one of the 4 telluric planets of the Solar System. Colder
          than the Earth, the average temperature on its surface is -67°C. It is
          called the "red planet" because its rocky and desert surface is
          covered with a dust rich in iron oxide of reddish color. There are
          also many high volcanoes and deep canyons.
        </p>
        </Zoom>
        <img src="" alt="" />
      </div>
      <div className="border"></div>
      <div className="activity1">
        <Zoom>
        <h3>Activities</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
          reiciendis quam delectus sed minus modi provident, alias vero iusto
          ducimus nobis autem cumque obcaecati illo fugit maxime aut laboriosam
          ratione?
        </p>
        </Zoom>
        <button type="button">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Voyage1;
