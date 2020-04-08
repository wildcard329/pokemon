import React from "react";
import {connect} from "react-redux";

import {pokemonStats} from "../../actions";
import PokemonStats from "./pokemonStats";
import PokemonImage from "./pokemonImage";

const PokemonDisplay = props => {
    return (
        <div>
            {props.pokemonStatus && <img src = {props.pokemonStatus.sprites.front_default} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonStatus: state.pokemonStatus
    }
}

export default connect(mapStateToProps, {pokemonStats}) (PokemonDisplay)