import React from 'react';
import "../Styles/Settings.css";
import "../Styles/Voyage4.css";
import Mars from "../Styles/img/mars.svg";

const Voyage4 = () => {
    return (
        <div className='page4'>
            <div className='planet4'>
                <h2>Sun</h2>
                <img src={Mars} alt="mars" />
            </div>
            <div className='border'></div>
            <div className='texte4'>
                <h3>Description of the planet</h3>
                <p>The Sun is the star of the Solar System. In astronomical classification, it is a yellow dwarf star with a mass of about 1.989 1 × 1030 kg, composed of hydrogen (74% of the mass or 92% of the volume) and helium (25% of the mass or 8% of the volume). The Sun is part of the galaxy called the Milky Way and is located about 8 kpc (∼26,100 a.l.) from the galactic center, in the Orion arm. The Sun orbits the galactic center in a galactic year of 225 to 250 million years. Around it orbit the Earth (at a speed of 30 km / s), seven other planets, at least five dwarf planets, many asteroids and comets and a band of dust. The Sun alone represents about 99.854% of the mass of the planetary system, Jupiter representing more than two thirds of the rest. </p>
                <img src="" alt="" />
            </div>
            <div className='border'></div>
            <div className='activity4'>
                <h3>Activité</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae reiciendis quam delectus sed minus modi provident, alias vero iusto ducimus nobis autem cumque obcaecati illo fugit maxime aut laboriosam ratione?</p>
                <button type='button'>BOOK NOW</button>
            </div>
        </div>
    );
};

export default Voyage4;