import React from 'react';

const listaDeCompras = ['Pão', 'Queijo', 'Melão', 'Água'];
export default props => {

    const gerarItens = items => {
        return items.map(item => <li>{item}</li>)
    }

    return(
        <ul>
            {gerarItens(listaDeCompras)}
        </ul>
    )

}