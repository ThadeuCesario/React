import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Style from './estilo';

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
    <React.Fragment>
      <View>
        <Text style={Style.fontG}>Componente Controlado</Text>
        <Text>{nome}</Text>
        <TextInput placeholder={'Digite seu nome'} value={nome} onChangeText={nome => setNome(nome)}/>
      </View>

      <View>
        <Text style={Style.fontG}>Componente Não Controlado</Text>
        <Text>{nome}</Text>
        <TextInput placeholder={'Digite seu nome'} value={nome} onChangeText={nome => setNome(nome)}/>
      </View>
    </React.Fragment>  
    );
}