import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const url = "http://localhost:1337/api/navbar?populate=*";

const Navbar = () => {
  const [links, setLinks] = React.useState([]);

  React.useEffect(() => {
    Axios.get(url).then((response) => {
      setLinks(response.data.data.attributes.Navbar);
    });
  }, []);

  return (
    <ul>
      {links.map(link => (
        <li key={link?.id}>
          <Link to={link?.Slug}>{link?.Label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;