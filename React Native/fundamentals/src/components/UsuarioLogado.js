import React from 'react';
import {View, Text, Button} from 'react-native';
import Style from './style';

export default props => {
    const {usuario = {}} = props;

    return (
      <Text style={Style.fontG}>
          {usuario.nome} - {usuario.email}
      </Text>
    );
}