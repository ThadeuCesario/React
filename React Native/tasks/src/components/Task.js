import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default (props) => {
  const {desc, estimateAt, doneAt} = props;

  return (
    <View style={styles.Container}>
      <Text>{desc}</Text>
      <Text>{estimateAt + ''}</Text>
      <Text>{doneAt + ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
  },
});
