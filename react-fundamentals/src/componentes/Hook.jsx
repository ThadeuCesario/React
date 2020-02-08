import React, {useState} from 'react';

export default props => {
    const [contador, setContador] = useState(100); 
    return(
        <div>
            <h1>
                {contador}
                <button onClick={ () => setContador(contador + 1)}>Inc</button>
            </h1>
        </div>
    )
}