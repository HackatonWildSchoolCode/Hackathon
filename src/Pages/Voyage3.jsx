import React from 'react';
import "../Styles/Settings.css";
import "../Styles/Voyage3.css";
import Mars from "../Styles/img/mars.svg";
const Voyage3 = () => {
    return (
        <div className='page1'>
            <div className='planet1'>
                <h2>Saturne</h2>
                <img src={Mars} alt="mars" />
            </div>
            <div className='border'></div>
            <div className='texte1'>
                <h3>Description of the planet</h3>
                <p>Saturn is the sixth planet in the Solar System in order of distance from the Sun, and the second largest in size and mass after Jupiter, which is like it a gas giant planet. Its average radius of 58 232 km is about nine and a half times that of the Earth and its mass of 568.46 × 1024 kg is 95 times greater. Orbiting on average at about 1.4 billion kilometers from the Sun (9.5 astronomical units), its period of revolution is a little less than 30 years while its rotation period is estimated at 10 h 33 min. </p>
                <img src="" alt="" />
            </div>
            <div className='border'></div>
            <div className='activity1'>
                <h3>Activité</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae reiciendis quam delectus sed minus modi provident, alias vero iusto ducimus nobis autem cumque obcaecati illo fugit maxime aut laboriosam ratione?</p>
                <button type='button'>BOOK NOW</button>
            </div>
        </div>
    );
};

export default Voyage3;
