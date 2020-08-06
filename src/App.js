import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Table} from 'react-bootstrap';

import './App.css';
import FormularioRutas from './Components/FormularioRutas';
import Navegacion from './Components/Navegacion';
import MostrarRutas from './Components/MostarRutas';
function App() {
  const [rutas, setRutas] = useState([]);

  const getRutas  = () => {
    axios.get(`http://localhost:4000/rutas/all`)
    .then(res => {
      setRutas(res.data)
    });
  };

  return (
    <div className="App">
      {getRutas()}

      <Table striped bordered hover >
        <thead>
          <tr>
            <th>ID</th>
            <th>Proveedor</th>
            <th>Barrios</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          { rutas.map((ruta) => {
                return(
                  <tr>
                    <td>{ruta.id}</td>
                    <td>{ruta.proveedor}</td>
                    <td>[{ruta.barrios.toString()}]</td>
                    <td>{ruta.ciudad}</td>
                  </tr>
                )
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
