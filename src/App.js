import React from 'react';
//import logo from './logo.svg';
import './App.css';
import FormularioRutas from './Components/FormularioRutas';
import Navegacion from './Components/Navegacion';
import MostrarRutas from './Components/MostarRutas';
function App() {
  return (
    <div className="App">
      
      <Navegacion></Navegacion>
      <div className="container">
      
        <div className="col-md-4 text-center">
              <FormularioRutas ></FormularioRutas> 
            
        </div>

      </div>
      <MostrarRutas></MostrarRutas>
    </div>
  );
}

export default App;
