import React, {createContext, useState} from 'react';

/**
 * Componente não visuavel que conterá um estado interno.
 */

const initialState = {
    number: 1234,
    text: 'ContextAPI + Hooks',
};

export const AppContext = createContext(initialState);

const Store = props => {
    const {children} = props;
    const [state, setState] = useState(initialState);

    function updateState(key, newValue) {
        setState({
            ...state,
            [key]: newValue,
        })
    }

    return(
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t),
        }}>
            {children}
        </AppContext.Provider>
    );
 }

 export default Store;