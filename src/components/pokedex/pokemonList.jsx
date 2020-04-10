import React from "react";
import {connect} from "react-redux";

import {makeStyles} from "@material-ui/styles";

import {pokemonStats} from "../../actions";

const useStyles = makeStyles(() => {
    return{
        "list-display": {
            opacity: ".6",
            background: "lightgray",
            width: "30%",
            margin: "0 auto",
            padding: "2%"
        },
        "list-light": {
            background: "blue",
            height: "10px",
            width: "10px",
            marginLeft: "32%",
            borderRadius: "50%"
        }
    }
})

const PokemonList = (props) => {
    const classes = useStyles();

    const submitSelection = e => {
        console.log(e.target.parentNode.childNodes[0])
        e.preventDefault();
        props.pokemonStats(props.critter.name)
        e.target.parentNode.childNodes[0].style.background = "green"
    }

    return (
        <div>
            {props.critter && <><div className={classes["list-light"]}></div>
            <p className={classes["list-display"]} onClick={submitSelection}>Name: {props.critter.name}</p></>}
        </div>
    )
}

export default connect(null, {pokemonStats}) (PokemonList);