import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';


const calcFatorial = n => {
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFatorial(n - 1) * n;
}

const UseEffect = () => {   
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState('ímpar');

    useEffect(() => {
        setFatorial(calcFatorial(number));

        if(!(number % 2)) setStatus('par');
        else setStatus( 'ímpar')
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Ëxercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input className="input" type="number" value={number} onChange={(event) => setNumber(Number(event.target.value))}/>
            </div>

            <SectionTitle title="Ëxercício #02" />
            <div className="center">
                <span className="text">Status: </span>
                <span className="text red">{status}</span>
            </div>
        </div>
    )
}

export default UseEffect
