import React from "react";
import {connect} from "react-redux";

const PokemonStats = (props) => {
    console.log('stats display',props)
    return (
        <div>
            <h2>Abilites</h2>
            {props.pokemonStatus && props.pokemonStatus.abilities.map(ability => {
                return <p>{ability.ability.name} </p>
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