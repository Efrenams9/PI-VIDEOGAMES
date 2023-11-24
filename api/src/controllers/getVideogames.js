const axios = require('axios');
const { Videogame } = require('../db.js');

const getVideogames = async (req, res) => {
  try {
    // Parámetro de consulta para la página
    const page = req.query.page || 1;
    const pageSize = 5; // Cantidad de videojuegos por página

    // Hacer una solicitud a la API externa con los parámetros de paginación
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: {
        key: process.env.APIKEY,
        page,
        page_size: pageSize,
      },
    });

    // Obtener los resultados de la API
    const videogamesFromAPI = response.data.results;

    // Filtrar y seleccionar los campos que queremos almacenar en la base de datos
    const selectedFields = videogamesFromAPI.map((game) => ({
      id: game.id || 'unknown',
      name: game.name || 'unknown',
      description: game.description || 'unknown',
      platforms: game.platforms.map((platform) => platform.platform.name).join(', ') || 'unknown',
      image: game.background_image || 'unknown',
      releaseDate: game.released || 'unknown',
      rating: game.rating || 'unknown',
    }));

    // Obtener información de paginación de la respuesta de la API
    const paginationInfo = {
      count: response.data.count || 0,
      next: response.data.next || null,
      previous: response.data.previous || null,
    };

    // Agregar la información de paginación al JSON de respuesta
    const jsonResponse = {
      pagination: paginationInfo,
      videogames: selectedFields,
    };

    // Almacenar los videojuegos en la base de datos
    await Videogame.bulkCreate(selectedFields, { ignoreDuplicates: true });

    // Enviar los resultados al cliente
    res.json(jsonResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener y almacenar videojuegos' });
  }
};

module.exports = getVideogames;
