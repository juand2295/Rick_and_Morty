export default function SearchBar(props) {
   return (
      <div>
         <input type='search' placeholder="Buscar personaje"/>
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   ); 
}
