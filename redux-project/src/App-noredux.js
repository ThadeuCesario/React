import React, {useState} from 'react';

import './App.css';

import Intervalo from "./components/intervalo/Intervalo";
import Media from "./components/média/Media";
import Soma from "./components/soma/Soma";
import Sorteio from "./components/sorteio/Sorteio";

function App() {


  return (
    <div className="App">
        <h1>React/Redux</h1>
        <div className={'linha'}>
            <Intervalo min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}/>
        </div>
        <div className={'linha'}>
            <Media  min={min} max={max}   />
            <Soma min={min} max={max}     />
            <Sorteio min={min} max={max}  />
        </div>
    </div>
  );
}

export default App;
