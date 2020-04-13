import {GET_POKEMON} from "../actions";
import {SET_POKEMON} from "../actions";

const initialState ={
    imagePresent: false,
    hasBeenViewed: [],
    isBeingViewed: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
        case SET_POKEMON:
            console.log('reducer',action.payload)
            return {
                ...state,
                pokemonStatus: action.payload,
                imagePresent: true,
                hasBeenViewed: [...state.hasBeenViewed, action.payload.name],
                isBeingViewed: [action.payload.name]
            }

        default:
            return state
    }
}

export default reducer;