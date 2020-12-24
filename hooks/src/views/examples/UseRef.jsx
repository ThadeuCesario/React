import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = _props => {
    const [value1, setValue1] = useState("");
    const count = useRef(0);

    useEffect(function(){
        //Será chamado somente quando o value1 mudar.
        count.current = count.current + 1;
    }, [value1]);

    /**
     * Será chamado em todas as renderizações do nosso componente. 
     */
    //count.current = count.current + 1;


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!" />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                
                <input 
                    type="text"
                    className="input"
                    value={value1}
                    onChange={event => setValue1(event.target.value)}
                />  
            </div>
        </div>
    )
}


export default UseRef;