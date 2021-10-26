import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
    const {navigation} = props;

    /**
     * Estou passando o props como atributo para o PassoStack, justamente para que esse componente
     * tenha acesso ao navigation.
     */

    return (
        <TextoCentral bgColor='#e53935'>
            Tela A
        </TextoCentral>
    )
}