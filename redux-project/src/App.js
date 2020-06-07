import React from 'react';

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
            <Intervalo />
        </div>
        <div className={'linha'}>
            <Media />
            <Soma />
            <Sorteio />
        </div>
    </div>
  );
}

export default App;
