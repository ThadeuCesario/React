import React from 'react';

export default class Contador extends React.Component{
    /* Uma vez que crio um componente baseado em classe, preciso criar um componente com
     * o método render, que será responsável por renderizar o nosso componente.
     * 
     * Quando é um componente funcional a própria função é responsável por renderizar.
     * Por que o react espera que o retorno de um componente funcional seja o jsx e no
     * caso de um componente baseado em classe chamará a função render().
     */

     state = {
         numero: 0
     }
   
    
    maisUm = () =>{
        /* O 'this' pode variar de acordo com quem chama a função. Em uma função tradicional
         * de javascript o 'this' não está associado ao local que essa função está, mas sim em
         * quem está chamando essa função.
         */
        // this.state.numero++;

        this.setState({numero: this.state.numero + 1});
    }

    menosUm = () => {
        this.setState({numero: this.state.numero - 1});
    }

    alterarNumero = diferenca =>{
        this.setState({
            numero: this.state.numero + diferenca
        })
    }

     render(){
         return(
         <div>
             <div>
                 Número : {this.state.numero}
             </div>
             <button onClick={this.maisUm}>Incrementar</button>
             <button onClick={this.menosUm}>Decrementar</button>

             <button onClick={() => this.alterarNumero(10)}>Incrementar+10</button>
             <button onClick={() => this.alterarNumero(-10)}>Decrementar-10</button>
         </div>
         )
     }
}




/* Solução 1: Bind
 * Utilizando construtor e o bind do javascript para garantir que em qualquer contexto
 * o this irá apontar para o objeto atual.
 */
// constructor(props){
//     super(props);
//     this.maisUm = this.maisUm.bind(this);
// }


/* Solução 2: Função Arrow - Click
 * Utilizando arrow function, o this é trabalhado de forma diferente sendo que o this é forçado
 * a estar associado ao local em que a função foi escrita. Está relacionado com o contexto léxico.
 */
// <button onClick={() => this.maisUm()}>Incrementar</button>


/* Solução 3: Função Arrow
 * maisUm = () => {
 *    //this.props.numero++;
 *    console.log(this); 
 * }
 * 
 */