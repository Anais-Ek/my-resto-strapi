import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const App = () => {
  const [posts, setPost] = useState({});

  
  useEffect(() => {
    Axios.get('http://localhost:1337/api/home?populate=*') 
      .then(response => {
        setPost(response.data.data.attributes); 
      })
      .catch(error => {
        console.error('Erreur de requête HTTP :', error);
      });
  }, []); 

  return (
    <div className="App">
        {posts.logo_background && (<img src={'http://localhost:1337' + posts.logo_background.data.attributes.url} alt="logo_background" />)}
        <p>{posts.slogan}</p>  
        <h1>{posts.restaurant.data.attributes.name}</h1>
        <h1>{posts.description}</h1>
        {posts.restaurant_picture && (<img src={'http://localhost:1337' + posts.restaurant_picture.data.attributes.url} alt="restaurant_picture" />)}
    </div>
  );
};

export default App;