import React from "react";
import "./Celda.css";

function Celda(props) {
    return(
        <button className="celda" onClick={()=> props.handleOnClick(props.pokeClase + 1)}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokeClase + 1}.png`} alt={props.pokeClase}></img>
        </button>
    );
}

export default Celda;