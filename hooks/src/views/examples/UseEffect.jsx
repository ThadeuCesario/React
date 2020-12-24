import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseEffect = props => {
    const [number, setNumber] = useState(1)


    return (
        <div className="UseEffect">
            <PageTitle
                title="Módulo UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <input
                className="input"
                value={number}
                onChange={event => setNumber(event.target.value)}
                type="number"
            />
            <span className="text">{number}</span>
        </div>
    )
}

export default UseEffect;