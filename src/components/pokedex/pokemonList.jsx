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
            padding: "2%",
            borderBottom: "2px solid white",
            borderRight: "2px solid white"
        },
        "list-light": {
            background: "darkred",
            height: "15px",
            width: "15px",
            marginLeft: "75%",
            borderRadius: "50%",
        },
        "flex-group": {
            display: "flex",
            justifyContent: "center"
        },
        "glint": {
            background: "white",
            height: "2px",
            width: "2px",
            marginLeft: "47%",
            marginTop: "437"
        }
    }
})

const PokemonList = (props) => {
    const classes = useStyles();

    const backToBlue = e => {
        e.preventDefault();
        console.log(e.target.parentNode.parentNode.childNodes[0].childNodes[0])
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].style.background = "blue"
    }

    const submitSelection = e => {
        e.preventDefault();
        props.pokemonStats(props.critter.name)
        e.target.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[0].style.background = "green"
    }

    return (
        <div>
            {props.critter && 
            <div className={classes["flex-group"]}>
                <div>
                    <div className={classes["list-light"]}><div className={classes["glint"]}></div></div>
                    <div className={classes["list-light"]}><div className={classes["glint"]}></div></div>
                </div>
                <p className={classes["list-display"]} onMouseUp={backToBlue} onMouseDown={submitSelection}>Name: {props.critter.name.toUpperCase()}</p>
            </div>
            }
        </div>
    )
}

export default connect(null, {pokemonStats}) (PokemonList);