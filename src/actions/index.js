import axios from "axios";

export const GET_POKEMON = "GET_POKEMON";
export const POKEMON_STATS = "POKEMON_STATS";
export const FETCH_ABILITIES = "FETCH_ABILITIES";
export const FETCH_MOVES = "FETCH_MOVES";
export const FETCH_STATS = "FETCH_STATS";
export const SET_POKEMON = "SET_POKEMON";

export const getPokemon = () => dispatch => {

    axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => {
                console.log(res)
                dispatch({type: GET_POKEMON, payload: res.data.results})
            })
}

export const pokemonStats = pokemon => dispatch => {


    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(res => {
                console.log(res.data)
                dispatch({type: FETCH_ABILITIES, payload: res.data.abilities})
                dispatch({type: FETCH_MOVES, payload: res.data.moves})
                dispatch({type: FETCH_STATS, payload: res.data.stats})
            })
}