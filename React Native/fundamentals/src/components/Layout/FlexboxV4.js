import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Style from '../estilo';
import Quadrado from './Quadrado';

export default props => {
    return (
      <View style={style.flexV4}>   
        <View style={style.V0}></View>  
        <View style={style.V1}></View>  
        <View style={style.V2}></View>  
      </View>
    );
}

const style = StyleSheet.create({
    flexV4: {
        width: 100,
        backgroundColor: '#000',
        flexGrow: 1,
    },

    V0: {
        backgroundColor: 'green',
        height: 0,

    },

    V1: {
        backgroundColor: 'blue',
        flexGrow: 1,
    },

    V2: {
        backgroundColor: 'yellow',
        flexGrow: 1,
    },
})
