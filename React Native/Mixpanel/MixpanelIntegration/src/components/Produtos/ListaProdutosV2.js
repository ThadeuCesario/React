import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import Style from '../estilo';
import produtos from './produtos';

export default props => {
    return (
        <React.Fragment>
            <Text style={Style.fontG}>Lista de Produtos V2</Text>
            <FlatList 
            keyExtractor={i => `${i.id}`}
            data={produtos} 
            renderItem={(element) => {
                const {item} = element;
                return(
                <Text>{item.nome}, {item.preco}</Text> 
                )
            }}/>
        </React.Fragment>
    );
}