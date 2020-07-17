import React from 'react';
import {Text} from 'react-native';
import Style from './estilo';

function MultiComponenteOne(){
    return <Text style={Style.fontG}>Componente 01</Text>
}

function MultiComponenteTwo(){
    return <Text style={Style.fontG}>Componente 02</Text>
}

function MultiComponenteThree(){
    return <Text style={Style.fontG}>Componente 03</Text>
}

export {MultiComponenteOne, MultiComponenteTwo, MultiComponenteThree};