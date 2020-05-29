/* Import Libs */
import ReactDOM from 'react-dom';
import React from 'react';

/* Import CSS */
import './index.css';

/* Import Components */
import Primeiro from "./Components/Basics/Primeiro";
import ComParametro from "./Components/Basics/ComParametro";

const root = document.getElementById('root');

ReactDOM.render(
        <>
            <p>1)</p>
            <Primeiro></Primeiro>
            <hr/>

            <p>2)</p>
            <ComParametro title={'Título passado por parâmetro'} subtitle={'Subtítulo passado por parâmetro'} value={10}></ComParametro>
            <hr/>

        </>
    , root);