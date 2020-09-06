import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Flag from './Flag';

export default (props) => {
  return (
    <View style={styles.Container}>
      <View style={styles.FlagContainer}>
        <TouchableOpacity onPress={props.onFlagPress} style={styles.FlagButton}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.FlagsLeft}> = {props.flagsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.Button} onPress={props.onNewGame}>
        <Text style={styles.ButtonLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  FlagContainer: {
    flexDirection: 'row',
  },
  FlagButton: {
    marginTop: 10,
    minWidth: 30,
  },
  FlagsLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 5,
    marginLeft: 20,
  },
  Button: {
    backgroundColor: '#999',
    padding: 5,
  },
  ButtonLabel: {
    fontSize: 20,
    color: '#ddd',
    fontWeight: 'bold',
  },
});
