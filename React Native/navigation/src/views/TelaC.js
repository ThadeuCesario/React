import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
    const route = props.route || {params : {numero: 0}};
    return (
        <TextoCentral bgColor='#9932cd'>
            Tela C = {route.params.numero}
        </TextoCentral>
    )
}