import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


  // TODO: Add useState to track data from useEffect
  const CharacterList = props => {
    const [character, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => {
          setCharacters(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
     getCharacters();
  }, []);

  return (
    <section className="character-list">
      {character.map(characters => (
        
        <CharacterDetails key={characters.id} characters={characters} />
        
      ))}
      
    </section>
  );
}

function CharacterDetails({ characters }) {
  const { name, status, species, type, gender } = characters;
  return (
    <div className="main">
      <Link to={`/Character/${characters.id}`}>
      <h2>{name}</h2>
       </Link>
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
      ))}
    </div>
  );
}

export default CharacterList;