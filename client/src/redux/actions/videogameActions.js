// import axios from 'axios';

// export const getVideogames = () => async (dispatch) => {
//   try {
//     const res = await axios.get('/videogames'); // Ajusta la ruta según tu API
//     dispatch({ type: 'GET_VIDEOGAMES', payload: res.data });
//   } catch (error) {
//     console.error('Error al obtener videojuegos', error);
//   }
// };

// client\src\redux\actions\videogameActions.js
import { default as axios } from 'axios';

export const getVideogames = () => async (dispatch) => {
  try {
    const res = await axios.get('/videogames');
    console.log(res.data);
    dispatch({ type: 'GET_VIDEOGAMES', payload: res.data });
  } catch (error) {
    console.error('Error al obtener videojuegos', error);
  }
};


export const filterVideogames = (searchTerm) => (dispatch) => {
  dispatch({ type: 'FILTER_VIDEOGAMES', payload: searchTerm });
};


export const createVideogame = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/videogames', formData); // Ajusta la ruta según tu API
    dispatch({ type: 'CREATE_VIDEOGAME', payload: res.data });
    // Puedes agregar lógica adicional después de crear el videojuego
  } catch (error) {
    console.error('Error al crear el videojuego', error);
  }
};
