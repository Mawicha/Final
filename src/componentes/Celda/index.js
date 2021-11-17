import React from "react";
import "./Celda.css";

function Celda(props) {
    return(
        <button className="celda">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokeClase + 1}.png`}></img>
        </button>
    );
}

export default Celda;