import React from 'react';

/**
 * props.children serve para renderizar todos os elementos que foram passados como filho 
 * para dentro de uma tag. Então essa é uma forma de acessar os elementos filhos dentro
 * de um componente pai utilizando o {props.children}.
 */

 /**
  * cloneElement é um método responsável por pegar os filhos recebidos e cloná-los.
  * Assim que clonados, temos a possibilidade de passar propriedades para esses clones gerados.
  * Passamos dois parametros para essa função, o primeiro é o elemento que estou clonando
  * e o segundo parâmetro é a propriedade que preciso passar.
  * React.cloneElement(props.children, {sobrenome: props.sobrenome})
  * Quanto ao segundo parâmetro, o sobrenome que eu recebi via propriedade, quero passar como 
  * parâmetro para meu componente que está sendo clonado.
  * 
  * Outra possibilidade é passarmos de forma mais genêrica todas as propriedades para os componentes
  * filhos, utilizando apenas o 'props':
  * {React.cloneElement(props.children, props)}
  * Todas as propriedades dessa forma serão passada dos componentes pai para os componentes filhos.
  */
export default props =>
    <div>
        {/* {props.children} */}
        {/* {React.cloneElement(props.children, {sobrenome: props.sobrenome})} */}
        {/* {React.cloneElement(props.children, props)} */}
        {React.cloneElement(props.children, ...props)}
    </div>