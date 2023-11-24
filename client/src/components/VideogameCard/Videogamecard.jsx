// VideogameCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './VideogameCard.css';

const VideogameCard = ({ videogame }) => {
  return (
    <div className="videogame-card">
      <img src={videogame.image} alt={videogame.name} />
      <h3>{videogame.name}</h3>
      <p>Géneros: {videogame.genres.join(', ')}</p>
      <Link to={`/videogame/${videogame.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default VideogameCard;
