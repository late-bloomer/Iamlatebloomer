import React from 'react';
import logo from './logo.svg';
import './App.css';
import imgForU from './moon.jpg';

function App() {
  return (
    <div className="App">
      <h1>Hello Sun flower, keep smiling</h1>
      <h2> this is for u</h2>
      <img src={imgForU} alt="Girl in a jacket" width="500" height="600"/>
    </div>
  );
}

export default App;
