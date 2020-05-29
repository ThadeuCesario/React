import React from 'react';

/* Import Components */
import Primeiro from "./Components/Basics/Primeiro";
import ComParametro from "./Components/Basics/ComParametro";
import Aleatorio from "./Components/Basics/Aleatorio";

export default props => {
    return(
        <React.Fragment>

            <p>1)</p>
            <Primeiro></Primeiro>
            <hr/>

            <p>2)</p>
            <ComParametro title={'Título passado por parâmetro'} subtitle={'Subtítulo passado por parâmetro'} value={10}></ComParametro>
            <hr/>

            <p>3)</p>
            <Aleatorio min={0} max={100}></Aleatorio>
            <hr/>

        </React.Fragment>
    );
}