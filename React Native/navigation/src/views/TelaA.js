import React from 'react';
import TextoCentral from '../components/TextoCentral';
import PassoStack from '../components/PassoStack';

export default props => {
    const {navigation} = props;
    return (
        <PassoStack {...props} avancar={'TelaB'}>
            <TextoCentral bgColor='#e53935'>
                Tela A
            </TextoCentral>
        </PassoStack>
    )
}