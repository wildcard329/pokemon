import React from "react";
import {connect} from "react-redux";

import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => {
    return {
        "stat-display": {
            background: 'lightgray',
            marginRight: "8%",
            padding: '2%'
        }
    }
})

const PokemonStats = (props) => {
    const classes = useStyles();
    return (
        <div>
            {props.pokemonStatus && <h2 className={classes["stat-display"]}>Abilites</h2>}
            {props.pokemonStatus && props.pokemonStatus.abilities.map(ability => {
                return <p className={classes["stat-display"]}>{ability.ability.name.toUpperCase()} </p>
            })}
            {props.pokemonStatus && <h2 className={classes["stat-display"]}>Base Stats</h2>}
            {props.pokemonStatus && props.pokemonStatus.stats.map(stat => {
                return <p className={classes["stat-display"]}>{stat.stat.name.toUpperCase()}: {stat.base_stat} </p>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemonStatus: state.pokemonStatus
    }
}

export default connect(mapStateToProps, {})(PokemonStats);