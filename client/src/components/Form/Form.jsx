// Form.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createVideogame } from '../../redux/actions/videogameActions';

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    platforms: '',
    releaseDate: '',
    rating: '',
    genres: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createVideogame(formData));
    
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

     

      <button type="submit">Crear Videojuego</button>
    </form>
  );
};

export default Form;
