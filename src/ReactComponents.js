import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReactComponents() {
    const [message, setMessage] = useState('');
    
    useEffect(() => {
      axios.get('http://localhost:8000/api/react-components/')
        .then(response => {
          setMessage(response.data.message);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return (
      <div>
        <h1>React Components!</h1>
        <p>{message}</p>
      </div>
    );
  
  }

  export default ReactComponents;