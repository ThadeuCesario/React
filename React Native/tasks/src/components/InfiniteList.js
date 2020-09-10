import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, FlatList, Text} from 'react-native';
// import PropTypes from 'prop-types';
// import Text from '@bem/components/text';
// import Container from '@bem/components/container';
// import deviceConfig from '@bem/configs/device';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import ArrowBox from '@bem/components/arrowBox';

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
});

const InfiniteList = (props) => {
  const {imagePath, title, subtitle} = props;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData([
      {id: 0, full_name: 'Repo 1'},
      {id: 1, full_name: 'Repo 2'},
      {id: 2, full_name: 'Repo 3'},
      {id: 3, full_name: 'Repo 4'},
      {id: 4, full_name: 'Repo 5'},
      {id: 5, full_name: 'Repo 6'},
      {id: 6, full_name: 'Repo 7'},
      {id: 7, full_name: 'Repo 8'},
      {id: 8, full_name: 'Repo 9'},
      {id: 9, full_name: 'Repo 10'},
      {id: 10, full_name: 'Repo 11'},
    ]);
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.listItem}>
      <Text>{item.full_name}</Text>
    </View>
  );

  return (
    <FlatList
      style={{marginTop: 30}}
      contentContainerStyle={styles.list}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default InfiniteList;

{
  /* // #region MARK: - Prop Types
InfiniteList.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

InfiniteList.defaultProps = {
  title: '',
  subtitle: '',
}; */
}
