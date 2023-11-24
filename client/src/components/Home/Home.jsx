import { connect } from 'react-redux';
import { useEffect } from 'react'; // Importa useEffect para hacer la solicitud de videojuegos cuando el componente se monte
import { getVideogames } from '../../redux/actions/videogameActions';
import SearchBar from '../SearchBar/SearchBar';
import VideogameCard from '../VideogameCard/Videogamecard';
import Form from '../Form/Form';


const Home = ({ videogames, getVideogames }) => {
  useEffect(() => {
    // Cuando el componente se monta, obtén los videojuegos
    getVideogames();
  }, [getVideogames]);

  return (
    <div className="home">
      <SearchBar videogames={videogames} />

      {/* Sector de listado de cards */}
      {videogames.map((videogame) => (
        <VideogameCard key={videogame.id} videogame={videogame} />
      ))}

      {/* Botones/Opciones para filtrar, ordenar y paginar */}

      <Form></Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videogames: state.videogames,
  };
};

export default connect(mapStateToProps, { getVideogames })(Home);


