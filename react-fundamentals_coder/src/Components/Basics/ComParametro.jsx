/*
 *  Tivemos a oportunidade de utilizar o destructuring do javascript.
 */

import React from 'react';

export default function ComParametro(props){
    const {title, subtitle, value} = props;
    return (
        <div>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>React é {value}</p>
        </div>
    )
}