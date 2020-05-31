import React from 'react';

/* Import Components */
import If from "./If";

export default props => {
    const usuario = props.usuario || {};
    return(
        <div>
            <If test={usuario && usuario.nome}>
               Seja bem vindo <strong>{ usuario.nome }</strong>
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Amigão</strong>
            </If>
        </div>
    )
}