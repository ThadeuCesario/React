/**
 * Estou refazendo o exemplo da comunicação indireta. Portanto é apenas código repetido.
 * 
 */


import React, {useState} from 'react';
import {Text} from 'react-native';

import Filho from './Filho';


export default props => {
    const [numeroFilho, setNumeroFilho] = useState(0);


    function pegarDadoDoMeuComponenteFilho(parametroQualquer){
        setNumeroFilho(parametroQualquer);
    }
    
    return(
        <>  
            <Text>{numeroFilho}</Text>
            <Filho min={20} max ={120} funcaoPaiParaFilho={pegarDadoDoMeuComponenteFilho}/>
        </>
    );
}