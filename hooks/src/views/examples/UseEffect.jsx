/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';


const calcFatorial = n => calcFatorial(n - 1) * n;

const UseEffect = () => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    useEffect(() => {
        if(number < 0) setFatorial(-1);
        if(number === 0) setFatorial(1);
        if(number > 0) setFatorial(calcFatorial(number));
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
                <input className="input" type="number" value={number} onChange={(event) => setNumber(event.target.value)}/>
            </div>

            <SectionTitle title="Ëxercício #02" />
            <div className="center"></div>
        </div>
    )
}

export default UseEffect
