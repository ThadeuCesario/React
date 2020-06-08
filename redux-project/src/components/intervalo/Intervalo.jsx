import React from 'react';
import {connect} from 'react-redux';

import './intervalo.css';

import Card from "../card/Card";

import { alterarNumeroMinimo, alterarNumeroMaximo} from "../../store/actions/ActionCreatorNumeros";


const Intarvalo = props => {

    const {min, max} = props.numbers;
    return(
        <Card title={'Intervalo de Número'} red>
            <div className={'Intervalo'}>
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} max={max} onChange={e => props.alterarMinimo(e.target.value)}/>
                </span>

                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

function MapStateToProps(state){
    return{
        numbers: state.numeros,
    }
}

function mapDispatchToProp(dispatch){
    return{
        alterarMinimo(novoNumero){
            //Action Creator -> Retorna uma Action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero){
            //Action Creator -> Retorna uma Action
            const action2 = alterarNumeroMaximo(novoNumero);
            dispatch(action2);
        }
    }
}

export default connect(MapStateToProps, mapDispatchToProp)(Intarvalo);