import React from 'react';
import Membro from './Membro';

export default props =>
    <div>
        <Membro nome="Membro1" sobrenome="Teste" />
        <Membro nome="Membro2" sobrenome="Teste" />
        <Membro nome="Membro3" sobrenome="Teste" />
        <Membro nome="Membro4" sobrenome="Teste" />
    </div>


// Veja que temos quatro instâncias do componente Membro.