import React, { Component } from 'react';
import Formulario from "./components/formulario-de-ordenes";
import ListaDeOrdenes from "./components/lista-de-ordenes";

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listaDeOrdenes: [] };
    this.guardarOrden = this.guardarOrden.bind(this);
  }
  guardarOrden(orden) {
    this.setState(
      prevState => {
        const taquitos = [...prevState.listaDeOrdenes, orden];
        return {
          listaDeOrdenes: taquitos
        };
      },
      () => console.log("se actualizo estado", this.state)
    );
    console.log("Se guardo Orden - APP", orden);
  }
  render() {
    console.log(this.state.listaDeOrdenes);
    return (
      <div className="App">
        <Formulario onGuardar={this.guardarOrden} orden="10 tacos" />
        <ListaDeOrdenes ordenes={this.state.listaDeOrdenes} />
      </div>
    );
  }
}

export default App;
