import React from 'react';
import Membro from './Membro';

export default props => 
    <div>
        <Membro nome={props.nome} sobrenome="javascript"/>
        <Membro nome={props.nome} sobrenome="python" />
        <Membro nome={props.nome} sobrenome="php" />
        <Membro nome={props.nome} sobrenome="java" />
        <Membro nome={props.nome} sobrenome="C#" />
    </div>
