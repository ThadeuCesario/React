import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

import commonStyles from '../commonStyles';
import moment from 'moment';
import 'moment/locale/pt-br';

import Task from '../components/Task';

import todayImage from '../../assets/imgs/today.jpg';

export default class TaskList extends Component {
  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
    return (
      <View style={styles.Container}>
        <ImageBackground source={todayImage} style={styles.BackgroundImage}>
          <View style={styles.TitleBar}>
            <Text style={styles.Title}>Hoje</Text>
            <Text style={styles.Subtitle}>{today}</Text>
          </View>
        </ImageBackground>
        <View style={styles.TaskList}>
          <Task
            desc="Finalizar curso"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1, //Permitindo que o componente cresça na tela inteira.
  },

  /**
   * Veja que abaixo tenho um flex:3 para o BackgroundImage, e flex: 7 para o TaskList.
   * Basicamente estou dizendo para o react native que basicamente estou dividindo minha tela e que o
   * BackgroundImage ocupara 30% e o TaskList ocuparÁ 70%.
   * Portanto lembre-se que o atributo flex não habilita o display flex. Ele basicamente informa para o
   * elemento crescer, com uma determinada proporção.
   * Veja eles estão crescendo em relação ao componentente pai, que possui flex: 1 e que está ocupando
   * a tela inteira.
   * Obs.: A propriedade flex e flexGrown, possuem o mesmo propósito.
   */

  BackgroundImage: {
    flex: 3,
  },
  TaskList: {
    flex: 7,
  },
  TitleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  Title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  Subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
});
