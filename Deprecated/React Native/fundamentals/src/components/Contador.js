import React, {useState} from 'react';
import {Text, Button} from 'react-native';

import Style from './estilo';

export default props => {
    const [inicial, setInicial] = useState(props.inicial);
    const [passo, setPasso] = useState(props.passo || 5);

    const incrementNumber = _ => {
        setInicial(inicial + passo);
    }

    const decrementNumber = _ => {
        setInicial(inicial - passo);
    }

    return(
        <>
            <Text style={Style.fontG}>{inicial}</Text>
            <Button title={'Incrementar'} onPress={incrementNumber} />
            <Button title={'Decrementar'} onPress={decrementNumber} />
        </>
    )
}