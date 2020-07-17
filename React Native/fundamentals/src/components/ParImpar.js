import React from 'react';
import {Text} from 'react-native';
import Style from './estilo';

export default props => { 
    const {num = 0} = props


    if((props.num % 2) === 0){
        return(
            <Text style={Style.fontG}>Par</Text>
        );
    }
    else{
        return(
            <Text style={Style.fontG}>Ímpar</Text>
        );
    }
    
}