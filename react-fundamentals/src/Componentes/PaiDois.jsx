import React from 'react';

/**
 *   props.children -> retorna todos os elementos filhos de um determinado elemento. 
 *
 *   React.cloneElement(props.children, {...props})  -> Clone o elemento children passado,
 *   e passe as propriedades que foram herdadas do pai. Veja que usamos o operador spread.
 *   Veja que também passamos com o operador spread as props do children. Assim se os filhos
 *   tiverem atributos proprios. Será substuídos o atributo do pai pelo atributo do filho.
 *   O problema é que a função cloneElement espera receber somente um único elemento.
 *   Assim precisaremos realizar um map.
 */

export default props => 
    <div>
        <h1>
            {props.nome} {props.sobrenome}
        </h1>
        <h2>
            Filhos
        </h2>
        <ul>
            {/* {props.children} */}
            {React.Children.map(props.children, child => {
                return React.cloneElement(child, {...props, ...child.props})
            })}
        </ul>
    </div>