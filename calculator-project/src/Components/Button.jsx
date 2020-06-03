import React from 'react';

/* Import CSS */
import './Button.css';

export default props => {
    const {label} = props;
    return(
        <button className={'button'}>{label}</button>
    );
}