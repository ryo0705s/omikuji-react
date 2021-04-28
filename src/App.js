// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'


const lucky = ['大吉', '中吉', '小吉', '凶']
const n = Math.floor(Math.random() * lucky.length)

function App() {
  const [state, setState] = useState()
  const newState = [state, lucky]
  // const handleClick = () => {
  // }
  console.log(newState)
  return (
    <div className="App">
      <div id="btn" value={newState} onClick={ e => setState(e.target.value)}>{newState.lucky[n]}</div>

      {/* <script src="js/main.js"></script> */}
    </div>
  );
}

export default App;
