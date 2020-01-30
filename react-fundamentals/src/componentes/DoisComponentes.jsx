import React from 'react';

// const CompA = props => 
//     <h1>Primeiro diz: {props.valor}</h1>

// const CompB = props => 
//     <h1>Segundo diz: {props.valor}</h1>

const CompA = props => 
    <h1>Primeiro diz: {props.valor}</h1>

const CompB = props => 
    <h1>Segundo diz: {props.valor}</h1>

 

// Nessa sintaxe, não conseguimos exportar algo anônima. Não conseguiríamos referenciar no import, a menos se utilizarmos o default.
// export default function(){
//     return <p>Teste</p>
// }


export {CompA, CompB};
export default CompA;  

/**
 * A diferença entre exportar default ou exportar o módulos em específicos, afeta diretamente
 * o modo de importação. Quando exportamos algo default, sabemos que sempre será importado 
 * primeiramente aquele elemento do componente e portanto podemos renomeá-lo diretamente, sem a 
 * necessidade de um Álias.
 * Agora quando exportamos por elementos, precisamos importar cada um dos elementos e também
 * se caso desejarmos mudar o nome do elemento, precisaremos utilizar um alias. Por exemplo:
 * {MeuElemento as Element}
 */