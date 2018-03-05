import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {      
    const words = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"]
    let wordsRandom = words[Math.round(Math.random() * words.length)];
      console.log(wordsRandom);
    const color = ["red", "blue", "yellow", "green", "orange", "blueviolet", "lawngreen", "", "mediumpurple", "palevioletred", "palegoldenrod"]
    let colorRandom = color[Math.round(Math.random() * color.length)];
    console.log(colorRandom);
    let liStyle = { background: colorRandom };
    
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BIENVENIDOS A REACT</h1>
          <h2 >Meses del Año</h2>          
        </header>
        <main>
          <div className="Random-cards" style={liStyle}>
            <p>{wordsRandom}</p>
          </div>
        </main>

      </div>
      
    );
  }
}

export default App;
