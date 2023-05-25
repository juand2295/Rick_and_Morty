import { useSelector } from "react-redux";
import Card from "../card/Card";
import styles from "./Favorites.module.css"
import { orderCards, filterCards, removeFav } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Favorites (props) {

    const {myFavorites} = useSelector((state) => state)
    
    const dispatch = useDispatch()

    const handleOrder = (event) => {
      dispatch(orderCards(event.target.value))
      setAux(!aux)
    }

    const handleFilter = (event) => {
      dispatch(filterCards(event.target.value))
    }

    const[aux, setAux] = useState(false)
    
    return (
      <div>
         <select name="order" defaultValue={'DEFAULT'} onChange={handleOrder}>
            <option value="DEFAULT" disabled>-Select Order-</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
         </select>
         <select name="gender" defaultValue={'DEFAULT'} onChange={handleFilter}>
            <option value="DEFAULT" disabled>-Filter Gender-</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
         </select>

         <div className={styles.divCards}>
            {
               // vamos a mapear por cada personaje una Card (lo que hacemos en vez de poner character como arg es destructuring)
               myFavorites.map((element, index) => {
                  return <Card key={index}// Card esta esperando 7 props (asi que las tengo que poner)
                  id = {element.id}
                  name = {element.name}
                  status = {element.status}
                  species = {element.species}
                  gender = {element.gender}
                  origin = {element.origin.name}
                  image = {element.image}
                  // tambien hay que pasarle onClose, que esa no hace parte del objeto
                  onClose = {() => element.onClose(element.id)}
                  />
               })
            }
         </div>
       </div>
    ); 
 }

//  const mapStateToProps = (state) => {
//     return {
//        myFavorites: state.myFavorites
//     }
//  }

//  const mapDispatchToProps = (dispatch) => {
//     return {
//         removeFav: (id) =>  dispatch(removeFav(id))
//     }
//  }

//  export default connect(mapStateToProps, mapDispatchToProps)(Favorites)