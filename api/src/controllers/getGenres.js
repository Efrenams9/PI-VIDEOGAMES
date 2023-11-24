// api/src/controllers/getGenres.js

const getGenres = async (req, res) => {
  try {
    // Lógica asíncrona para obtener y enviar los géneros
    // Simulando una operación asíncrona, por ejemplo, esperando un segundo
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.send('Obtener todos los géneros');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los géneros');
  }
};

module.exports = getGenres;
