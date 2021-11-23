import React, { Component } from "react";
import "./App.css";
import { Lista, VistaDetallada, Pokemon, Home } from "./componentes";
import { Route } from "react-router-dom";

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
        <Route exact path="/" render={() => <Home/> } /> 
        <Route path="/pokedex" render={() => <Lista handleOnClick={this.handleOnClick} /> }  />
        <Route path="/pokedex" render={() => <VistaDetallada pokemon={this.state.pokemon} /> } />
      </div>
    );
  }
}

export default App;