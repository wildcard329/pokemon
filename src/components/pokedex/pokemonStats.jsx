import React from "react";
import {connect} from "react-redux";

import {pokemonStats} from "../../actions";

const PokemonStats = (props) => {
    console.log('stats display',props)
    return (
        <div>
            <h2>Moves</h2>
            {props.pokemonStatus && props.pokemonStatus.moves.map(move => {
                return <span>{move.move.name} </span>
            })}
            <h2>Base Stats</h2>
            {props.pokemonStatus && props.pokemonStatus.stats.map(stat => {
                return <p>{stat.stat.name}: {stat.base_stat} </p>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonStatus: state.pokemonStatus
    }
}

export default connect(mapStateToProps, {})(PokemonStats);