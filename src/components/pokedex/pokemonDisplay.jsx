import React from "react";
import {makeStyles} from "@material-ui/styles";

import {connect} from "react-redux";

import {pokemonStats} from "../../actions";

const useStyles = makeStyles(() => {
    return {
        "image-display": {
            background:  "gray",
            width: "250%",
            marginTop: "20%",
            marginLeft: "10%"
        },
        "text-display": {
            background: "lightgray",
            padding: "5%",
            marginLeft: "80%",
            marginBottom: "7%",
            width: "100%"
        },
        "flex-group": {
            display: "flex",
            flexDirection: "column"
        }
    }
})

const PokemonDisplay = props => {
    console.log(props)
    const classes = useStyles();
    return (
        <div>
            {props.pokemonStatus && 
                                <div className={classes["flex-group"]}>
                                    <img  className={classes["image-display"]} 
                                    src = {props.pokemonStatus.sprites.front_default} />
                                    <h1 className={classes["text-display"]}>{props.pokemonStatus.name.toUpperCase()}</h1>
                                </div>
                                }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonStatus: state.pokemonStatus
    }
}

export default connect(mapStateToProps, {pokemonStats}) (PokemonDisplay)