import React from 'react';
import { tsPropertySignature } from '@babel/types';

export default props =>
    <div>
        {props.nome}
        &nbsp;
        <strong>
            {props.sobrenome}
        </strong>
    </div>