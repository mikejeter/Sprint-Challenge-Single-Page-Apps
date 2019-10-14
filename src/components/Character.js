import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Character = (props) => {
  const [character, setCharacter] = useState();
 
  useEffect(() => {
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            setCharacter(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!character) {
    return <div>Loading movie information...</div>;
  }

  const { name, status, species, type, gender } = characters;
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