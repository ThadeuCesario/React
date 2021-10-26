import React, { useEffect, useState } from 'react';
import './style.css';

const Fire = _props => {
    const [fireHeight, setFireHeight] = useState(0);

    useEffect(() => {
        generateRandomHeight();
    }, []);

    const generateRandomHeight = _ => {
        const max = 100;
        const min = 0;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        setFireHeight(randomNumber);
        setTimeout(() => {
            generateRandomHeight();
        }, randomNumber * 10);
    }

    return(
        <div id='fire' style={{height: `${fireHeight}vh`}}></div>
    )
}

export default Fire;