import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
};

function reducer(state, action) {
    /**
     * A função reducer receberá dois parâmetros.
     * Sendo o primeiro o estado atual e o segundo uma action (ação).
     * Basicamente com a ação recebida, saberemos como vamos atualizar o estado da nossa aplicação
     * para a nova versão. Toda a ação tem um tipo, que é o nome dela. O type da ação que definirá
     * como vamos evoluir o estado de nossa aplicação.
     * 
     * Toda ação possui pelo menos o atributo tipo, sendo que esse atributo define o que será realizado.
     * 
     * Lembrando que o objetivo da função reducer é pegar o estado atual e para cada ação que ocorrer, o estado
     * de nossa aplicação será evoluido. Veja que criamos uma ação com o type 'numberAdd2'.
     * 
     * O dispatch é uma ação que muda o estado de nossa aplicação.
     * Dentro da nossa ação (o dispatch), podemos passar um segundo atributo conhecido como payload.
     * Em nosso exemplo eu apena chamei de name, então dentro da ação teremos o type dela e também
     * um parâmetro que queremos passar (geralmente chamamos de payload).
     */

    switch(action.type) {
        case 'number_add2': 
            return {
                ...state,
                number: state.number + 2,
            }
        
        case 'login':
            return {
                ...state,
                user: {
                    name: action.payload
                }
            }


        default:
            return state;
    }   
}

const UseReducer = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

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
                    <button className="btn" onClick={() => dispatch({type: 'number_add2'})}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default UseReducer;