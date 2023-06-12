import styles from './NavBar.module.css'
import SearchBar from '../searchBar/SearchBar';
import { NavLink } from 'react-router-dom';

export default function NavBar (props) {
   return (
      <div className={styles.container}>
          
         <NavLink to='/home'>
            <button>Home</button> 
         </NavLink>
         <NavLink to='/about'>
            <button>About</button>
         </NavLink>
         <NavLink to='/favorites'>
            <button>Favorites</button>
         </NavLink>

         <SearchBar onSearch={props.onSearch} />
        
      </div>
   ); 
}
