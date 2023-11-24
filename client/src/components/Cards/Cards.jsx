import React from 'react';
import { Link } from 'react-router-dom';



const  Cards = ({videogame})=>{
    return (
        <div>
            <h2>aqui van a cargar todas las cartas</h2>
            <div>
      <img src={videogame.image} alt={videogame.name} />
      <h3>{videogame.name}</h3>
      <p>Géneros: {videogame.genres.join(', ')}</p>
      <Link to={`/videogame/${videogame.id}`}>Ver Detalles</Link>
    </div>



        </div>
    );
};

export default Cards;