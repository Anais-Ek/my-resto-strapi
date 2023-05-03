import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Menu.css";

const Menu = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/menu?populate=*")
      .then((response) => {
        setMenuData(response.data.data.attributes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!menuData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="menu">
      <h1>{menuData.Title_Drinks}</h1>

      <ul>
        {menuData.drinks_items.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.price}$</p>
          </li>
        ))}
      </ul>

      <h1>{menuData.Title_Main_courses}</h1>

      <ul>
        {menuData.main_courses_items.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p >{item.description}</p>
            <p>{item.price}$</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
