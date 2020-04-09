import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import {getPokemon} from "../../actions";
import PokemonList from "./pokemonList";

const Pokedex = props => {
    const [list, setList] = useState([])

    useEffect(() => {
        props.getPokemon();
    }, [])
    useEffect(() => {
        setList(props.pokemon)
    })
    console.log('adam',props.pokemon)
    console.log('david',list)
    return (
        <div>
            <PokemonList />
            {/* { props.pokemon && props.pokemon.map( critter => {
                return <PokemonList critter={critter} />
            })} */}
            {list && list.map( critter => {
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