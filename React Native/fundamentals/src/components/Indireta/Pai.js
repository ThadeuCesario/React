import React, {useState} from 'react';
import Style from '../estilo';
import Filho from './Filho';
import { Text } from 'react-native';

export default props => {
    const [num, setNum] = useState(0);
    const [texto, setTexto] = useState('');

    function exibirValor(numero, texto){
        setNum(numero);
        setTexto(texto);
    }

    return (
        <>
            <Text style={Style.fontG}>{texto}{num}</Text>
            <Filho min={1} max={60} funcao={exibirValor}/>
        </>
    );
}