import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default props => {

    const size = props.lado || 50;

    return (
      <View style={{
        height: size,
        width: size,
        backgroundColor: props.color || '#000', 
      }}>
              
      </View>
    );
}
