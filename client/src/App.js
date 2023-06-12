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

   async function onSearch(id) {
      const duplicatedId = characters.filter(char => char.id == id);
      if (duplicatedId.length) return alert('The character already exist')
   
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== Number(id)))
   }

   const location = useLocation().pathname
   console.log(location)

   // *** LOGIN ***
   const navigate = useNavigate();
   const [access, setAccess] = useState(false)

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
         
      } catch (error) {
         console.log(error.message)
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
