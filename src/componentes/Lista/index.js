import React, { useEffect, useState } from "react";
import Celda from "../Celda";
import "./Lista.css";

function Lista(props) {
    const [pokemon, setPokemon] = useState([]); /* En este estado se guardará el listado de Pokémon obtenido de la llamada al API */
    const [loadingState, setLoadingState] = useState("idle"); /* Indica el estado del API, ya sea reposo, si se está haciendo la llamada y está cargando, si fue exitosa o hubo algún error durante la llamada */

    useEffect(() => { /* Obtener la lista de Pokémon es un efecto, no una acción que inicie el usuario */
        const getPokemon = async() => { /* Se trata de una función asíncrona, se puede hacer algo más mientras se espera que se realice */
            setLoadingState("loading"); /* Establece el estado de carga a loading, el API está cargando */
            try { /* Función try, en caso de falla, el error es obtenido mediante un catch y la aplicación no se cae por completo */
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151"); /* Realiza la llamada al API, se usa await antes del fetch porque se espera una promesa, tipo de objeto propio de las funciones asíncronas */
                const data = await response.json(); /* En esta línea se toma la respuesta del API y es leída por completo y su crea un objeto de JavaScript, se usa await porque el return es de tipo promesa también */
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