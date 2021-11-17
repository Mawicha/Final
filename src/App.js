import React, { Component } from "react";
import "./App.css";
import { Lista, VistaDetallada, Pokemon } from "./componentes";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div className="App">
        <Lista />
      </div>
    );
  }
}

export default App;