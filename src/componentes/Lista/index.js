import React, { useEffect, useState } from "react";
import Celda from "../Celda";
import "./Lista.css";

function Lista(props) {
    const [pokemon, setPokemon] = useState([]);
    const [loadingState, setLoadingState] = useState("idle");

    useEffect(() => {
        const getPokemon = async() => {
            setLoadingState("loading");
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
                const data = await response.json();
                const listaPokemon = data.results
                    .slice(0, data.results.length)
                    .map(items => items)
                    .flat();
                setPokemon(listaPokemon);
                setLoadingState("complete");
            } catch(error) {
                setLoadingState("error");
            }
        }
        getPokemon();
    }, []);

    function selectScreen() {
        if(loadingState === "idle") {
            return(
                <section className="lista">
                    <h2>Idle</h2>
                </section>  
            );
        } else if (loadingState === "loading") {
            return(
                <section className="lista">
                    <h2>Loading</h2>
                </section>  
            );
        } else if (loadingState === "error") {
            return(
                <section className="lista">
                    <h2>Error</h2>
                </section>  
            );
        } else if (loadingState === "complete") {
            return(
                <section className="lista">
                    {pokemon.map((pokeClase, id) => {
                        return(
                            <Celda key={id} pokeClase={id} handleOnClick={props.handleOnClick} />
                        )
                    })}
                </section>
            );
        } else {
            return(<h2>Empty</h2>);
        }
    }

    return(
        <React.Fragment>
            <div>
                <input />
            </div>
            {selectScreen()}
        </React.Fragment>
    );
}

export default Lista;