import React from 'react';
import {View, Image, StyleSheet, FlatList, Text} from 'react-native';
// import PropTypes from 'prop-types';
// import Text from '@bem/components/text';
// import Container from '@bem/components/container';
// import deviceConfig from '@bem/configs/device';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import ArrowBox from '@bem/components/arrowBox';

const InfiniteList = props => {
  const {imagePath, title, subtitle} = props;

  return (
    // <Container>
    <View>
      <Text>Lista infinita</Text>
    </View>
    // </Container>
  );
};

export default InfiniteList;

{/* // #region MARK: - Prop Types
InfiniteList.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

InfiniteList.defaultProps = {
  title: '',
  subtitle: '',
}; */}
