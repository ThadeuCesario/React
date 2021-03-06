import React from 'react';
import {View, StyleSheet} from 'react-native';
import Field from './Field';

export default (props) => {
  const {board} = props;
  const rows = board.map((row, rowIndex) => {
    const columns = row.map((field, fieldIndex) => {
      return (
        <Field
          {...field}
          key={fieldIndex}
          onOpen={() => props.onOpenField(rowIndex, fieldIndex)}
          onSelect={e => props.onSelectField(rowIndex, fieldIndex)}
        />
      );
    });
    return (
      <View key={rowIndex} style={styles.Row}>
        {columns}
      </View>
    );
  });
  return <View style={styles.Container}>{rows}</View>;
};

const styles = StyleSheet.create({
  Container: {
    // flexDirection: 'row',
    backgroundColor: '#eee',
  },
  Row: {
    flexDirection: 'row',
  },
});
