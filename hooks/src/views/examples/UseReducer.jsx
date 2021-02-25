import React, { useReducer, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import {initialState} from '../../store';
import {reducer} from '../../store/reducers';
import {numberAdd2, numberDiv25, numberMult7, numberRound} from '../../store/actions/number';

const UseReducer = _props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [number, setNumber] = useState(0);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!" />

            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Bem vindo</span>}
                <span className="text">
                    {state.number}
                </span>

                <div>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => numberMult7(dispatch)}>*7</button>
                    <button className="btn" onClick={() => numberDiv25(dispatch)}>/25</button>
                    <button className="btn" onClick={() => numberRound(dispatch)}>Arredondar</button>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                </div>

                <div>
                    <input type="number" className="input" value={number} onChange={event => setNumber(event.target.value)}/>
                    <button className="btn" onClick={() => dispatch({type: 'number_addN', payload: number})}>Adicionar</button>
                </div>
            </div>
        </div>
    );
}

export default UseReducer;