import React from 'react';
import {View, Text} from 'react-native';
import Style from './estilo';

export default props => {
    const {principal, secundario} = props;
    return (
        <>
            <Text style={Style.fontG}>{principal}</Text>
            <Text>{secundario}</Text>
        </>
    );
}