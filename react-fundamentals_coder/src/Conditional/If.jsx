/*
        <If test={exp}>
            <span>.......</span>
            <span>.......</span>
            <span>.......</span>
            <span>.......</span>
        </If>
 */

import React from 'react';

export default props => {

    const {test} = props;

    return(
        <div>
            {test ? props.children : ''}
        </div>
    )
}