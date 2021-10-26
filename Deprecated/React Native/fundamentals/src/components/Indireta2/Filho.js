import React from 'react';
import {Text, View, Button} from 'react-native';

export default props => {

    const {min, max, funcaoPaiParaFilho} = props;

    let tratativaQualquer = Math.floor(((min + max) * (max - min))**(1/2));

    function chamarFuncaoPai(){
        funcaoPaiParaFilho(tratativaQualquer);
    }

    return(
        <>
            <Button title='Botão Filho' onPress={chamarFuncaoPai}></Button>
        </>
    );
}