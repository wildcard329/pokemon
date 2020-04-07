import {GET_POKEMON} from "../actions";
import {POKEMON_STATS} from "../actions";

const initialState ={}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
        case POKEMON_STATS:
            return {
                ...state,
                pokemonStatus: action.payload
            }

        default:
            return state
    }
}

export default reducer;