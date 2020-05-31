import React from 'react';

export default props => {
    const gerarIdade = () => parseInt(Math.random() * 20) + 50;
    const gerarNerd = () => Math.random() > 0.5;
    return(
        <>
            <div>Componente Filho</div>
            <button onClick={(e) => props.getInfo('Thadeu Munhóz Cesário', gerarIdade(), gerarNerd())}>Pegar Informações</button>
        </>
    )
}