/* Como vamos ter sintaxe JSX nesse arquivo, é fundamental termos o import do React.
 */
import React from 'react'; 

/* Nesse primeiro momento, criaremos um componente baseado em função.
 * Temos dois tipos de componentes:
 * - Componentes baseados em função;
 * - Componentes baseados em classe;
 */

function primeiro(){
    return <h1>Primeiro Componente</h1>;
}
export default primeiro;

/* Outra forma:
Quando exportamos diretamente a função, podemos ter uma função anônima.

export default function(){
    return <h1>Primeiro Componente</h1>;
}
 */