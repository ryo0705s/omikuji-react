// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  // const newState = lucky => {
    // }
    const [state, setState] = useState('?')
    const handleClick = () => {
    const lucky = ['大吉', '中吉', '小吉', '凶']
    // const Lucky = lucky[n]
    const n = Math.floor(Math.random() * lucky.length)
    setState(lucky[n])
  }
  // console.log({Lucky})
  return (
    <div className="App">
      <div id="btn"  onClick={handleClick}>{state}</div>

      {/* <script src="js/main.js"></script> */}
    </div>
  );
}

export default App;
