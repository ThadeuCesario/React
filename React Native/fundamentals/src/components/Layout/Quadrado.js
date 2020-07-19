import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default props => {

    const size = 100;

    return (
      <View style={{
        height: size,
        width: size,
        backgroundColor: props.color || '#000', 
      }}>
              
      </View>
    );
}
