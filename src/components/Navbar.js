import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const url = "http://localhost:1337/api/navbar?populate=*";

const Navbar = () => {
  const [links, setLinks] = React.useState([]);
  const [logoUrl, setLogoUrl] = React.useState('');

  React.useEffect(() => {
    Axios.get(url)
      .then((response) => {
        const data = response.data.data.attributes;
        setLinks(data.Navbar);
        if (response.data.data.attributes.logo) {
          setLogoUrl(response.data.data.attributes.logo.data.attributes.formats?.medium?.url);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <nav>
      <ul>
        <div className="navbar-logo">
          {logoUrl && <img src={logoUrl} alt="Logo" />}
        </div>
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
