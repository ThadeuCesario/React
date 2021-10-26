/*
* ActionCreator receberá um novo número.
* Lembre-se que o ActionCreator retorna uma nova action.
*
* */

import {NUM_MAX_ALTERADO, NUM_MIN_ALTERADO} from './actionTypes';

export function alterarNumeroMinimo(novoNumero){
    return{
       type: NUM_MIN_ALTERADO,
       payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero){
    return{
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}