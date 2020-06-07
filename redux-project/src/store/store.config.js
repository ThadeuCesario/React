import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    numeros: function(state, action){
        console.log(`state: ${state}   --     action: ${action}`)
        return{
            min: 1,
            max: 10
        }
    },
    nomes: function(statue, action){
        return [
            'Thadeu',
            'Karina',
            'Katharina'
        ]
    }
});

function storeConfig(){
    return createStore(reducers);
}

export default storeConfig;
