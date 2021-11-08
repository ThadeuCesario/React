import React, {useEffect, useRef, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = (props) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    const merge = (s1, s2) => {
        const newWord = [];
        const arrayS1 = [...s1];
        const arrayS2 = [...s2];

        const biggestWord = arrayS1.length >= arrayS2.length  ? arrayS1 : arrayS2;
        const smallestWord = arrayS1.length < arrayS2.length ? arrayS1 : arrayS2;

        biggestWord.forEach((word, index) => {
            newWord.push(word);
            if(smallestWord[index]) newWord.push(smallestWord[index]);
        })

        return newWord.join('');
    }

    useEffect(() => {
        count.current = count.current+1;
        myInput2.current.focus();
    }, [value1])

    useEffect(() => {
        count.current = count.current+1;
        myInput1.current.focus();
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

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
                    className="input"
                    value={value1}
                    onChange={(event) => setValue1(event.target.value)}
                    ref={myInput1}
                />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input 
                    type="text" 
                    className="input" 
                    value={value2}
                    onChange={(event) => setValue2(event.target.value)}
                    ref={myInput2}
                />
            </div>
        </div>
    )
}

export default UseRef
