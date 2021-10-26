import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Style from '../estilo';

import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default props => {
    const [num, setNum] = useState(0); 

    const inc = () => {
      setNum(num + 1);
    }

    const dec = () => {
      setNum(num - 1);
    }

    return (
      <React.Fragment>
        <Text style={Style.fontG}>Contador</Text>
        <ContadorDisplay num={num}/>
        <ContadorBotoes inc={inc} dec={dec}/>
      </React.Fragment>
    );
} 
