import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default props => {

    return (
      <View style={{
        height: 20,
        width: 20,
        backgroundColor: props.color || '#000', 
      }}>
              
      </View>
    );
}
