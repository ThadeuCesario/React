import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Style from '../estilo';

export default props => {
    const {num} = props;

    return (
        <View style={style.Display}>
            <Text style={[Style.fontG, style.DisplayText]}>
                {num}
            </Text>
        </View>
    );
} 

const style = StyleSheet.create({
    Display: {
      backgroundColor: "#000",
      width: "100%",
      padding: 20,
      marginTop: 30
    },

    DisplayText: {
        color: "#fff"
    }
  });