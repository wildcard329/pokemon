import React from "react";
import {connect} from "react-redux";

import {pokemonStats} from "../../actions";

const PokemonList = (props) => {

    const submitSelection = e => {
        e.preventDefault();
        props.pokemonStats(props.critter.name)
    }

    return (
        <div>
            {props.critter && <p onClick={submitSelection}>Name: {props.critter.name}</p>}
        </div>
    )
}

export default connect(null, {pokemonStats}) (PokemonList);