import React from 'react';
import CallProps from '../utils/utils';

export default props => 
    <div>
        {React.Children.map(props.children, child =>{
            return React.cloneElement(child, {...props});
        })}
    </div>