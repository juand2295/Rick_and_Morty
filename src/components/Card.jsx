
export default function Card({name,status,species,gender,origin,image,onClose}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>name: {name}</h2>
         <h2>status: {status}</h2>
         <h2>species: {species}</h2>
         <h2>gender: {gender}</h2>
         <h2>origin: {origin}</h2>
         <img src={image} alt='imagen' />
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
