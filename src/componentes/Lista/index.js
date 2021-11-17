import React from "react";
import Celda from "../Celda";
import "./Lista.css";

function Lista() {
    return(
        <section className="lista">
            <Celda />
            <Celda />
            <Celda />
            <Celda />
        </section>
    );
}

export default Lista;