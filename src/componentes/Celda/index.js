import React from "react";
import "./Celda.css";

function Celda(props) {
    return(
        <button className="celda" onClick={()=> props.handleOnClick(props.pokeClase + 1)}> {/* Cuando se da click en la celda para seleccionar, al evento handleOnClick se le pasa la pokeClase (el ID de esa celda) más 1, para sacar el número del Pokémon, por ejemplo, la celda de Charmander tiene ID 3, pero su número real es 4, entonces se suma esa diferencia */}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokeClase + 1}.png`} alt={props.pokeClase}></img> {/* Para conseguir la iamgen del Pokémon correspondiente, se toma el número de la pokeClase (ID) y se le suma uno, eso se mete en un link que contiene todos los sprites de Pokemon, solo se debe meter el número que tiene en la Pokedex */}
        </button>
    );
}

export default Celda;