import React, { useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseState = (props) => {
    const [count, setCount] = useState(0);
    /* 
        Dentro do setCount podemos passar uma função como parâmetro.
        Sendo que essa função sempre recebe o valor mais atualizado do estado.
    */
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button onClick={() => setCount(count + 1)} className="btn">+1</button>
                    <button onClick={() => setCount(count - 1)}  className="btn">-1</button>
                    <button onClick={() => setCount(1000)}  className="btn">1000</button>
                    <button onClick={() => setCount(current => current + 1000)}  className="btn">+1000</button>
                </div>

            </div>

            <SectionTitle title="Exercício #02" />
        </div>
    )
}

export default UseState
