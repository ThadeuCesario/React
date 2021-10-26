import React from 'react';

/* Import CSS */
import './Display.css';


export default props => {
    const {value} = props;

    return(
        <div className={'display'}>
            {value}
        </div>
    );
}