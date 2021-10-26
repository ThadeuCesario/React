import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const merge = (s1, s2) => {
    const arrayFirstString = s1.split('');
    const arraySecondString = s2.split('');
    let finalString = [];
    const biggestLength = arrayFirstString.length > arraySecondString.length ? arrayFirstString.length : arraySecondString.length;
    

    for(let i = 0; i < biggestLength; i++) {
        if(arrayFirstString[i] && arraySecondString[i]) {
            finalString.push(arrayFirstString[i]);
            finalString.push(arraySecondString[i]);
        }
        if(!arrayFirstString[i] && arraySecondString[i]) {
            finalString.push(arraySecondString[i]);
        }
        if(arrayFirstString[i] && !arraySecondString[i]) {
            finalString.push(arrayFirstString[i]);
        }
    }

    console.log(finalString);
    return finalString.join('');
};

const UseRef = _props => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(function() {
        //Será chamado somente quando o value1 mudar.
        count.current = count.current + 1;
        myInput2.current.focus();
    }, [value1]);

    useEffect(function() {
        count.current++;
        myInput1.current.focus();
    }, [value2]);

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
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                
                <input 
                    type="text"
                    ref={myInput1}
                    className="input"
                    value={value1}
                    onChange={event => setValue1(event.target.value)}
                />  
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input
                    type="text"
                    ref={myInput2}
                    className="input"
                    value={value2}
                    onChange={event => setValue2(event.target.value)}
                />           
            </div>
        </div>
    )
}


export default UseRef;