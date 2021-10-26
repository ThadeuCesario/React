import React from 'react';
import {Text} from 'react-native';

import Style from './estilo';

export default props => {
    const {min, max} = props;

    const randomNumber = Math.round(Math.random() * (max - min) + min);

    return(
        <Text style={Style.fontG}>{randomNumber}</Text>
    );
}