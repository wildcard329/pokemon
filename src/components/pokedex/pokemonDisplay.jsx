import React from "react";
import {makeStyles} from "@material-ui/styles";

import {connect} from "react-redux";

import {pokemonStats} from "../../actions";

const useStyles = makeStyles(() => {
    return {
        "image-display": {
            background:  "gray",
            width: "475%",
            marginTop: "20%",
            marginLeft: "10%"
        }
    }
})

const PokemonDisplay = props => {
    const classes = useStyles();
    return (
        <div>
            {props.pokemonStatus && <img  className={classes["image-display"]} src = {props.pokemonStatus.sprites.front_default} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonStatus: state.pokemonStatus
    }
}

export default connect(mapStateToProps, {pokemonStats}) (PokemonDisplay)