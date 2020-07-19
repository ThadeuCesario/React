import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
import Estilo from '../estilo';

export default class Mega extends Component{

    constructor(props){
        super(props);

        this.state = {
            qtdeNumeros: props.qtdeNumeros,
        }
    }

    render(){
        return(
        <Text style={Estilo.fontG}>{this.state.qtdeNumeros}</Text>
        )
    }
}