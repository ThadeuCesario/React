import React from 'react';

import Card from "../card/Card";

export default props => {
    return(
        <Card title={'Sorteio de um Número'} green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>8</strong>
                </span>
            </div>
        </Card>
    )
}