import React from 'react';

const numeros = [10, 20, 30 , 50, 80, 100];

export default props =>{
    const multiplicarValores = item => {
    return item.map(item => <li>{item * 2}</li>)
    }
    return(
        <ul>
            {multiplicarValores(numeros)}
        </ul>
    )
}