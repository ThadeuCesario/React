import React from 'react';

import './intervalo.css';

import Card from "../card/Card";



export default props => {

    const {min, max} = props;



    return(
        <Card title={'Intervalo de Número'} red>
            <div className={'Intervalo'}>
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} min={min} max={max} onChange={event => props.onMinChanged(event.target.value)}/>
                </span>

                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} onChange={event => props.onMaxChanged(event.target.value)}/>
                </span>
            </div>

        </Card>
    )
}