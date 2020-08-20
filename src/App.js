import React from 'react';
import logo from './logo.svg';
import './App.css';
import imgForU from './sorry.jpg';
import imgForU1 from './sorry2.jpg';

function App() {
  return (
    <div className="App">
      <h1>Sunn na Sun flower, sorry baba...</h1>
      <h2>Mai such mein baklol hu yaar...lad mujse per naraj nai...</h2>
      <div style={{display: 'block'}}>
      <img src={imgForU} alt="Girl in a jacket" width="600" height="300"/>
      <img src={imgForU1} alt="Girl in a jacket" width="600" height="300"/>
      </div>
    </div>
  );
}

export default App;
