import React from 'react';

function Primeiro(){
    const msg = 'Mensagem interpolada';
    return (
        <div>
            <strong>React</strong>
            <p>{msg}</p>
        </div>
    )
}

export default Primeiro;