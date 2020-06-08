import {createStore, combineReducers} from 'redux';

import numerosReducer from "./reducers/numerosReducer";
import nomeReducer from "./reducers/nomeReducer";

const reducers = combineReducers({
    numeros: numerosReducer,
    nomes: nomeReducer
});

function storeConfig(){
    return createStore(reducers);
}

export default storeConfig;
