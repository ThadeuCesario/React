import React from 'react';

export default props => {

    const {name, age, isNerd} = props;

    return(
        <div>
            <span>{name} </span>
            <span>{age} </span>
            <span>{isNerd ? 'Verdadeiro' : 'Falso'}</span>
        </div>
    );
}