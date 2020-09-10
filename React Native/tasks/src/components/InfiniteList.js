import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
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

const baseURL = 'https://api.github.com';
const searchTerm = 'react';
const perPage = 20;

const InfiniteList = (props) => {
  const {imagePath, title, subtitle} = props;

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    const response = await fetch(
      `${baseURL}/search/repositories?q=${searchTerm}&per_page=${perPage}&page=${page}`,
    );
    const repositories = await response.json();

    setData([...data, ...repositories.items]);
    setPage(page + 1);
    setLoading(false);
  };

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  };

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
      onEndReached={loadContent}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
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
