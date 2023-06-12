import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card(props) {
   const {id, name,status,species,gender,image,onClose, addFav, removeFav, myFavorites} = props

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav === true){
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav(props)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>

         <div className={styles.buttonContainer}>

            {
               isFav ? (
                  <button className={styles.favorite} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }

            <button className={styles.close} onClick={onClose}>X</button>

         </div>

         <Link to={`/detail/${id}`}>
         <img src={image} alt='imagen' />
         </Link>

         <div className={styles.text}>
            <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            </Link>
            <h3>Status: {status}</h3>
            <h3>Species: {species}</h3>
            <h3>Gender: {gender}</h3>
            {/* <h3>Origin: {origin}</h3> */}
         </div>

       

      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)