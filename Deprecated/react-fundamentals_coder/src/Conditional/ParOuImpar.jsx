import React from 'react';

export default props => {
    const {number} = props;

    let isEven = ((number%2) === 0);

    return(
        <div>
            {isEven ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}