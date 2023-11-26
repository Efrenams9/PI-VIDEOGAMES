// reducer.js
const initialState = {
    // ... otros estados
    videogames: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      // Resto de tus casos existentes...
  
      case 'CREATE_VIDEOGAME':
        return {
          ...state,
          videogames: [...state.videogames, action.payload],
        };
      case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload
      };
      case "GET_DELETE":
      return {
        ...state,
        videogames: action.payload
      };
      default:
        return state;
    }
  };
  
  export default reducer;