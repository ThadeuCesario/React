import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Field from './src/components/Field';
import MineField from './src/components/MineField';
import {createMinedBoard} from './src/functions';

import params from './src/params';

export default class App extends Component {
  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    //A quantidade de minas, será um percentuagem de linhas por colunas que temos no jogo. (Padrão 10%)
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  render() {
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
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged />
        <Field flagged opened />
      </SafeAreaView>
    );
  }
}

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
