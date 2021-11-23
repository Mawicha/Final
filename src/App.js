import React, { Component } from "react";
import "./App.css";
import { Lista, VistaDetallada, Pokemon, Home } from "./componentes";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
      const pokemon = new Pokemon(data);
      this.setState({ pokemon });
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="App">
        { /*<img src={Homeimg} />
        <img src={Pokedeximg} />*/}
        <div id="botones">
          <button className="btn">
            <NavLink exact to="/" activeClassName="Active"> Home </NavLink> {/*NavLink para que reciba css cuando se elija la opción*/}
          </button>
          <button className="btn">
            <NavLink exact to="/pokedex" activeClassName="Active"> Pokedex </NavLink> {/*NavLink para que reciba css cuando se elija la opción*/}
          </button>
        </div>
        <Route exact path="/" render={() => <Home/> } /> 
        <Route path="/pokedex" render={() => <Lista handleOnClick={this.handleOnClick} /> }  />
        <Route path="/pokedex" render={() => <VistaDetallada pokemon={this.state.pokemon} /> } />
      </div>
    );
  }
}

export default App;