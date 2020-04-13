import React from "react";
import {connect} from "react-redux";

import {useStyles} from "./styles.js";

import {pokemonStats} from "../../actions";

const PokemonList = (props) => {
    console.log("list",props)
    const classes = useStyles();

    const submitSelection = e => {
        e.preventDefault();
        props.pokemonStats(props.critter.name)
    }

    return (
        <div>
            {props.critter && 
            <div className={classes["flex-group"]}>
                <div style={{marginTop: "4%", marginLeft: "17%"}}>
                    {(props.isBeingViewed.includes(props.critter.name)) 
                    ? <div className={classes["led-viewed"]}><div className={classes["glint"]}></div></div> 
                    : props.imagePresent 
                    ? <div className={classes["led-available"]}><div className={classes["glint"]}></div></div> 
                    : <div className={classes["led-off"]}><div className={classes["glint"]}></div></div>}
                    {(props.hasBeenViewed.includes(props.critter.name)) 
                    ? <div className={classes["led-viewed"]}><div className={classes["glint"]}></div></div> 
                    : props.imagePresent 
                    ? <div className={classes["led-notViewed"]}><div className={classes["glint"]}></div></div> 
                    : <div className={classes["led-off"]}><div className={classes["glint"]}></div></div>}
                </div>
                <p className={classes["list-display"]} onClick={submitSelection}>Name: {props.critter.name.toUpperCase()}</p>
            </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        imagePresent: state.imagePresent,
        hasBeenViewed: state.hasBeenViewed,
        isBeingViewed: state.isBeingViewed
    };
};

export default connect(mapStateToProps, {pokemonStats}) (PokemonList);