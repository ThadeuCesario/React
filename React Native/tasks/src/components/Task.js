import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/pt-br';

const getCheckView = (doneAt) => {
  if (doneAt !== null) {
    return (
      <View style={styles.Done}>
        <Icon name={'check'} size={20} color={'#fff'} />
      </View>
    );
  } else {
    return <View style={styles.Pending} />;
  }
};

export default (props) => {
  const {desc, estimateAt, doneAt} = props;

  /**
   * A lógica é bem simples do doneOrNotStyle, caso a tarefa esteja concluída (portanto o doneAt é diferente de nulo),
   * será aplicado um outro estilo que é o textDecorationLine.
   */
  const doneOrNotStyle =
    doneAt !== null
      ? {
          textDecorationLine: 'line-through',
        }
      : {};

  const date = doneAt ? doneAt : estimateAt;
  const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');

  return (
    <View style={styles.Container}>
      <View style={styles.CheckContainer}>{getCheckView(doneAt)}</View>
      <View>
        <Text style={[styles.Description, doneOrNotStyle]}>{desc}</Text>
        <Text style={styles.Date}>{formattedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    borderColor: '#AAA',
    borderBottomWidth: 1,
    alignItems: 'center', //cross axis
    paddingVertical: 10,
  },
  CheckContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Pending: {
    height: 25,
    width: 25,
    borderRadius: 13, //Basta ser a metade.
    borderWidth: 1,
    borderColor: '#555',
  },
  Done: {
    height: 25,
    width: 25,
    borderRadius: 13, //Basta ser a metade.
    backgroundColor: '#4d7031',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Description: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15,
  },
  Date: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 12,
  },
});
