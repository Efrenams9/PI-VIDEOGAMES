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
    // Aquí puedes agregar lógica adicional si es necesario, como limpiar el formulario.
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Agrega los campos del formulario */}
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

      {/* Agrega los demás campos del formulario siguiendo un patrón similar */}

      <button type="submit">Crear Videojuego</button>
    </form>
  );
};

export default Form;
