import React, { useEffect, useState } from "react";
import Celda from "../Celda";
import "./Lista.css";

function Lista(props) {
    const [pokemon, setPokemon] = useState([]); /* En este estado se guardará el listado de Pokémon obtenido de la llamada al API */
    const [loadingState, setLoadingState] = useState("idle"); /* Indica el estado del API, ya sea reposo, si se está haciendo la llamada y está cargando, si fue exitosa o hubo algún error durante la llamada */
    const [searchState, setSearchState] = useState("");

    useEffect(() => { /* Obtener la lista de Pokémon es un efecto, no una acción que inicie el usuario */
        const getPokemon = async() => { /* Se trata de una función asíncrona, se puede hacer algo más mientras se espera que se realice */
            setLoadingState("loading"); /* Establece el estado de carga a loading, el API está cargando */
            try { /* Función try, en caso de falla, el error es obtenido mediante un catch y la aplicación no se cae por completo */
                let response;
                if (searchState === "") {
                    response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151"); /* Realiza la llamada al API, se usa await antes del fetch porque se espera una promesa, tipo de objeto propio de las funciones asíncronas */
                } else {
                    response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchState}`);
                }
                const data = await response.json(); /* En esta línea se toma la respuesta del API y es leída por completo y su crea un objeto de JavaScript, se usa await porque el return es de tipo promesa también */
                let listaPokemon;
                if (searchState === ""){
                    listaPokemon = data.results /* data es un objeto, para acceder a los resultados de la búsqueda del API, se debe acceder a la propiedad results de este objeto data, el resultado es asignado a listaPokemon, pero antes hay otras funciones por realizar en las siguientes líneas */
                        .slice(0, data.results.length) /* Corta el arreglo que devuelve data.results desde el índice 0 hasta el último en su tamaño, en este caso 151, el último (151) no se incluye en el arreglo resultante, el original no se modifica, solo se crea uno nuevo */
                        .map(items => items) /* Mapea los elementos del arreglo para recordar sus posiciones originales */
                        .flat(); /* Se crea una nueva matriz con todos los elementos de los sub-arreglos concatenados */
                } else {
                    listaPokemon = data;
                }
                
                setPokemon(listaPokemon);
                setLoadingState("complete");
            } catch(error) {
                setLoadingState("error");
            }
        }
        getPokemon();
    }, [searchState]);

    function handleChange(event) {
        const value = event.target.value;
        setSearchState(value);
    }

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
                    <img width="200" alt="loadingIMG" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe48665f-9fb2-4bc1-b2df-60d8fbdd82a0/dcyr9or-c77d5729-8279-4837-868c-8e664b50fe87.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZlNDg2NjVmLTlmYjItNGJjMS1iMmRmLTYwZDhmYmRkODJhMFwvZGN5cjlvci1jNzdkNTcyOS04Mjc5LTQ4MzctODY4Yy04ZTY2NGI1MGZlODcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mP3DK2y0asEU6IZ9-LGszcgOsYHDttCnT3iWi6fHKfU"></img>
                </section>  
            );
        } else if (loadingState === "error") {
            return(
                <section className="lista">
                    <h2>Error, please contact prof. Oak</h2>
                    <img width="200" alt="ErrorIMG" src="https://i.gifer.com/Kjh4.gif"></img>
                </section>  
            );
        } else if (loadingState === "complete" && searchState === "") {
            return(
                <section className="lista">
                    {pokemon.map((pokeClase, id) => {
                        return(
                            <Celda key={id} pokeClase={id} handleOnClick={props.handleOnClick} />
                        )
                    })}
                </section>
            );
        } else if (loadingState === "complete" && searchState !== "") {
            return(
                <section className="lista">
                    <Celda key={pokemon.id - 1} pokeClase={pokemon.id - 1} handleOnClick={props.handleOnClick} />
                </section>
            );
        }
    }

    return(
        <React.Fragment>
            <div>
                <input
                    className="search"
                    name="Search Pokemon"
                    placeholder="Search Pokémon..."
                    value={searchState}
                    onChange={handleChange}
                />
            </div>
            {selectScreen()}
        </React.Fragment>
    );
}

export default Lista;