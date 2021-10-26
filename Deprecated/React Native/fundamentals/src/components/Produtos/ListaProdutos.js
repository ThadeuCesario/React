import React from 'react';
import {View, Text, Button} from 'react-native';
import Style from '../estilo';
import produtos from './produtos';

export default props => {
    return (
        <React.Fragment>
            <Text style={Style.fontG}>Lista de Produtos</Text>
            {
                produtos.map(produto => <Text key={produto.id}>Nome: {produto.nome}, Preço: {produto.preco}</Text>)
            }
        </React.Fragment>
    );
}