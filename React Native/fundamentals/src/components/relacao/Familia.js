import React from 'react';
import Filho from './Membro';

export default props => {
    return (
        <React.Fragment>
            <Filho nome={'Ana'} sobrenome={'Silva'} />
            <Filho nome={'Silva'} sobrenome={'Silva'} />
        </React.Fragment>
    )
}