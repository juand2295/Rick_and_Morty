import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [], // el que se ve en pantalla siempre cuando filtro
    allCharacters: [] // No muta con los filtros, cuando quito los filtros myFavorites va tomar lo que haya aca
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            const newFavorites = state.allCharacters.filter(character => character.id !== Number(action.payload))
            return {
                ...state,
                myFavorites: newFavorites,
                allCharacters: newFavorites
            }
        case FILTER:
            const filteredChar = state.allCharacters.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFavorites: filteredChar
            }
        case ORDER:
            const newOrder = state.allCharacters.sort((a,b) => {
                if (action.payload === 'A'){
                    if (a.id < b.id){
                      return -1
                    }
                    if (a.id > b.id){
                      return 1
                    }
                }
                if (action.payload === 'D'){
                    if (a.id < b.id){
                      return 1
                    }
                    if (a.id > b.id){
                      return -1
                    }
                }
            })
            return {
                ...state,
                myFavorites: newOrder
            }
        default:
            return state
    }
}

export default reducer;