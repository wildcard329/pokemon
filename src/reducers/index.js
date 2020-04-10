import {GET_POKEMON} from "../actions";
import {SET_POKEMON} from "../actions";

const initialState ={}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
        case SET_POKEMON:
            console.log('reducer',action.payload)
            console.log(state)
            return {
                ...state,
                pokemonStatus: action.payload
            }

        default:
            return state
    }
}

export default reducer;