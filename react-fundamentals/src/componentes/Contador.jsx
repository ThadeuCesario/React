import React from 'react';

export default class Contador extends React.Component{
    /* Uma vez que crio um componente baseado em classe, preciso criar um componente com
     * o método render, que será responsável por renderizar o nosso componente.
     * 
     * Quando é um componente funcional a própria função é responsável por renderizar.
     * Por que o react espera que o retorno de um componente funcional seja o jsx e no
     * caso de um componente baseado em classe chamará a função render().
     */
    maisUm(){
        this.props.numero++;
    }

    menosUm(){
        this.props.numero--;
    }

     render(){
         return(
         <div>
             <div>
                 Número : {this.props.numero}
             </div>
             <button onClick={this.maisUm}>Incrementar</button>
             <button onClick={this.menosUm}>Decrementar</button>
         </div>
         )
     }
}
