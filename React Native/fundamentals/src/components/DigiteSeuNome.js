import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Style from './estilo';

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
      <View style={Style.fontG}>
        <Text>{nome}</Text>
        <TextInput placeholder={'Digite seu nome'} value={nome} onChangeText={nome => setNome(nome)}/>
      </View>
    );
}