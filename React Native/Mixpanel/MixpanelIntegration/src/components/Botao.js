import React from 'react';
import {Button} from 'react-native';

export default props => {

    function executar(){
        console.warn('React Native é show!!!!!');
    }

    return(
        <React.Fragment>
            <Button title={'Executar 01'} onPress={executar}/>

            <Button title={'Executar 02'} onPress={() => console.warn('Function inline (Arrow)')}/>

            <Button title={'Executar 03'} onPress={function(){console.warn('Function inline (Function expression)')}} />

        </React.Fragment>
    );
}