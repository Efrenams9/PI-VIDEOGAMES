
//dependencies:
import { Link } from "react-router-dom";
//imports:
// import logoPokemon1 from "./logoPokemon1.png";
import SearchBar from '../SearchBar/SearchBar';

//css:
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="barra">
      {/* <img src={logoPokemon1} alt="logo"></img> */}
      <div>
        <SearchBar></SearchBar>
      <Link to='/'><button>LOG OUT</button></Link>

      </div>
    </div>
  );
};

export default NavBar;