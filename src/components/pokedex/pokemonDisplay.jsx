import React from "react";
import {connect} from "react-redux";

import {pokemonStats} from "../../actions";

const PokemonDisplay = props => {
    return (
        <div>
            {props.pokemonStatus && <img style={{width: "50%"}} src = {props.pokemonStatus.sprites.front_default} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonStatus: state.pokemonStatus
    }
}

export default connect(mapStateToProps, {pokemonStats}) (PokemonDisplay)