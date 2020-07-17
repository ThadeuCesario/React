import React from 'react';
import {View, Text, Button} from 'react-native';
import Style from '../estilo';

import ContadorDisplay from './ContadorDisplay';

export default props => {
    return (
      <React.Fragment>
        <Text style={Style.fontG}>
            ContadorV2
        </Text>
        <ContadorDisplay a={1} b={2}/>
      </React.Fragment>
    );
} 