import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const getCheckView = (doneAt) => {
  if (doneAt !== null) {
    return (
      <View>
        <Text>Concluída</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Pendente</Text>
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
  },
});
