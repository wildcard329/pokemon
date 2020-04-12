import React from "react";
import {useStyles} from "./styles.js";

import {connect} from "react-redux";

import {pokemonStats} from "../../actions";

const PokemonDisplay = props => {
    console.log(props)
    const classes = useStyles();
    return (
        <div>
            {props.pokemonStatus && 
                                    <img  className={classes["image-display"]} 
                                    src = {props.pokemonStatus.sprites.front_default} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonStatus: state.pokemonStatus
    }
}

export default connect(mapStateToProps, {pokemonStats}) (PokemonDisplay)