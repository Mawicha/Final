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
        <VistaDetallada />
      </div>
    );
  }
}

export default App;