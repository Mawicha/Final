import React from "react";
import './VistaDetallada.css';

function VistaDetallada() {
    return(
        <section className="vista-detallada">
            <img className="imagen-sprite"></img>
            <div className="conjunto-datos">
                <h1 className="datos-nombre"></h1>
                <p className="datos-caract"></p>
                <p className="datos-caract"></p>
                <p className="datos-caract"></p>
            </div>
        </section>
    );
}

export default VistaDetallada;