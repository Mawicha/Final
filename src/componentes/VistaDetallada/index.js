import React from "react";
import './VistaDetallada.css';

function VistaDetallada(props) {
    const {id, name, sprite, type, height, weight } = props.pokemon; /* Cuando VistaDetallada es llamada, recibe la información del Pokémon seleccionado, esto se hace en el handleOnClick de App.js, pokemon es un objeto de tipo Pokemon (declarado en la carpeta de componentes) */
    return(
        <section className="vista-detallada">
            <img src={sprite} className="imagen-sprite" alt={sprite}></img> {/* Muestra la imagen */}
            <div className="conjunto-datos">{/* División para mostrar los datos del Pokémon seleccionado */}
                <h1 className="datos-nombre">ID: {id} {name}</h1>
                <p className="datos-caract">Type: {type}</p>
                <p className="datos-caract">Height: {height}</p>
                <p className="datos-caract">Weight: {weight}</p>
            </div>
        </section>
    );
}

export default VistaDetallada;