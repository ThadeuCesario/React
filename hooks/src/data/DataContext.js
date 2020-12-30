import React, {createContext} from 'react';

export const data = {
    number: 123,
    text: 'Context API....',
};

/**
 * Veja o exemplo abaixo como criamos um contexto. 
 * Veja que temos um objeto com todos os dados que desejamos exportar e utilizamos o createContext passando os dados como
 * parâmetro.
 */

const DataContext = createContext(data);

export default DataContext;