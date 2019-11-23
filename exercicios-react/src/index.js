import React from 'react';
import ReactDOM from 'react-dom'; //Responsável por lançar nossos componentes para a página.
// import PrimeiroComponente from './componentes/PrimeiroComponente';
// import {CompA, CompB as B} from './componentes/DoisComponentes';
import MultiElementos from './componentes/MultiElementos';
// import Elemento from './componentes/MeuComponenteTeste';   
import Elemento, {ComponentA as A, ComponentB} from './componentes/MeuComponenteTeste';
import FamiliaIntegrantes from './componentes/FamiliaSilva';

const elemento = document.getElementById("root");

/* Abaixo utilizaremos nosso primeiro componente. Veja que realizei a chamada de nosso componente
 * utilizando a tag de abertura e fechamaneto: <PrimeiroComponente></PrimeiroComponente> ;
 * Mas poderia utilizar também uma tag sem corpo: <PrimeiroComponente />
 */

/* Como vimos, podemos importar mais de um componente. Além disso podemos dar nomes secundários
 * aos elementos que são importados.
 */

ReactDOM.render(
        <div>
            {/* <CompA valor="Sou o componente A!!"/>
            <B valor="Sou o componente B!!"/>
            <PrimeiroComponente valor="Bom dia"/> */}

            <MultiElementos />
            {/* <Elemento /> */}
            <A />
            <ComponentB />
            <Elemento />
            <FamiliaIntegrantes/>

        </div>
    ,elemento);


// const jsx = <h1>Hello React!</h1>;
// ReactDOM.render('Olá React!', elemento);
// ReactDOM.render(
//     /* JSX -> Código que parece HTML mas que no final será convertido para código Javascript.
//      */
//     <ul>
//         <li>Thadeu</li>
//         <li>Karina</li>
//         <li>Guilherme</li>
//         <li>Katharina</li>
//     </ul>
//     ,elemento);