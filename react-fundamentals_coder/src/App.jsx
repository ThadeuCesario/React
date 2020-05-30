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
                <Card titulo={'1) Interpolando valores'}>
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo={'2) Utilizando parâmetros'}>
                    <ComParametro title={'Título passado por parâmetro'} subtitle={'Subtítulo passado por parâmetro'} value={10}></ComParametro>
                </Card>

                <Card titulo={'3) Desafio'}>
                    <Aleatorio min={0} max={100}></Aleatorio>
                </Card>
            </div>
        </React.Fragment>
    );
}