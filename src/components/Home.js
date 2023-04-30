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
          <h1>{post?.attributes?.restaurant?.data?.attributes?.name}</h1>
          <h1>{post?.attributes?.description}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;