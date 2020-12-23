import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseEffect = props => {
    const [value, setValue] = useState('Inicial...')


    return (
        <div className="UseEffect">
        <PageTitle
            title="Módulo UseEffect"
            subtitle="Permite executar efeitos colaterais em componentes funcionais!" />
        </div>
    )
}

export default UseEffect;