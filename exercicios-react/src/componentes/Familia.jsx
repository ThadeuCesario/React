import React from 'react';

export default props =>
    /* Quando o componente familia for instancia o conteúdo que for passado em sua instância será 
     * renderizado utilizando o props.children;
     */
    <div>
        {props.children}
    </div>