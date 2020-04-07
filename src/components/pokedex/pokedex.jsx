import React, {useEffect} from "react";
import {connect} from "react-redux";

import {getPokemon} from "../../actions";
import PokemonList from "./pokemonList";

const Pokedex = props => {

    useEffect(() => {
        props.getPokemon();
    }, [])
    return (
        <div>
            <PokemonList />
            { props.pokemon && props.pokemon.map( critter => {
                return <PokemonList critter={critter} />
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