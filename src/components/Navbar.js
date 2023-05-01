import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const url = "http://localhost:1337/api/navbar?populate=*";

const Navbar = () => {
  const [links, setLinks] = React.useState([]);
  const [restaurantName, setRestaurantName] = React.useState('');
  
  React.useEffect(() => {
    Axios.get(url)
      .then((response) => {
        const data = response.data.data.attributes;
        setLinks(data.Navbar);
        setRestaurantName(data.name.data.attributes.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <nav>
      <ul>
      <h1>{restaurantName}</h1>
        {links.map(link => (
          <li key={link?.id}>
            <Link to={link?.Slug}>{link?.Label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
