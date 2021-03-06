import React, { Component } from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import Estilo from '../estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends Component{

    constructor(props){
        super(props);

        this.state = {
            qtdeNumeros: props.qtdeNumeros,
            numeros: [],
        }
    }

    alterarQtdeNumeros(qtde){
        this.setState({
            qtdeNumeros: +qtde,
        })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1;

        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
    }

    /*
    gerarNumeros = () =>{
        const numeros = Array(this.state.qtdeNumeros).fill().reduce( nums =>  [...nums, this.gerarNumeroNaoContido(nums)],[]).sort((a,b) => a - b)

        this.setState({
            numeros
        })

    }
    */

   gerarNumeros = () =>{
        const {qtdeNumeros} = this.state;
        const numeros = [];

        for(let i = 0; i < qtdeNumeros; i++){
            numeros.push(this.gerarNumeroNaoContido(numeros));
        }

        numeros.sort((a,b) => a - b);

        this.setState({
            numeros
        })

    }

    exibirNumeros  = () => {
        const nums = this.state.numeros;
        return nums.map((num, index) => {
            return(
                <MegaNumero num={num} key={index}/>
            )
        })
    }


    render(){
        return(
        <>
            <Text style={Estilo.fontG}>
                Gerador de Mega-Sena
            </Text>

            <TextInput 
                style={{borderBottomWidth: 1}}
                keyboardType={'numeric'}
                placeholder={'Quantidade de números'}
                value={`${this.state.qtdeNumeros}`}
                onChangeText={valor => this.alterarQtdeNumeros(valor)}
                />
            
            <Button title={'Gerar'} onPress={this.gerarNumeros}/>
            
            <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: 20}}>
                {this.exibirNumeros()}
            </View>
        </>
        )
    }
}