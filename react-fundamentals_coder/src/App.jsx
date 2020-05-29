import React from 'react';

/* Import Components */
import Primeiro from "./Components/Basics/Primeiro";
import ComParametro from "./Components/Basics/ComParametro";

export default function App(){
    return(
        <>
            <p>1)</p>
            <Primeiro></Primeiro>
            <hr/>

            <p>2)</p>
            <ComParametro title={'Título passado por parâmetro'} subtitle={'Subtítulo passado por parâmetro'} value={10}></ComParametro>
            <hr/>
        </>
    );
}