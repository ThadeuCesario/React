import React from 'react';

/* Import Components */
import If, {Else} from "./If";

export default props => {
    const usuario = props.usuario || {};
    return(
        <div>
            <If test={usuario && usuario.nome}>
                <span>Seja bem vindo</span><strong> { usuario.nome }</strong>
                <Else>
                    <span>Seja bem vindo</span> <strong>Amigão</strong>
                </Else>
            </If>
        </div>
    )
}
