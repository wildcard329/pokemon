import React, {useEffect} from "react";
import {connect} from "react-redux";

import {getPokemon} from "../../actions";
import PokemonInfo from "./pokemonInfo";

const Pokedex = props => {

    useEffect(() => {
        props.getPokemon();
    }, [])
    return (
        <div>
            <PokemonInfo />
            { props.pokemon && props.pokemon.map( critter => {
                return <PokemonInfo critter={critter} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, {getPokemon}) (Pokedex)