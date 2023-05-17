import styles from './Card.module.css'

export default function Card({name,status,species,gender,origin,image,onClose}) {
   return (
      <div className={styles.container}>
         
         <div className={styles.buttonContainer}>
            <button onClick={onClose}>X</button>
         </div>

         <img src={image} alt='imagen' />

         <div className={styles.text}>
            <h2>{name}</h2>
            <h3>Status: {status}</h3>
            <h3>Species: {species}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Origin: {origin}</h3>
         </div>

       
         
        
         

      </div>
   );
}

// export default function Card(props) {
//    return (
//       <div>
//          <button onClick={props.onClose}>X</button>
//          <h2>name: {props.name}</h2>
//          <h2>status: {props.status}</h2>
//          <h2>species: {props.species}</h2>
//          <h2>gender: {props.gender}</h2>
//          <h2>origin: {props.origin}</h2>
//          <img src={props.image} alt='imagen' />
//       </div>
//    );
// }
