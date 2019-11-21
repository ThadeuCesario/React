/* Como vamos ter sintaxe JSX nesse arquivo, é fundamental termos o import do React.
 */
import React from 'react'; 

/* Nesse primeiro momento, criaremos um componente baseado em função.
 * Temos dois tipos de componentes:
 * - Componentes baseados em função;
 * - Componentes baseados em classe;
 */




export default () => <h1>Primeiro Componente! (Arrow)</h1>;










/* 
Outra forma:
Quando exportamos diretamente a função, podemos ter uma função anônima.

export default function(){
    return <h1>Primeiro Componente</h1>;
}
--------------------------------------------------------
Outra forma:
Podemos exportar a função após sua implementação, porém nesse caso temos que deixar explícito seu nome.

function primeiro(){
    return <h1>Primeiro Componente</h1>;
}
export default primeiro;

*/