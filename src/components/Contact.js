import { useState, useEffect } from 'react';
import axios from 'axios';
import "./css/Contact.css";

const Contact = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    nb_of_person: '',
    date_time: '',
    restaurant: '',

  });

  useEffect(() => {
    axios.get('http://localhost:1337/api/restaurants?')
      .then(response => {
        setRestaurants(response.data.data.attributes);
        console.log(response.data.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:1337/api/contacts', formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (

    <div className='container'>
      <div className='content'>
      <h1>Contact us</h1>
      <div class="side">
      <form onSubmit={handleSubmit}>

        <div class="input-box">
        <label>
          Nom : <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
        </label>
        </div>
        
        <div class="input-box">
          <label>
          Prénom : <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
          </label>
        </div>

        <div class="input-box">
        <label>
          Email :<input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        </div>

        <div class="input-box">
        <label>
          Nombre de personnes :<input type="number" name="nb_of_person" value={formData.nb_of_person} onChange={handleChange} />
        </label>
        </div>

        <div class="input-box">
        <label>
          Date et heure :<input type="datetime-local" name="date_time" value={formData.date_time} onChange={handleChange} />
        </label>
        </div>

        <div class="input-box">
        <label>
        Restaurant :
        <select name="restaurant" value={formData.restaurant} onChange={handleChange}>
          <option value="">Sélectionnez un restaurant</option>
          {restaurants && restaurants.map(restaurant => (
          <option key={restaurant.id} value={restaurant.id}>
          {restaurant.data.attributes.name}
          </option>
        ))}
        </select>
        </label>
        </div>
        <div class="button">
        <button type="submit">Send now</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Contact;
