import React, { useState } from 'react';
import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navBar/NavBar';
import characters from './data.js';
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([])

   function onSearch(character) {
      axios(`https://rickandmortyapi.com/api/character/${character}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   return (
      <div className='App'>
         < NavBar onSearch={onSearch}/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
