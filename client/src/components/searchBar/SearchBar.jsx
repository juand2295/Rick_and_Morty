import { useState } from 'react';
import styles from './SearchBar.module.css'


export default function SearchBar(props) {

   const [character, setCharacter] = useState('')
   const handleChange = (event) => {
      const {value} = event.target
      console.log(value)
      setCharacter(value)
   }


   return (
      <div className={styles.container}>
         <input
             type='search' 
             placeholder="Buscar personaje" 
             onChange={handleChange}
             /> 
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   ); 
}
