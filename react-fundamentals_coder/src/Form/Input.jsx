import React, {useState} from 'react';

/* Import CSS */
import './Input.css';

export default props => {

    const [valor, setValor] = useState('Inicial')

    function handleInput(event){
        setValor(event.target.value)
    }

    return(
        <div className={'input-data'}>
            <input value={valor} onChange={handleInput}/>
            <br/>
            <input value={valor} readOnly/>
            <br/>
            <input value={undefined} />
        </div>
    )
}