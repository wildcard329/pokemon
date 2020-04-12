import React from "react";
import {connect} from "react-redux";

import {useStyles} from "./styles.js";

import {pokemonStats} from "../../actions";

const PokemonList = (props) => {
    const classes = useStyles();

    const backToBlue = e => {
        e.preventDefault();
        let marbles = Array.from(e.target.parentNode.parentNode.parentNode.childNodes)
        marbles.shift();
        marbles.map(node => {
            return node.childNodes[0].childNodes[0].childNodes[0].style.background = "blue"
        })
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.background = "blue"
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].style.background = "green"
        e.target.style.background = "lightgray"
        e.target.style.opacity = ".6"
    }

    const submitSelection = e => {
        e.preventDefault();
        props.pokemonStats(props.critter.name)
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].style.background = "green"
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].style.background = "green"
        e.target.style.background = "white"
    }

    return (
        <div>
            {props.critter && 
            <div className={classes["flex-group"]}>
                <div style={{marginTop: "4%", marginLeft: "17%"}}>
                    <div className={classes["led-off"]}><div className={classes["glint"]}></div></div>
                    <div className={classes["led-off"]}><div className={classes["glint"]}></div></div>
                </div>
                <p className={classes["list-display"]} onMouseUp={backToBlue} onMouseDown={submitSelection}>Name: {props.critter.name.toUpperCase()}</p>
            </div>
            }
        </div>
    )
}

export default connect(null, {pokemonStats}) (PokemonList);