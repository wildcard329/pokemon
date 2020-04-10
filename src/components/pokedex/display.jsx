import React from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import Pokedex from "./pokedex";
import PokemonStats from "./pokemonStats";
import Header from "./header";
import Footer from "./footer";
import PokemonDisplay from "./pokemonDisplay";

const useStyles = makeStyles(() => {
    return {
        "main": {
            background: "red",
            textAlign: "center"
        },
        "list": {
            background: "red",
            textAlign: "center"
        },
        "image-display": {
            background: "black",
            display: "flex",
            justifyContent:"space-between",
            height: "100vh"
        }
    }
})

const Display = () => {
    const classes = useStyles();
    return(
        <div className={classes["main"]}>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid className={classes["list"]} item xs={6}>
                    <Pokedex />
                </Grid>
                <Grid className={classes["image-display"]} item xs={6}>
                    <PokemonDisplay />
                    <PokemonStats />
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    )
}

export default Display;