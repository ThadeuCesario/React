import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './Componentes/PrimeiroComponente'
import SegundoComponente from './Componentes/SegundoComponente';
import ComponenteAnonimo from './Componentes/AnonComponente';
import ComponenteArrow from './Componentes/ArrowComponente';
import ComponenteParametro from './Componentes/ComponenteComParametro';
import ComponenteParametroNumerico from './Componentes/ComponenteParametroNumerico';
import {ComponenteA, ComponenteB as NomeQualquer} from './Componentes/MultiploComponente';
import MultiElementos from './Componentes/MultiElementos';

const elemento = document.getElementById('root');
ReactDOM.render(
    <React.Fragment>
        <PrimeiroComponente />
        <SegundoComponente />
        <ComponenteAnonimo />
        <ComponenteArrow />
        <ComponenteParametro info="Mensagem por parâmetro"/>
        <ComponenteParametroNumerico a={5} b={6} />
        <ComponenteA infoA="Informação do primeiro componente"/>
        <NomeQualquer infoB="Informação do segundo componente"/>
        <MultiElementos />
    </React.Fragment>
    , elemento);

