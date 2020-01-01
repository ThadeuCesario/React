import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <input type="number" onChange={(event) => setNumber(event.target.value)}/>
        </div>
    )
}

export default UseEffect
