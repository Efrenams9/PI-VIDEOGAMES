// // api/src/controllers/getVideogamesById.js

// const getVideogamesById = async (req, res) => {
//   try {
//     // Lógica asíncrona para obtener y enviar un videojuego por ID
//     // Simulando una operación asíncrona, por ejemplo, esperando un segundo
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     // Enviar una respuesta JSON con un mensaje indicativo
//     res.json({ message: `Obtener el videojuego con ID ${req.params.idVideogame}` });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener el videojuego por ID' });
//   }
// };

// module.exports = getVideogamesById;

const axios = require('axios');
const { Videogame } = require('../db.js');

const getVideogameById = async (req, res) => {
  let idVideogame = req.params.idVideogame; // Obtener el ID del videojuego desde los parámetros de la URL

  try {
    // Buscar el videojuego en la base de datos local
    const videogameFromDB = await Videogame.findOne({ where: { id: idVideogame } });

    if (videogameFromDB) {
      // Si el videojuego está en la base de datos local, enviar sus detalles
      res.json({
        id: videogameFromDB.id,
        name: videogameFromDB.name,
        description: videogameFromDB.description || 'unknown',
        platforms: videogameFromDB.platforms || 'unknown',
        image: videogameFromDB.image || 'unknown',
        releaseDate: videogameFromDB.releaseDate || 'unknown',
        rating: videogameFromDB.rating || 'unknown',
      });
    } else {
      // Si el videojuego no está en la base de datos local, obtener detalles de la API externa
      const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}`, {
        params: {
          key: process.env.APIKEY,
        },
      });

      const videogameFromAPI = response.data;

      // Adaptar los detalles del videojuego desde la API
      const videogameDetail = {
        id: videogameFromAPI.id,
        name: videogameFromAPI.name,
        description: videogameFromAPI.description || 'unknown',
        platforms: videogameFromAPI.platforms.map((platform) => platform.platform.name).join(', ') || 'unknown',
        image: videogameFromAPI.background_image || 'unknown',
        releaseDate: videogameFromAPI.released || 'unknown',
        rating: videogameFromAPI.rating || 'unknown',
      };

      res.json(videogameDetail);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el detalle del videojuego' });
  }
};

module.exports = getVideogameById;
