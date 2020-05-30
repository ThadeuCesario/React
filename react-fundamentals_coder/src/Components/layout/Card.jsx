import React from 'react';

/* Import Css File */
import './Card.css';

export default props => {
    const {titulo} = props;

    return(
        <div className={'card'}>
            <div className={'title'}>{titulo}</div>
            <div className={'content'}>{props.children}</div>
        </div>

    );
}