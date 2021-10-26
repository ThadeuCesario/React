import React from 'react';

export default props => {
    return(
        <div>
            <button onClick={props.setInc}>Incrementar</button>
            <button onClick={props.setDec}>Decrementar</button>
        </div>
    )
}