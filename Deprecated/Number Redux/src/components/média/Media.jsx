import React from 'react';
import {connect} from 'react-redux';

import Card from "../card/Card";

const Media = props => {
    console.log('props get by redux', props.numbers);

    const {min, max} = props.numbers;

    return(
        <Card title={'Média dos Números'} green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min)/2}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        numbers: state.numeros
    }
}

export default connect(mapStateToProps)(Media);