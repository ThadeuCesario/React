import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Style from '../estilo';
import Quadrado from './Quadrado';

export default props => {
    return (
      <View style={style.flexV3}>
            <Quadrado color={'gold'} lado={10} />
            <Quadrado color={'#f00'} lado={20} />
            <Quadrado color={'#0f0'} lado={30} />
            <Quadrado color={'#00f'} lado={40} />
            <Quadrado color={'tomato'} lado={40} />       
      </View>
    );
}

const style = StyleSheet.create({
    flexV3: {
        height: 350,
        width: '100%',
        backgroundColor: '#000',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "baseline",
    }
})