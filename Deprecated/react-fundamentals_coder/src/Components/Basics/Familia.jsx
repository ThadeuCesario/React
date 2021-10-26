import React, {cloneElement} from 'react';

export default props => {

    return(
        <div>
            {
                // React.Children.map(props.children, child => cloneElement(child, {...props}))

                props.children.map((child, index) => cloneElement(child, {...props, key: index}))
            }
        </div>
    );
}