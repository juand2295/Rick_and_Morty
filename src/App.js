import React, { useState, useEffect } from 'react';
import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navBar/NavBar';
// import characters from './data.js';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';


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

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== Number(id)))
   }

   const location = useLocation().pathname
   console.log(location)

   // Esta parte es para simular la base de datos y el login
   const navigate = useNavigate();
   const [access, setAccess] = useState(false)
   const EMAIL = 'juandavid@hotmail.com'
   const PASSWORD = 'juandavid1'

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


   return (
      <div className='App'>

         {location !== '/' && < NavBar onSearch={onSearch}/>}

         <Routes>
            <Route path='/favorites' element={<Favorites/>} onClose={onClose}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/detail/:detailId' element={<Detail/>}/> 
            <Route path='/' element={<Form login={login}/>}/>
         </Routes>
         
         
      </div>
   );
}

export default App;
