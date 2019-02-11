import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './componentes/Bar'
import Area from './componentes/Area'
import Columnas from './componentes/Columnas';
import LineasColumnas from './componentes/LineasColumnas'
import LineasColumnasAreas from './componentes/LineasColumasAreas';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Bar/>
        <Area/>
        <Columnas/>
        <LineasColumnas/>
        <LineasColumnasAreas/>
      </div>
    );
  }
}

export default App;
