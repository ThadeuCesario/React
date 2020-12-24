import React, { useCallback, useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseEffect = props => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    const findFactorial = useCallback(n => {
        if(n === 0 || n === 1) return 1;
        return n * findFactorial(n - 1);
    }, []);

    useEffect(() => {
        setFatorial(findFactorial(number));
    }, [number, findFactorial]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Módulo UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input
                    className="input"
                    value={number}
                    onChange={event => setNumber(event.target.value)}
                    type="number"
                />
            </div>
        </div>
    )
}

export default UseEffect;