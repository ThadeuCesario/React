import React from 'react';
import CallProps from '../utils/utils';

export default props =>
    <div>
        {CallProps(props)}
        {/* {React.Children.map(props.children, child => { 
            return React.cloneElement(child, {...props})
        })} */}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {React.cloneElement(props.children,{sobrenome: props})} */}
        {/* {React.cloneElement(props.children,{sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>