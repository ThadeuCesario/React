import React from 'react';
import {Text} from 'react-native';
import Style from './estilo';

export default (props) => {
    const {max, min} = props;
    
    //console.warn(typeof max);
    return(
        <Text style={Style.fontG}>O valor {max} é maior que o valor {min}!</Text>
    );
}