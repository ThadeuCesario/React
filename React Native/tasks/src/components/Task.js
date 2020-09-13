import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const getCheckView = (doneAt) => {
  if (doneAt !== null) {
    return (
      <View style={styles.Done}>
        <Icon name={'check'} size={20} color={'#fff'}></Icon>
      </View>
    );
  } else {
    return (
      <View style={styles.Pending}>
      </View>
    );
  }
};

export default (props) => {
  const {desc, estimateAt, doneAt} = props;

  return (
    <View style={styles.Container}>
      <View style={styles.CheckContainer}>{getCheckView(doneAt)}</View>
      <View>
        <Text>{desc}</Text>
        <Text>{estimateAt + ''}</Text>
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
});
