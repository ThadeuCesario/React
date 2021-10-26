import React from 'react'
import {View, Text, Button} from 'react-native'
import Style from '../estilo';

export default props => {
    const {a,b} = props;
    
    return (
      <>
        <Text style={Style.fontG}>{a}</Text>
        <Text style={Style.fontG}>{b}</Text>
      </>
    );
}