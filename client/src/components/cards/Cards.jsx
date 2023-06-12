import Card from '../card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const {characters} = props
   
   return (
      <div className={styles.divCards}>
         {
            // vamos a mapear por cada personaje una Card (lo que hacemos en vez de poner character como arg es destructuring)
            characters.map(({id, name, status, species, gender,origin, image}) => {
               return <Card key={id}// Card esta esperando 7 props (asi que las tengo que poner)
               id = {id}
               name = {name}
               status = {status}
               species = {species}
               gender = {gender}
               origin = {origin.name}
               image = {image}
               // tambien hay que pasarle onClose, que esa no hace parte del objeto
               onClose = {() => props.onClose(id)}
               />
            })
         }
      </div>
   )
}
