import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

/* Components */
/* 
import PrimeiroComponente from './components/Primeiro';
import {MultiComponenteOne, MultiComponenteTwo, MultiComponenteThree as AnoterName} from './components/Multi';
import MinMax from './components/MinMax'; 
import Aleatorio from './components/Aleatorio';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';
import Pai from './components/Direta/Pai'; 
import Pai from './components/Indireta/Pai';
import Pai from './components/Indireta2/Pai';
import ContadorV2 from './components/contador/ContadorV2'
import Diferenciar from './components/Diferenciar';
*/

import ParImpar from './components/ParImpar';


export default () => {
    return(
        <SafeAreaView style={style.App}>
            {/* 
                <PrimeiroComponente></PrimeiroComponente>
                <MultiComponenteOne />
                <MultiComponenteTwo />
                <AnoterName />
                <MinMax min={3} max={30}/>
                <MinMax min={1} max={94}/> 
                <Aleatorio min={1} max={99}/>
                <Titulo principal={'React Native'} secundario={'É muito legal.'}/>
                <Botao />
                <Contador inicial={10} />
                <Pai />
                <Pai />
                <Pai/>
                <ContadorV2 />
                <Diferenciar />
            */}
            <ParImpar />
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    App:{
        padding: 30,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});