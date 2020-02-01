import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
// import {CompA, CompB as Apelido} from './componentes/DoisComponentes';
// import CompA, {CompB as Apelido} from './componentes/DoisComponentes';
// import MultiElementos from './componentes/MultiElementos';
import FamiliaTeste from './componentes/FamiliaTeste';
import Familia from './componentes/Familia';
import Membros from './componentes/Membro';

const elemento = document.getElementById('root');

// const jsx = <h1>Olá React 2</h1>
// ReactDOM.render(jsx, elemento);

ReactDOM.render(
    <div>
        {/* <PrimeiroComponente valor='Hello World!' aBcD={123} calculo={2**8}></PrimeiroComponente> */}
        {/* <CompA valor="Componente A"/> */}
        {/* <Apelido valor="Componente B"></Apelido> */}
        {/* <MultiElementos></MultiElementos> */}
        {/* <FamiliaTeste></FamiliaTeste> */}
        <Familia sobrenome="Teste">
            <Membros nome="Membro A"/>
            <Membros nome="Membro B"/>
        </Familia>
        <Familia sobrenome="Exemplo">
            <Membros nome="Membro A"/>
            <Membros nome="Membro B"/>
        </Familia>
    </div>
    , elemento);