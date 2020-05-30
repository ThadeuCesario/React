import React from 'react';

/* Import Components */
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    const {lastName} = props;

    return(
        <div>
            <FamiliaMembro firstName={'Thadeu'} lastName={lastName}></FamiliaMembro>
            <FamiliaMembro firstName={'Karina'} {...props}></FamiliaMembro>
            <FamiliaMembro firstName={'Katharina'} lastName='Fixo'></FamiliaMembro>
        </div>
    );
}