import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
 
      const words = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"]
    let wordsRandom = Math.random()
      console.log(wordsRandom);
    
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenidos a React</h1>
        </header>
        <main>
          <div>
            <p>{wordsRandom}</p>
          </div>
        </main>

      </div>
      
    );
  }
}

export default App;
