import React from 'react';
import {Text, View, Button, Platform} from 'react-native';
import Style from './estilo';

export default props => {
    if(Platform.OS === "android"){
        return(
            <Text style={Style.fontG}>Android</Text>
        )
    }
    else if(Platform.OS === "ios"){
        return(
            <Text style={Style.fontG}>iOS</Text>
        )
    }
    else{
        return(
            <Text style={Style.fontG}>
                OMNI (Objeto Mobile Não Identificado)! LoL
            </Text>
        )
    }

}