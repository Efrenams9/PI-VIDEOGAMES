// import {Link} from "react-router-dom";



// const SearchBar = ()=>{
//     return(
//         <div>
//             <h3>SEARCH BAR</h3>
//             <Link to="/home"><button>HOME</button></Link>
//             <Link to="/about"><button>ABOUT</button></Link>
//         </div>
//     );
// };

// export default SearchBar;

import { useState } from 'react';
import { connect } from 'react-redux';
import { filterVideogames } from '../../redux/actions/videogameActions';

const SearchBar = ({ filterVideogames }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterVideogames(e.target.value); // Filtra los videojuegos al escribir en el SearchBar
  };

  return (
    <div>
      <h3>SEARCH BAR</h3>
      <input
        type="text"
        placeholder="Search videogames..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default connect(null, { filterVideogames })(SearchBar);
