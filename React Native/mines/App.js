import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Field from './src/components/Field';
import Mine from './src/components/Mine';

import params from './src/params';

const App = (props) => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.Welcome}>Iniciando o mines!</Text>
      <Text>
        Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={4} />
      <Field opened nearMines={5} />
      <Field opened nearMines={6} />
      <Field opened nearMines={7} />
      <Field opened nearMines={8} />
      <Mine />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 10,
  },
  Welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
