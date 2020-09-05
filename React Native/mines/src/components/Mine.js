import React from 'react';
import {View, StyleSheet} from 'react-native';
import params from '../params';

export default (props) => {
  return (
    <View style={styles.Container}>
      <View style={styles.CoreMine} />
      <View style={[styles.Line, {transform: [{rotate: '180deg'}]}]} />
      <View style={[styles.Line, {transform: [{rotate: '90deg'}]}]} />
      <View style={[styles.Line, {transform: [{rotate: '45deg'}]}]} />
      <View style={[styles.Line, {transform: [{rotate: '125deg'}]}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: params.blockSize,
    width: params.blockSize,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  CoreMine: {
    borderRadius: 50,
    backgroundColor: 'black',
    height: params.blockSize * 0.5,
    width: params.blockSize * 0.5,
  },
  Line: {
    width: 1,
    height: '80%',
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 1,
  },
});
