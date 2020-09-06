import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, Text, Alert} from 'react-native';
import MineField from './src/components/MineField';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
} from './src/functions';

import params from './src/params';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    //A quantidade de minas, será um percentuagem de linhas por colunas que temos no jogo. (Padrão 10%)
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    };
  };

  render() {
    const {board} = this.state;
    return (
      <SafeAreaView style={styles.Container}>
        <Text style={styles.Welcome}>Iniciando o mines!</Text>
        <Text>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <View style={styles.board}>
          <MineField board={board} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#aaa',
  },
});
