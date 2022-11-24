import React from 'react';
import "../Styles/Settings.css";
import "../Styles/Voyage1.css";
import Mars from "../Styles/img/mars.svg";

const Voyage1 = () => {
    return (
        <div className='page1'>
            <div className='planet1'>
                <h2>Mars</h2>
                <img src={Mars} alt="mars" />                
                
            </div>
            <div className='texte1'>
                <h3>Présentation de la planet</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab harum nihil, aut ducimus impedit magni cupiditate debitis voluptatum assumenda, officia quia recusandae? Beatae eius nihil, nisi voluptatum culpa laborum?</p>
                <ul><li>Vent : </li>
                <li>Temperature :</li></ul>
                <img src="" alt="" />
            </div>
            <div className='activity1'>
                <h3>Activité</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae reiciendis quam delectus sed minus modi provident, alias vero iusto ducimus nobis autem cumque obcaecati illo fugit maxime aut laboriosam ratione?</p>
                <button type='button'>BOOK NOW</button>
            </div>
        </div>
    );
};

export default Voyage1;