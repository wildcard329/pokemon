import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";

export const getPokemon = () => dispatch => {

    axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => {
                console.log(res)
                dispatch({type: GET_POKEMON, payload: res.data.results})
            })
}