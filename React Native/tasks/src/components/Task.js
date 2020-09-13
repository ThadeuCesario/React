import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const getCheckView = (_) => {
  return (
    <View>
      <Text>opa</Text>
    </View>
  );
};

export default (props) => {
  const {desc, estimateAt, doneAt} = props;

  return (
    <View style={styles.Container}>
      <View style={styles.CheckContainer}>{getCheckView()}</View>
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
