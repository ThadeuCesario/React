import React from 'react';
import {View, Text, Button} from 'react-native';
import Style from './estilo';
import If from './If';

export default props => {
    const {usuario} = props || {};

    return (
    <React.Fragment>
        <If teste={usuario && usuario.nome && usuario.email}>
            <Text style={Style.fontG}>
                Usuário logado:
            </Text>
            <Text>
                {usuario.nome} - {usuario.email}
            </Text>
        </If>
    </React.Fragment>
    );
}