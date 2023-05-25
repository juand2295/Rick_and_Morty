import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Detail.module.css'

export default function Detail (props) {

   const {detailId} = useParams()
   console.log(detailId)
   const [character, setCharacter] = useState({})

   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [detailId]);


    return (
      <div className={styles.container}>
         <div>
            <img src={character.image} alt='imagen' />
         </div>

         <div>
            <h1>{character.name}</h1>
            <h3>Status: {character.status}</h3>
            <h3>Species: {character.species}</h3>
            <h3>Gender: {character.gender}</h3>
            <h3>Origin: {character.origin?.name}</h3>
            <h3>Location: {character.location?.name}</h3>
         </div>
      </div>

    ); 
 }
 