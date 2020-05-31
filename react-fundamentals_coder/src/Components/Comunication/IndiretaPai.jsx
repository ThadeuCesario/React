import React, {useState} from 'react';

/* Import Components */
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    const [name, setName] = useState('?');
    const [age, setAge] = useState(0);
    const [isNerd, setIsNerd] = useState(false);

    function getInfoMasterComponent(nameParam, ageParam, isNerdParam){
        setName(nameParam);
        setAge(ageParam);
        setIsNerd(isNerdParam);
    }

    return(
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age} </strong></span>
                <span>{isNerd ? 'É nerd' : 'Não é nerd'}</span>
            </div>
            <IndiretaFilho getInfo={getInfoMasterComponent}/>
        </div>
    );
}