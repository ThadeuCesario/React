import React from 'react';

export default props => {
    return(
        <>
            <label type={'text'}>Passo: </label>
            <input type='number' id={'passo'} value={props.passo} onChange={(event) => props.setValue(+event.target.value)} />
        </>
    )
}