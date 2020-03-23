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
import FamiliaDev from './Componentes/FamiliaDev';
import Familia from './Componentes/Familia';
import Membro from './Componentes/Membro';
import ComponenteCalculadora from './Componentes/ComponenteCalculadora';
import ComponenteNumerico from './Componentes/ComponenteNumerico';
import ComponenteFucional from './Componentes/ComponenteComFuncao';
import ComponenteFuncionalDois from './Componentes/ComponenteComFuncaoDois';

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
        <FamiliaDev nome="Linguagem"/>
        <Familia sobrenome="Teste">
            <Membro nome="NomeTeste_1" />
            <Membro nome="NomeTeste_2" />
            <Membro nome="NomeTeste_3" />
        </Familia>
        <ComponenteCalculadora valorGeral={20}>
            <ComponenteNumerico valorIndividual={30}/>
            <ComponenteNumerico valorIndividual={20}/>
            <ComponenteNumerico valorIndividual={10}/>
            <ComponenteNumerico valorIndividual={0}/>
        </ComponenteCalculadora>
        <ComponenteFucional />
        <ComponenteFuncionalDois />
    </React.Fragment>
    , elemento);

