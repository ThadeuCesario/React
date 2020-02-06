/* React é exportado por padrão.
 * Mas o Component é exportado sem utilizar o default, por isso precisamos utilizar as chaves.
 * Temos alguns examplos importando componentes que são e não são padrão.
 * 
 * Outra opção ao invés de importar utilizando as chaves. Podemos utilizar dessa forma: 
 * 
 * import React from 'react';
 *       export default class ComponenteClasse extends React.Component{
 *  }
 */
import React from 'react';

export default class ComponenteClasse extends React.Component{
    /* Agora precisamos definir pelo menos um método responsável por renderizar o componente.
     * Dentro do contexto de um componente funcional, o próprio método é o que será utilizado 
     * para renderizar o componente.
     */
    render(){
        return (
        <h1>{this.props.valor || 'Valor padrão'}</h1>
        )
    }
}