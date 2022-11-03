import logo from './logo.svg';
import './App.css';
import "./style.css"
import React, {useState} from "react"


function App() {

  const [minVal, setMinVal] = useState(0)
  const [maxVal, setMaxVal] = useState(0)
  const [randomNum, setRandomNum] = useState(0)

  const giveRandomNumber = ()=>{
    setRandomNum(Math.floor(Math.random()*(maxVal-minVal+1)+minVal))
  }

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
    <div className="main">
      <div className="container">
        <div className="randomNumber">
          <p>Random Number: <span>{randomNum}</span></p>
        </div>
        <div className="numberContainer">
          <div>
            <p>Min: </p>
            <input 
              type="number" 
              value={minVal}
              onChange={e => setMinVal(+e.target.value)}/>
          </div>
          <div>
            <p>Max: </p>
            <input 
              type="number"
              value={maxVal}
              onChange={e=> setMaxVal(+e.target.value)}/>
          </div>
        </div>
        <button onClick={giveRandomNumber}>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
