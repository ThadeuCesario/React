import React from 'react';
import {View, StyleSheet} from 'react-native';

const Flag = (props) => {
  const {bigger} = props;
  return (
    <View style={styles.Container}>
      <View style={[styles.FlagPole, bigger ? styles.FlagPoleBigger : null]} />
      <View style={[styles.Flag, bigger ? styles.FlagBigger : null]} />
      <View style={[styles.Base1, bigger ? styles.Base1Bigger : null]} />
      <View style={[styles.Base2, bigger ? styles.Base2Bigger : null]} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: 2,
  },
  FlagPole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
  },
  Flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: '#f22',
    marginLeft: 3,
  },
  Base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10,
  },
  Base2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12,
  },
  FlagPoleBigger: {
    height: 28,
    width: 4,
    marginLeft: 16,
  },
  FlagBigger: {
    height: 10,
    width: 14,
    marginLeft: 3,
  },
  Base1Bigger: {
    height: 4,
    width: 12,
    marginTop: 20,
    marginLeft: 12,
  },
  Base2Bigger: {
    height: 4,
    width: 20,
    marginLeft: 8,
    marginTop: 24,
  },
});

export default Flag;
