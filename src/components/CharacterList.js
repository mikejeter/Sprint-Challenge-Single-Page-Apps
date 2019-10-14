import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


  // TODO: Add useState to track data from useEffect
  const CharacterList = props => {
    const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacter = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
     getCharacter();
  }, []);

  return (
    <div className="character-list">
      {characters.map(character => (
        
        <CharacterDetails key={character.id} character={character} />
        
      ))}
      
    </div>
  );
}

function CharacterDetails({ character }) {
  const { name, status, species, type, gender } = character;
  return (
    <div className="main">
      <Link to={`/Character/${character.id}`}>
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