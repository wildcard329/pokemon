import React, {useState} from "react";
import {connect} from "react-redux";

import {pokemonStats} from "../../actions";

const PokemonList = (props) => {
    const [pokemon, setPokemon] = useState({
        name: ''
    })

    const submitSelection = e => {
        e.preventDefault();
        setPokemon({...pokemon, [e.target.name]: e.target.parentNode.childNodes[0].id})
        console.log(e.target.parentNode.childNodes[0].id)
        console.log(pokemon)
        props.pokemonStats(pokemon)
    }

    return (
        <div>
            {props.critter && <p id={props.critter.name} onClick={submitSelection}>Name: {props.critter.name}</p>}
        </div>
    )
}

export default connect(null, {pokemonStats}) (PokemonList);