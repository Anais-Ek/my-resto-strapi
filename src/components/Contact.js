import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const url= "http://localhost:1337/api/contacts?populate=*"


const App = () => {
  const [links, setLinks] = React.useState([]);

    React.useEffect(() => {
        Axios.post(url).then((response) => {
            setLinks(response.data.data.attributes);
        });
    }, []);

    return (
      <div className="App">
        <p>TESTTT</p>
      </div>
    );
  
  };
  
  export default App;