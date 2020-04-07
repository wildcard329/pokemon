import React from "react";

const SearchPage = (props) => {
    console.log(props.critter)
    return (
        <div>
            {props.critter && <p>Name: {props.critter.name}</p>}
        </div>
    )
}

export default SearchPage;