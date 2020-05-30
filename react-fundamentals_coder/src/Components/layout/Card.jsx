import React from 'react';

/* Import Css File */
import './Card.css';

export default props => {
    const {title, color} = props;

    const propsStyle = {
        backgroundColor: color,
        borderColor: color,
    };

    return(
        <div className={'card'} style={propsStyle}>
            <div className={'title'}>{title}</div>
            <div className={'content'}>{props.children}</div>
        </div>
    );
}