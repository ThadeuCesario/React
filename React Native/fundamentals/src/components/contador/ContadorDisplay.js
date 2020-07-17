import React from 'react';
import {View, Text, Button} from 'react-native';
import Style from '../estilo';

export default props => {
    console.warn(props);

    return (
      <Text style={Style.fontG}>
          Contado Display Filho
      </Text>
    );
} 