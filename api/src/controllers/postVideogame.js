const { Videogame, Genre } = require('../db.js');

const postVideogame = async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { name, description, platforms, genres } = req.body;

    // Verificar que se proporcionen al menos un género
    if (!genres || genres.length === 0) {
      return res.status(400).json({ error: 'Se debe proporcionar al menos un género' });
    }

    // Crear el videojuego en la base de datos
    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
    });

    // Relacionar el videojuego con los géneros proporcionados
    const genresInDB = await Genre.findAll({ where: { name: genres } });

    // Asociar los géneros al videojuego
    await newVideogame.addGenres(genresInDB);

    // Obtener el videojuego con sus géneros para enviarlo en la respuesta
    const videogameWithGenres = await Videogame.findByPk(newVideogame.id, {
      include: Genre,
    });

    // Formatear la respuesta para que sea similar a getVideogameById
    const formattedResponse = {
      id: videogameWithGenres.id,
      name: videogameWithGenres.name,
      description: videogameWithGenres.description,
      platforms: videogameWithGenres.platforms,
      genres: videogameWithGenres.Genres.map((genre) => genre.name),
      // image: 'unknown', // Agregar imagen, releaseDate, y rating según tus necesidades
      releaseDate: 'unknown',
      rating: 'unknown',
    };

    res.status(201).json(formattedResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el videojuego' });
  }
};

module.exports = postVideogame;

