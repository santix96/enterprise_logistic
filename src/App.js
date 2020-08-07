import React, { useState } from 'react';
import logo from './logo.svg';
import MainTheme from './components/themes/mainTheme';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*Provider aca (redux)*/ }
      <BrowserRouter>
        <MainTheme />
      </BrowserRouter>
    </div>
  );
}

export default App;
