import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import params from './src/params';

const App = (props) => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text style={styles.Welcome}>Iniciando o mines!</Text>
      <Text>
        Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
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
