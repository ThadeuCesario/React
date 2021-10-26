import React from 'react';

export default props => {

    const {firstName, lastName} = props;

    return(
        <>
            <div>
                <span>{firstName} </span>
                <strong>{lastName}</strong>
            </div>
            <br/>
        </>
    );
}