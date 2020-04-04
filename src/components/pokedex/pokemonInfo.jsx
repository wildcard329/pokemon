import React from "react";

const PokemonInfo = (props) => {
    console.log(props.critter)
    return (
        <div>
            {props.critter && <p>Name: {props.critter.name}</p>}
        </div>
    )
}

export default PokemonInfo;