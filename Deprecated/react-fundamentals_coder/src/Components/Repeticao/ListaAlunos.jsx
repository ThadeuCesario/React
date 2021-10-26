import React from 'react';

/* Import External Content */
import alunos from "../../data/alunos";

export default props => {
    return(
        <div>
            <ul>
                {
                    alunos.map(aluno => <li key={aluno.id}>{aluno.nome} - {aluno.nota}</li>)
                }
            </ul>
        </div>
    )
}
