import React from 'react';

export default function callProps(props){
    return React.Children.map(props.children, child => { 
        return React.cloneElement(child, {...props})
    })
}