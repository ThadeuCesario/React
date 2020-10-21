import React from 'react';
import {Text, View} from 'react-native';
import Style from './estilo';

export default props => { 
    const {num = 0} = props;

    return(
        <View>
            <Text>O resultado retornado é:</Text>
            {
                ((num % 2) === 0)
                ? <Text style={Style.fontG}>Par</Text>
                : <Text style={Style.fontG}>Ímpar</Text>
            }
        </View>
    );

}