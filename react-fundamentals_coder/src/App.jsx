import React from 'react';

/* Import Components */
import Card from "./Components/layout/Card";
import Primeiro from "./Components/Basics/Primeiro";
import ComParametro from "./Components/Basics/ComParametro";
import Aleatorio from "./Components/Basics/Aleatorio";

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

                <Card title={'2) Utilizando parâmetros'} color={'#66cdaa'}>
                    <ComParametro title={'Título passado por parâmetro'} subtitle={'Subtítulo passado por parâmetro'} value={10}></ComParametro>
                </Card>

                <Card title={'3) Desafio'} color={'#3cb371'}>
                    <Aleatorio min={0} max={100}></Aleatorio>
                </Card>
            </div>
        </React.Fragment>
    );
}