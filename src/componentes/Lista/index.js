import React, { useEffect, useState } from "react";
import Celda from "../Celda";
import "./Lista.css";

function Lista() {
    const [pokemon, setPokemon] = useState([]);
    const pokeAPILink = "";

    useEffect(() => {
        const getPokemon = async() => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await response.json();
            const listaPokemon = data.results
                .slice(0, data.results.length)
                .map(items => items)
                .flat();
            setPokemon(listaPokemon);
        }
        getPokemon();
    }, []);

    return(
        <section className="lista">
           {pokemon.map((pokeClase, id) => {
               return(
                   <Celda key={id} pokeClase={id} />
               )
           })}
        </section>
    );
}

export default Lista;