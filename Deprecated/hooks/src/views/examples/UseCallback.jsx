import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons';

/**
 * UseCallback => Retornará uma função memorizada (uma função em cache).
 * 
 */

const Home = props => {
    const [count, setCount] = useState(0);

    const inc = useCallback(delta => {
        setCount(current => current + delta);
    }, [setCount]);

    return (
        <div className="useCallback">
            <div className="Home">
                <PageTitle
                    title="Hook UseCallback"
                    subtitle="Retorna uma função memorizada!" />
            </div>
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />
            </div>
        </div>
    )
}


export default Home