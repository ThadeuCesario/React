import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import params from '../params';

export default (props) => {
  const styleField = [styles.field];

  //outros estilos aqui!

  if (styleField.length === 1) {
    styleField.push(styles.regular);
  }

  return <View style={styleField} />;
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
});
