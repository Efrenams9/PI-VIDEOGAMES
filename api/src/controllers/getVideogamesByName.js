// // api/src/controllers/getVideogamesByName.js

// const getVideogamesByName = async (req, res) => {
//   try {
//     // Lógica asíncrona para obtener y enviar videojuegos por nombre
//     // Simulando una operación asíncrona, por ejemplo, esperando un segundo
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     // Enviar una respuesta JSON con un mensaje indicativo
//     res.json({ message: `Obtener videojuegos por nombre: ${req.query.name}` });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener videojuegos por nombre' });
//   }
// };

// module.exports = getVideogamesByName;

///////////////////////////////////////////////////////////////////////////////////////

// const axios = require('axios');
// const { Videogame } = require('../db.js');

// const getVideogamesByName = async (req, res) => {
//   const nameToSearch = req.query.name.toLowerCase(); // Obtener el nombre a buscar desde los parámetros de la URL

//   try {
//     // Buscar el videojuego en la base de datos local
//     const videogamesFromDB = await Videogame.findAll({
//       where: {
//         name: {
//           [Op.iLike]: `%${nameToSearch}%`, // Utilizar Op.iLike para realizar una búsqueda case-insensitive
//         },
//       },
//     });

//     if (videogamesFromDB.length > 0) {
//       // Si hay coincidencias en la base de datos local, enviar los detalles
//       const videogameDetails = videogamesFromDB.map((videogame) => ({
//         id: videogame.id,
//         name: videogame.name,
//         description: videogame.description || 'unknown',
//         platforms: videogame.platforms || 'unknown',
//         image: videogame.image || 'unknown',
//         releaseDate: videogame.releaseDate || 'unknown',
//         rating: videogame.rating || 'unknown',
//       }));

//       res.json(videogameDetails);
//     } else {
//       // Si no hay coincidencias en la base de datos local, realizar una solicitud a la API externa
//       const response = await axios.get(`https://api.rawg.io/api/games`, {
//         params: {
//           key: process.env.APIKEY,
//           search: nameToSearch,
//         },
//       });

//       const videogamesFromAPI = response.data.results;

//       // Filtrar y seleccionar los campos que queremos almacenar en la base de datos
//       const selectedFields = videogamesFromAPI.map((game) => ({
//         id: game.id || 'unknown',
//         slug:game.slug || "unknown",
//         name: game.name || 'unknown',
//         description: game.description || 'unknown',
//         platforms: game.platforms.map((platform) => platform.platform.name).join(', ') || 'unknown',
//         image: game.background_image || 'unknown',
//         releaseDate: game.released || 'unknown',
//         rating: game.rating || 'unknown',
//       }));

//       // Almacenar los videojuegos en la base de datos local
//       await Videogame.bulkCreate(selectedFields, { ignoreDuplicates: true });

//       // Enviar los resultados al cliente
//       res.json({ videogames: selectedFields });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener el detalle de los videojuegos por nombre' });
//   }
// };

// module.exports = getVideogamesByName;

/////////////////////////////////////////////////////////////////////////////////

// // api/src/controllers/getVideogamesById.js
// const getVideogamesByIdLogic = async (idVideogame) => {
//   // Simulación de operación asíncrona, por ejemplo, esperando un segundo
//   await new Promise(resolve => setTimeout(resolve, 1000));

//   // Puedes ajustar el objeto de resultado según tus necesidades
//   const resultado = {
//     id: idVideogame || 'unknown',
//     name: 'unknown',
//     description: 'unknown',
//     platforms: 'unknown',
//     image: 'unknown',
//     releaseDate: 'unknown',
//     rating: 'unknown',
//   };

//   return resultado;
// };

// module.exports = getVideogamesByIdLogic;

// // api/src/controllers/getVideogamesByName.js
// const axios = require('axios');
// const { Videogame } = require('../db.js');
// const getVideogamesByIdLogic = require('./getVideogamesById.js'); // Importa la lógica del otro controlador

// const getVideogamesByName = async (req, res) => {
//   try {
//     const nombre = req.query.nombre.toLowerCase();
//     const videojuego = await Videogame.findOne({ where: { name: nombre } });

//     if (!videojuego) {
//       res.status(404).json({ error: 'No se encontró el videojuego' });
//       return;
//     }

//     const idVideogame = videojuego.id;
//     const resultado = await getVideogamesByIdLogic(idVideogame);

//     res.json(resultado);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener el videojuego por nombre' });
//   }
// };

// module.exports = getVideogamesByName;

////////////////////////////////////////////////////////////////////////////

// // api/src/controllers/getVideogamesByName.js
// const axios = require('axios');
// const { Videogame } = require('../db.js');

// const getVideogamesByName = async (req, res) => {
//   try {
//     const nombre = req.query.nombre.toLowerCase();
//     const videojuego = await Videogame.findOne({ where: { name: nombre } });

//     if (!videojuego) {
//       res.status(404).json({ error: 'No se encontró el videojuego' });
//       return;
//     }

//     const idVideogame = videojuego.id;

//     // Simulación de operación asíncrona, por ejemplo, esperando un segundo
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     // Obtener detalles del videojuego desde la API externa
//     const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}`, {
//       params: {
//         key: process.env.APIKEY,
//       },
//     });

//     const videogameFromAPI = response.data;

//     // Adaptar los detalles del videojuego desde la API
//     const resultado = {
//       id: videogameFromAPI.id,
//       name: videogameFromAPI.name,
//       description: videogameFromAPI.description || 'unknown',
//       platforms: videogameFromAPI.platforms.map((platform) => platform.platform.name).join(', ') || 'unknown',
//       image: videogameFromAPI.background_image || 'unknown',
//       releaseDate: videogameFromAPI.released || 'unknown',
//       rating: videogameFromAPI.rating || 'unknown',
//     };

//     res.json(resultado);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener el videojuego por nombre' });
//   }
// };

// module.exports = getVideogamesByName;

////////////////////////////////////////////////////////

// // api/src/controllers/getVideogamesBySlug.js
// const axios = require('axios');
// const { Videogame } = require('../db.js');
// const getVideogamesByIdLogic = require('./getVideogamesById.js');

// const getVideogamesBySlug = async (req, res) => {
//   try {
//     const slug = req.params.slug;
//     const videojuego = await Videogame.findOne({ where: { slug: slug } });

//     if (!videojuego) {
//       res.status(404).json({ error: 'No se encontró el videojuego' });
//       return;
//     }

//     const idVideogame = videojuego.id;
//     const resultado = await getVideogamesByIdLogic(idVideogame);

//     res.json(resultado);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Error al obtener el videojuego por slug' });
//   }
// };

// module.exports = getVideogamesBySlug;

////////////////////////////////////////////////

// api/src/controllers/getVideogamesBySlug.js
const axios = require('axios');
const { Videogame } = require('../db.js');
const getVideogamesByIdLogic = require('./getVideogamesById.js');

const getVideogamesBySlug = async (req, res) => {
  try {
    const slug = req.params.slug;
    const videojuego = await Videogame.findOne({ where: { slug: slug } });

    if (!videojuego) {
      res.status(404).json({ error: 'No se encontró el videojuego' });
      return;
    }

    const idVideogame = videojuego.id;
    const resultado = await getVideogamesByIdLogic(idVideogame);

    res.json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el videojuego por slug' });
  }
};

module.exports = getVideogamesBySlug;





