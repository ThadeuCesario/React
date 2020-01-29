import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente';

const elemento = document.getElementById('root');

// const jsx = <h1>Olá React 2</h1>
// ReactDOM.render(jsx, elemento);

ReactDOM.render(
    <div>
        <PrimeiroComponente valor='Hello World!' aBcD={123} calculo={2**8}></PrimeiroComponente>
    </div>
    , elemento);