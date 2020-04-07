import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";
export const POKEMON_STATS = "POKEMON_STATS";
export const VIEW_STATS = "VIEW_STATS";

export const getPokemon = () => dispatch => {

    axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => {
                console.log(res)
                dispatch({type: GET_POKEMON, payload: res.data.results})
            })
}

export const pokemonStats = request => dispatch => {

    axios.get(`https://pokeapi.co/api/v2/pokemon/${request}`)
            .then(res => {
                console.log(res)
                dispatch({type: VIEW_STATS, payload: res})
            })
}