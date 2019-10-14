import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = (props) => {
  const [character, setCharacter] = useState();
 
  useEffect(() => {
    const id = props.match.params.id;

       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            setCharacter(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);

  if (!character) {
    return <div>Loading character information...</div>;
  }

  const { name, status, species, type, gender } = character;
  return (
    <div className="main">
      <div className="main">
        
        <h2>{name}</h2>
        <div className="main">
          Status: <em>{status}</em>
        </div>
        <div className="main">
          Species: <strong>{species}</strong>
        </div>
        <div className="main">
          Type: <strong>{type}</strong>
        </div>
        <div className="main">
          Gender: <strong>{gender}</strong>
        </div>
      </div>
      </div>
  );
}

export default Character;