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

          <section className="banner">
            <div className="content">
              <h1>{post?.attributes?.restaurant?.data?.attributes?.name}</h1>
              <h2>Speciality : {post?.attributes?.restaurant?.data?.attributes?.speciality}</h2>
            </div>
            <img src={`http://localhost:1337${post?.attributes?.logo_background?.data?.attributes?.url}`} alt="Logo Background" />
          </section>

          <section className="slogan">
            <h1>{post?.attributes?.slogan}</h1>
          </section>

          <section className="us">
          <div className="image-container">
            <img src={`http://localhost:1337${post?.attributes?.restaurant_picture?.data?.attributes?.url}`} alt="restaurant picture" />
            </div>
            <div className="text-container">
            <h1>About us ... </h1>
              <p>{post?.attributes?.description}</p>
              <h2>Opening Hours : {post?.attributes?.restaurant_opening_hours} - {post?.attributes?.restaurant_closing_hours}</h2>
              <h2>Opening Days : {post?.attributes?.opening_days}</h2>
            </div>
          </section>

          <section className="restaurants">
          <h1>Our restaurants</h1>
            <ul>
              {post?.attributes?.restaurants_name?.data?.map((restaurant) => (
                <li key={restaurant?.id}>{restaurant?.attributes?.name}</li>
              ))}
            </ul>
          </section>

          <section className="contact">
            <div class="reservation-card">
              <div class="card-body">
                <h1 class="card-title">Make a reservation</h1>
                <a href="/contact" class="btn">Contact us</a>
              </div>
            </div>
          </section>

        </div>
      ))}
    </div>

  );
};

export default App;