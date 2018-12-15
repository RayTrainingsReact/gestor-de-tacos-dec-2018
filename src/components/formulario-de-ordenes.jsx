import React from "react";

class formularioDeOrdenes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orden: "10 tacos de barbacoa",
      mesa: "",
      estatus: "PENDIENTE"
    };

    this.LaOrdenCambio = this.LaOrdenCambio.bind(this);
    this.guardarTacos = this.guardarTacos.bind(this);
    this.Limpiar = this.Limpiar.bind(this);
  }
  Limpiar(event) {
    event.preventDefault();
    console.log("Se esta limpiando");
    this.setState({ orden: "", mesa: "" });
  }

  LaOrdenCambio(event) {
    console.log(event.target.value);
    this.setState({ orden: event.target.value });
  }

  guardarTacos(eventito) {
    eventito.preventDefault();
    console.log("GUARDANDO", this.state);
    this.props.onGuardar(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div className="Component">
        <form onSubmit={this.guardarTacos}>
          <label>Mi orden</label>
          <input value={this.state.orden} onChange={this.LaOrdenCambio} />{" "}
          <br />
          <label>Mi mesa </label>{" "}
          <input
            value={this.state.mesa}
            onChange={eventito => {
              this.setState({ mesa: eventito.target.value });
            }}
          />{" "}
          <br />
          <button>Guardar</button>
          <button onClick={this.Limpiar}>Limpiar</button>
        </form>
        {this.state.orden} <br />
        {this.state.mesa}
      </div>
    );
  }
}
export default formularioDeOrdenes;
