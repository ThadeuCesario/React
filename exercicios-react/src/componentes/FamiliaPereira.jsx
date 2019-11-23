import React from 'react';
import Membro from './Membro';

/* Veja que sobrenome foi passado no elemento pai, pois existe uma referência do elemento pai
 * para os elementos filhos.
 */

export default props =>
    <div>
        <Membro nome="João" sobrenome={props.sobrenome} />
        <Membro nome="André" sobrenome={props.sobrenome} />
        <Membro nome="Maria" sobrenome={props.sobrenome} />
        <Membro nome="Bruna" sobrenome="Teste Sobrenome Distinto" />
        <Membro nome="Carlos" sobrenome={props.sobrenome} />
    </div>