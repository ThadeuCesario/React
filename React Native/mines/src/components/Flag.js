import React from 'react';
import {View, StyleSheet} from 'react-native';

const Flag = (props) => {
  return (
    <View style={styles.Container}>
      <View style={styles.FlagPole} />
      <View style={styles.Flag} />
      <View style={styles.Base1} />
      <View style={styles.Base2} />
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
});

export default Flag;
