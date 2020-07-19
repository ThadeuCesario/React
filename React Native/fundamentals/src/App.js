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
import ParImpar from './components/ParImpar'; 
import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';
import UsuarioLogado from './components/UsuarioLogado';
import ListaProdutos from './components/Produtos/ListaProdutos';
import ListaProdutos from './components/Produtos/ListaProdutosV2';
import DigiteSeuNome from './components/DigiteSeuNome';
*/
import FlexboxV1 from './components/Layout/FlexboxV1';

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
                <ParImpar  num={10}/>
                <Familia>
                    <Membro nome={'Ana'} sobrenome={'Silva'}/>
                    <Membro nome={'Maria'} sobrenome={'Silva'}/>
                </Familia>
                <Familia>
                    <Membro nome={'Paulo'} sobrenome={'Lima'}/>
                    <Membro nome={'Pedro'} sobrenome={'Lima'}/>
                </Familia>
                <UsuarioLogado usuario={{nome:'Thadeu', email: 'thadeu@123.com'}}/>
                <UsuarioLogado usuario={{nome:'Ana'}}/>
                <UsuarioLogado usuario={{email: 'teste@123.com'}}/>
                <UsuarioLogado usuario={{nome:'Karina', email: 'karina@123.com'}}/>
                <ListaProdutos />
                <ListaProdutos />
                <DigiteSeuNome />
            */}
            <FlexboxV1 />
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