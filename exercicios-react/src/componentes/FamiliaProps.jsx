import React from 'react';
import { filhosComProps } from '../utils/utils';

export default props =>
    /*  Vamos analisar como propagar as propriedades dos pais para os filhos utilizando o
     * props.children;
     */
    
     /* cloneElement() -> Pegará os filhos receido e em seguida vai clonar eles e em seguida, 
      * é possível passar propriedade com esse clones gerados. 
      * O clone gerado com essas propriedades que será renderizado na tela.
      */

     
     <div>
     {filhosComProps(props)}
        {/* {React.Children.map(props.children, componenteFilho => {
            return React.cloneElement(componenteFilho, {...props})
        })} */}
        {/* {React.cloneElement(props.children, {sobrenome: props.sobrenome})} */}
        {/* {React.cloneElement(props.children, props)} */}
        {/* {React.cloneElement(props.children, {...props})}  */}
        {/* {props.children} */}
    </div>