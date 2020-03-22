import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './Componentes/PrimeiroComponente'
import SegundoComponente from './Componentes/SegundoComponente';
import ComponenteAnonimo from './Componentes/AnonComponente';
import ComponenteArrow from './Componentes/ArrowComponente';
import ComponenteParametro from './Componentes/ComponenteComParametro';
import ComponenteParametroNumerico from './Componentes/ComponenteParametroNumerico';

const elemento = document.getElementById('root');
ReactDOM.render(
    <React.Fragment>
        <PrimeiroComponente />
        <SegundoComponente />
        <ComponenteAnonimo />
        <ComponenteArrow />
        <ComponenteParametro info="Mensagem por parâmetro"/>
        <ComponenteParametroNumerico a={5} b={6} />
    </React.Fragment>
    , elemento);

