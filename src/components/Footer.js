import "./css/Footer.css";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { FaInstagram, FaFacebook } from "react-icons/fa";


const Footer = () => {
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
    <footer>
      
      <div className="App">
      {posts.map((post) => (
        <div key={post?.id}>
        <div className="footer-content">
        <h1>{post?.attributes?.restaurant?.data?.attributes?.name}</h1>
        <ul className="socials">
          <li><a href="#"><FaFacebook size={30} color="#2D86FF" /></a></li>
          <li><a href="#"><FaInstagram size={30} color="#C13584" /></a></li>
        </ul>
        <h3>Contact us </h3>
        <h4>{post?.attributes?.restaurant?.data?.attributes?.phone_number} - {post?.attributes?.restaurant?.data?.attributes?.restaurant_mail}</h4>
        <p>Made with <span class="heart">&#10084;</span> by Anais - copyright &copy; <a href="/">ANADEV</a></p>
      </div>
      </div>
      ))}
    </div>
    </footer>
    

  );
};

export default Footer;