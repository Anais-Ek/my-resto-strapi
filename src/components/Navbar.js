import Axios from 'axios';import React from 'react';


const url= "http://localhost:1337/api/navbar?populate=*"

const Navbar = () => {
    const [links, setLinks] = React.useState([]);

    React.useEffect(() => {
        Axios.get(url).then((response) => {
            setLinks(response.data.data.attributes.Content);
        });
    }, []);

  return (
  <><div className='links_container'>
      
      <div className='links_container_right'>
        {links ? (
          <ul className="links_box">
            {links.map((link) => (
              <li key={link.id}><a className='link' href={link.Slug}>{link.Label}</a></li>
            ))}
          </ul>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Navbar