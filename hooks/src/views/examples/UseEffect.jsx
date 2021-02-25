import React, { useCallback, useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = props => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [valueType, setValueType] = useState('');

    const findFactorial = useCallback(num => {
        const n = parseInt(num);
        if(Number.isNaN(n)) return -1;
        if(n < 0) return -1;
        if(n === 0) return 1;
        return n * findFactorial(n - 1);
    }, []);

    useEffect(() => {
        setFatorial(findFactorial(number));
    }, [number, findFactorial]);

    useEffect(() => {
        if(fatorial > 1000000) document.title = 'Gigante';
        else document.title = 'React hooks';
    }, [fatorial]);

    useEffect(() => {
        if (!(number % 2)) setValueType('Par');
        else setValueType('Ímpar');
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Módulo UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Valor inválido' : fatorial}</span>
                </div>
                <input
                    className="input"
                    value={number}
                    onChange={event => setNumber(event.target.value)}
                    type="number"
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{valueType}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect;