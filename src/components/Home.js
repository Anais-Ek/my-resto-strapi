import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    Axios.get('http://localhost:1337/api/home?populate=*')
      .then(response => {
        setPosts([response.data?.data]);

      })
      .catch(error => {
        console.error('Erreur de requête HTTP :', error);
      });
  }, []); 

  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post?.id}>
          <p>{post?.attributes?.slogan}</p>
          <img src={`http://localhost:1337${post?.attributes?.logo_background?.data?.attributes?.url}`} alt="Logo Background" />
          <h1>{post?.attributes?.restaurant?.data?.attributes?.name}</h1>
          <h1>{post?.attributes?.description}</h1>
          <p>Opening Hours : {post?.attributes?.restaurant_opening_hours} - {post?.attributes?.restaurant_closing_hours}</p>
          <p>Opening Days : {post?.attributes?.opening_days}</p>
          <img src={`http://localhost:1337${post?.attributes?.restaurant_picture?.data?.attributes?.url}`} alt="restaurant picture" />
          {post?.attributes?.restaurants_name?.data?.map((restaurant) => (<p key={restaurant?.id}>{restaurant?.attributes?.name}</p>))}
          <h1>{post?.attributes?.restaurant?.data?.attributes?.phone_number}</h1>
          <h1>{post?.attributes?.restaurant?.data?.attributes?.restaurant_mail}</h1>
        </div>
      ))}
    </div>

  );
};

export default App;