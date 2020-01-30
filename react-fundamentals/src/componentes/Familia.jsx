import React from 'react';

/**
 * props.children serve para renderizar todos os elementos que foram passados como filho 
 * para dentro de uma tag. Então essa é uma forma de acessar os elementos filhos dentro
 * de um componente pai utilizando o {props.children}.
 */
export default props =>
    <div>
        {props.children}
    </div>