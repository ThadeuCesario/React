import React from 'react';
import ReactDOM from 'react-dom'; //Responsável por lançar nossos componentes para a página.
import PrimeiroComponente from './componentes/PrimeiroComponente.jsx';

const elemento = document.getElementById("root");

/* Abaixo utilizaremos nosso primeiro componente. Veja que realizei a chamada de nosso componente
 * utilizando a tag de abertura e fechamaneto: <PrimeiroComponente></PrimeiroComponente> ;
 * Mas poderia utilizar também uma tag sem corpo: <PrimeiroComponente />
 */
ReactDOM.render(
        <div>
            <PrimeiroComponente valor="Bom dia" aBcD={Math.pow(2,8)}></PrimeiroComponente> 
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