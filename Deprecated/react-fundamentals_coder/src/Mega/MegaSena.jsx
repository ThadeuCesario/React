import React, {useState} from 'react';

/* import css file */
import './MegaSena.css';

export default props => {
    const {min, max} = props;
    const [numbers, setNumbers] = useState([]);

    const getRandomValues = () => {
        let luckNumbers = [];
        let inputNumber = Number(document.getElementById('luck-number').value);

        for(let i = 0; i < inputNumber; i++){
            let randomLuckNumber = Math.floor(Math.random() * (max - min + 1)) + min;

            for(let j = 0; j < inputNumber; j++){
                if(luckNumbers[j] === randomLuckNumber){
                    i--;
                    luckNumbers.splice(j, 1);
                }
                else if(j === inputNumber - 1){
                    luckNumbers.push(randomLuckNumber);
                }
            }
        }

         return luckNumbers.sort((a,b) => a-b);
    }

    return(
        <>
            <div className={'lucky-numbers'}>
                {
                    numbers.map((number, index) => <div key={index} className={'number'}>{number}</div>)
                }
            </div>
            <div>
                <input type='number' id='luck-number' min={1} max={12}/>
                <button onClick={() => setNumbers(getRandomValues())}>Gerar</button>
            </div>
        </>
    );
}