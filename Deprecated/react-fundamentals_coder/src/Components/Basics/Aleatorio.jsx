import React from 'react';

export default props => {
    const {min, max} = props;
    return(
        <div>{Math.floor(Math.random() * (max - min + 1) + min)}</div>
    )
}