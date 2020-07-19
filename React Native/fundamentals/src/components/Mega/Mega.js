import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
import Estilo from '../estilo';

export default class Mega extends Component{
    render(){
        return(
        <Text style={Estilo.fontG}>{this.props.nome}</Text>
        )
    }
}