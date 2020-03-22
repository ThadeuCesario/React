import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './Componentes/PrimeiroComponente'
import SegundoComponente from './Componentes/SegundoComponente';

const elemento = document.getElementById('root');
ReactDOM.render(
    <React.Fragment>
        <PrimeiroComponente />
        <SegundoComponente />
    </React.Fragment>
    , elemento);