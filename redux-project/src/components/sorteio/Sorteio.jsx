import React from 'react';
import {connect} from 'react-redux';

import Card from "../card/Card";

const Sorteio = props => {

    const {min, max} = props.numbers;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return(
        <Card title={'Sorteio de um Número'} purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}

function MapStateToProps(state){
    return{
        numbers: state.numeros
    }
}

export default connect(MapStateToProps)(Sorteio);