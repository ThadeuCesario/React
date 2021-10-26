import React from 'react';

/* Import CSS */
import './Button.css';

export default props => {
    const {label, operation, double, triple} = props;
    return(
        <button className={
            `
            button
            ${operation ? 'operation' : ''}
            ${double ? 'double' : ''}
            ${triple ? 'triple' : ''}
            `
        }  onClick={e => props.click && props.click(label)}>{label}</button>
    );
}