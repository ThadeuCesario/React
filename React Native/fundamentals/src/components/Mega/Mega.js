import React, { Component } from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import Estilo from '../estilo';

export default class Mega extends Component{

    constructor(props){
        super(props);

        this.state = {
            qtdeNumeros: props.qtdeNumeros,
        }
    }

    alterarQtdeNumeros(qtde){
        this.setState({
            qtdeNumeros: qtde,
        })
    }

    render(){
        return(
        <>
            <Text style={Estilo.fontG}>
                Gerador de Mega-Sena
            </Text>
            <Text style={Estilo.fontG}>
                {this.state.qtdeNumeros}
            </Text>
            <TextInput 
                placeholder={'Quantidade de números'}
                value={`${this.state.qtdeNumeros}`}
                onChangeText={this.alterarQtdeNumeros}
                />
        </>
        )
    }
}