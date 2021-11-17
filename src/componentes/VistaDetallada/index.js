import React from "react";
import './VistaDetallada.css';

function VistaDetallada(props) {
    const {id, name, sprite, type, height, weight } = props.pokemon;
    return(
        <section className="vista-detallada">
            <img src={sprite} className="imagen-sprite" alt={sprite}></img>
            <div className="conjunto-datos">
                <h1 className="datos-nombre">ID: {id} {name}</h1>
                <p className="datos-caract">Type: {type}</p>
                <p className="datos-caract">Height: {height}</p>
                <p className="datos-caract">Weight: {weight}</p>
            </div>
        </section>
    );
}

export default VistaDetallada;