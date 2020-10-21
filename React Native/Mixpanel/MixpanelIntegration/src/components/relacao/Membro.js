import React from 'react';
import {View, Text, Button} from 'react-native';
import Style from '../estilo';

export default props => {
    const {nome, sobrenome} = props;

    return (
        <Text style={Style.fontG}>
            {nome} {sobrenome}
        </Text>
    );
}