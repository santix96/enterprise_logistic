import React from 'react';
import MainTheme from './components/themes/mainTheme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './services/userSession';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MainTheme />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
