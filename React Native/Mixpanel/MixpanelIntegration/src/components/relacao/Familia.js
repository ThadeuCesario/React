import React from 'react';

export default props => {
    //console.warn(props.children);
    
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}