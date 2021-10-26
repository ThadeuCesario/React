import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Style from '../estilo';
import Quadrado from './Quadrado';

export default props => {
    return (
      <View style={style.flexV1}>
            <Quadrado color={'gold'}/>
            <Quadrado color={'#f00'}/>
            <Quadrado color={'#0f0'}/>
            <Quadrado color={'#00f'}/>      
      </View>
    );
}

const style = StyleSheet.create({
    flexV1: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: "space-between",
    }
})