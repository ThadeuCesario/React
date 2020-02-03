import React from 'react'

// Podemos passar funções pela props e essa função pode ser acionada em um determinado evento.
export default props => 
    <div>
        <button onClick={() => props.notificarSaida('Shopping')}>
            Vou sair
        </button>
    </div>