import React, {useState} from "react";

import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => {
    return{
        "lcd-display": {
            height: "30px",
            width: "30px",
            background: "darkred",
            borderRadius: "50%",
            marginLeft: "3%",
            marginTop: "2%"
        },
        "flex-group": {
            display: "flex",
            alignItems: "space-between"
        },
        "glint": {
            background: "white",
            height: "6px",
            width: "10px",
            marginLeft: "40%",
            marginTop: "10%",
            borderRadius: "50%"
        },
        "second-glint": {
            background: "white",
            opacity: ".6",
            height: "12px",
            width: "8px",
            borderRadius: "50%",
            marginLeft: "70%",
            marginTop: "10%"
        }
    }
})

const Header = () => {
    const [pokemon, setPokemon] = useState('')
    const classes = useStyles()
    const hadleChange = e => {
        e.preventDefault();
        setPokemon({[e.target.name]: e.target.value})
    }
    return(
        <div>
            <div className={classes["flex-group"]}>
                <div className={classes["lcd-display"]}>
                    <div className={classes["glint"]}></div>
                    <div className={classes["second-glint"]}></div>
                </div>
                <div className={classes["lcd-display"]}>
                    <div className={classes["glint"]}></div>
                    <div className={classes["second-glint"]}></div>
                </div>
                <div className={classes["lcd-display"]}>
                    <div className={classes["glint"]}></div>
                    <div className={classes["second-glint"]}></div>
                </div>
            </div>
        </div>
    )
}

export default Header;