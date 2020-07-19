import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <nav>Actualizar Rutas</nav>
      </header>
      <body  className="App-body">
        <text>Ingrese el Departamento </text>
        <input type="Departamento" class="input-large" placeholder="Departamento" name="iDepartamento" id="iDepartamento"></input>
        <text>Ingrese la ciudad</text>
        <input type="ciudad" class="input-large" placeholder="ciudad" name="iciudad" id="iciudad"></input>
        <text>Ingrese la calle o carrera</text>
        <input type="calle o carrera" class="input-large" placeholder="calle o carrera" name="icalleocarrera" id="icalleocarrera"></input>
        <text>ingrese el numero</text>
        <input type="numero" class="input-large" placeholder="numero" name="inumero" id="inumero"></input>
        <br></br>
        <button type="button" >Actualizar</button><button type="button" >Cancelar</button>     
      </body>
      <footer>Enterprise_logistic</footer>
    </div>
  );
}

export default App;
