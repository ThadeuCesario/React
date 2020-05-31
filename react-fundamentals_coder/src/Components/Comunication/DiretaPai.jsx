import React from 'react';

/* Import component */
import DiretaFilho from "./DiretaFilho";

export default props => {
    return(
        <>
            <DiretaFilho name={'Thadeu'} age={25} isNerd={true} />
            <DiretaFilho name={'Karina'} age={27} isNerd={true} />
        </>
    );
}