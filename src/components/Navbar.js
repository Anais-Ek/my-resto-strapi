import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Navbar.css";

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
    <header>
    <div class="logo">{restaurantName}</div>
    <nav>
      <div class="navbar">

        {links.map(link => (
          <p key={link?.id}>
            <Link to={link?.Slug}>{link?.Label}</Link>
          </p>
        ))}
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
