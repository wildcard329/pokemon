import {GET_POKEMON} from "../actions";

const initialState ={}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }

        default:
            return state
    }
}

export default reducer;