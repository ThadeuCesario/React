import React from 'react';

import './intervalo.css';

import Card from "../card/Card";



export default props => {
    return(
        <Card title={'Intervalo de Número'} red>
            <div className={'Intervalo'}>
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={0} readOnly/>
                </span>

                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={10} readOnly/>
                </span>
            </div>

        </Card>
    )
}