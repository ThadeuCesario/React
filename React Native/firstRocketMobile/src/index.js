import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * As tags dentro do React Native, não possuem valor semântico.
 * Além disso, as tags dentro do React Native não possuem estilização própria, como é o caso
 * da web.
 *
 * Todos os componentes possuem por padrão o display flex. No ReactNative nos não temos herança de
 * estilos.
 * 
 * View: div, footer, header, main, aside, section
 * Text: p, span, strong, h1, h2, h3.
 */

export default App = _ny => {
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});