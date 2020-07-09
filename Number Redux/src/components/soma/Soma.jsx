import React from 'react';
import {connect} from 'react-redux';

import Card from "../card/Card";

const Soma = props => {
    const {min, max} = props.numbers;
    return(
        <Card title={'Soma dos Números'} blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        numbers: state.numeros
    };
}

export default connect(mapStateToProps)(Soma);
