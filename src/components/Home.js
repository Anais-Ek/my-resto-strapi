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

          <section class="banner">
            <div class="content">
              <h1>{post?.attributes?.restaurant?.data?.attributes?.name}</h1>
              <h2>Speciality : {post?.attributes?.restaurant?.data?.attributes?.speciality}</h2>
            </div>
            <img src={`http://localhost:1337${post?.attributes?.logo_background?.data?.attributes?.url}`} alt="Logo Background" />
          </section>

          <section class="slogan">
            <h1>{post?.attributes?.slogan}</h1>
          </section>

          <section class="us">
          <div class="image-container">
            <img src={`http://localhost:1337${post?.attributes?.restaurant_picture?.data?.attributes?.url}`} alt="restaurant picture" />
            </div>
            <div class="text-container">
            <h1>About us ... </h1>
              <p>{post?.attributes?.description}</p>
              <h2>Opening Hours : {post?.attributes?.restaurant_opening_hours} - {post?.attributes?.restaurant_closing_hours}</h2>
              <h2>Opening Days : {post?.attributes?.opening_days}</h2>
            </div>
          </section>

          

          {post?.attributes?.restaurants_name?.data?.map((restaurant) => (<p key={restaurant?.id}>{restaurant?.attributes?.name}</p>))}
          <h1>{post?.attributes?.restaurant?.data?.attributes?.phone_number}</h1>
          <h1>{post?.attributes?.restaurant?.data?.attributes?.restaurant_mail}</h1>
        </div>
      ))}
    </div>

  );
};

export default App;