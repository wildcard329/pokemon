import React from "react";
import {connect} from "react-redux";

import {pokemonStats} from "../../actions";
import PokemonStats from "./pokemonStats";
import PokemonImage from "./pokemonImage";

const PokemonDisplay = props => {
    console.log('main display',props)
    return (
        <div>
            {props.pokemonStatus && <img src = {props.pokemonStatus.sprites.front_default} />}
            {/* <PokemonImage />
            { props.pokemon && props.pokemonStatus.sprites.forEach( image => {
                return <PokemonImage image={image} />
            })} */}
            {/* <PokemonStats />
            { props.pokemon && props.pokemonStatus.abilities.map( stats => {
                return <PokemonStats stats={stats} />
            })} */}
        </div>
    )
}

const mapStateToProps = state => {
    console.log('display', state)
    return {
        pokemonStatus: state.pokemonStatus
    }
}

export default connect(mapStateToProps, {pokemonStats}) (PokemonDisplay)