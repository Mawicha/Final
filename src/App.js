import React, { Component } from "react";
import "./App.css";
import { Lista, VistaDetallada, Pokemon, Home } from "./componentes"; /* Se importan los componentes que fueron exportados en el index.js de componentes */
import { Route, NavLink } from "react-router-dom";

class App extends Component { /* Se maneja como componente porque se necesita la creación de los elementos al momento de cargar la app */
  constructor() {
    super();
    this.state = {
      pokemon: {} /* En este estado se almacena el Pokémon que se está viendo actualmente, incluyendo su información */
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) { /* Método que maneja el click sobre una celda de Pokémon, para mostrar la información detallada en la VistaDetallada */
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) /* Hace una llamada al API, con el número del Pokémon que se seleccionó (basado en la posición de este en el arreglo de celdas + 1, inicia con índice 0 y por eso debe sumarse 1) */
    .then(response => response.json()) /* Lee la respuesta y la convierte en un objeto de JavaScript */
    .then(data => {
      const pokemon = new Pokemon(data); /* Crea un nuevo objeto de tipo Pokemon y se guarda en la variable Pokémon, en la creación del objeto se le pasan los datos recibidos del API, para que el objeto los agregue en sus variables en el constructor de este */
      this.setState({ pokemon }); /* Guarda el Pokeémon seleccionado en el estado de la aplicación */
    })
    .catch(err => console.log(err)); /* En caso de que haya error, se debe atrapar para evitar que la app se caiga por completo */
  }

  render() {
    return(
      <div className="App">
        <div id="botones">
          <button className="btn">
            <NavLink exact to="/" activeClassName="Active"> Home </NavLink> {/*NavLink para que reciba css cuando se elija la opción*/}
          </button>
          <button className="btn">
            <NavLink exact to="/pokedex" activeClassName="Active"> Pokedex </NavLink> {/*NavLink para que reciba css cuando se elija la opción*/}
          </button>
        </div>
        <Route exact path="/" render={() => <Home/> } /> 
        <Route path="/pokedex" render={() => <Lista handleOnClick={this.handleOnClick} /> }  /> {/* Al componente lista se le debe pasar la función para manejar el click a una Celda, la Lista pasará este método a cada celda que contenga desde sus props */}
        <Route path="/pokedex" render={() => <VistaDetallada pokemon={this.state.pokemon} /> } /> {/* La vista detallada recibirá al Pokémon almacenado en el estado de esta aplicación, ese Pokémon se recibe con el handleClick de la celda */}
      </div>
    );
  }
}

export default App;