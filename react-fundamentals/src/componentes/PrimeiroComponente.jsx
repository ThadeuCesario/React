import React from 'react';

let isReact = true;

// Utilize '{ }' para interpretar trechos de códigos como js e não como jsx!

export default (props) => 
    <div>
        <h1>{props.valor}</h1> 
        <h2>{props.aBcD}</h2>
        <h3>{props.calculo}</h3>
        <p>{1 + 1}</p>
        <p>{isReact ? 'Sim' : 'Não'}, é React!!</p>
        <p>{Math.random()}</p>
    </div>


// export default () => 
//     <div>
//         <h1>
//             Primeiro Componente (utilizando arrow function)!
//         </h1>
//     </div>


// export default function(){
//     return <h1>Primeiro Componente!</h1>
// }


// function primeiro(){
//     return <h1>Primeiro Componente!</h1>
// }


// export default primeiro;

