import {GET_POKEMON} from "../actions";
import {POKEMON_STATS} from "../actions";
import {SET_POKEMON} from "../actions";

const initialState ={}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
        case POKEMON_STATS:
            console.log('reducer',action.payload)
            return {
                ...state,
                pokemonStatus: action.payload
            }
        case SET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }

        default:
            return state
    }
}

export default reducer;