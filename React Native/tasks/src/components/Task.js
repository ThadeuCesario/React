import React from 'react';
import {View, Text} from 'react-native';

export default (props) => {
  const {desc, estimateAt, doneAt} = props;

  return (
    <View>
      <Text>{desc}</Text>
      <Text>{estimateAt + ""}</Text>
      <Text>{doneAt + ""}</Text>
    </View>
  );
};
