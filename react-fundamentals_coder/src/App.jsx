import React from 'react';

/* Import Components */
import Card from "./Components/layout/Card";
import Primeiro from "./Components/Basics/Primeiro";
import ComParametro from "./Components/Basics/ComParametro";
import Aleatorio from "./Components/Basics/Aleatorio";
import Familia from "./Components/Basics/Familia";
import FamiliaMembro from "./Components/Basics/FamiliaMembro";
import ListaAlunos from "./Components/Repeticao/ListaAlunos";
import TabelaProdutos from "./Components/Repeticao/TabelaProdutos";
import ParOuImpar from "./Conditional/ParOuImpar";
import UsuarioInfo from "./Conditional/UsuarioInfo";
import DiretaPai from "./Components/Comunication/DiretaPai";
import IndiretaPai from "./Components/Comunication/IndiretaPai";

/* Import Images */
import logo from './Assets/react-logo.png';

export default props => {
    return(
        <React.Fragment>
            <img className={'logo'} src={logo} alt={'Logo React'}/>

            <div className={'container-cards'}>
                <Card title={'1) Interpolando valores'} color={'#0f0'}>
                    <Primeiro></Primeiro>
                </Card>

                <Card title={'2) Utilizando parâmetros'} color={'#6600ff'}>
                    <ComParametro title={'Título passado por parâmetro'} subtitle={'Subtítulo passado por parâmetro'} value={10}></ComParametro>
                </Card>

                <Card title={'3) Desafio'} color={'#ff6347'}>
                    <Aleatorio min={0} max={100}></Aleatorio>
                </Card>

                <Card title={'4) Componente com filhos'} color={'#ffc800'}>
                    <Familia lastName={'Ferreira'}>
                        <FamiliaMembro firstName={'Thadeu'}/>
                        <FamiliaMembro firstName={'Karina'}/>
                        <FamiliaMembro firstName={'Katharina'}/>
                    </Familia>
                </Card>

                <Card title={'5) Repetições - listas'} color={'#17CBEF'}>
                    <ListaAlunos />
                </Card>

                <Card title={'6) Repetições - tabelas'} color={'#FA33AB'}>
                    <TabelaProdutos />
                </Card>

                <Card title={'7) Renderização condicional - Usando operações ternárias'} color={'#FA8072'}>
                    <ParOuImpar number={30}/>
                </Card>

                <Card title={'8) Renderização condicional - Usando um componente específico < If >'} color={'#FA3333'}>
                    <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                    <UsuarioInfo usuario={{}}/>
                </Card>

                <Card title={'9) Comunicação Direta'} color={'#00A4D5'}>
                    <DiretaPai />
                </Card>

                <Card title={'10) Comunicação Indireta - utilizando estados'} color={'#A1D500'}>
                    <IndiretaPai />
                </Card>

            </div>
        </React.Fragment>
    );
}