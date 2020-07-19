<article>
<h1>Fundamentos React Native</h1>
  <strong>SafeAreaView</strong>:
  <p>
    Garantimos que o conteúdo será apresentado sempre na área visível tanto do IPhone quanto do Android.
  </p>
<hr/>
  <strong>JSX</strong>:
  <p>
    Sintaxe HTML com JS, relembrando que sempre que tivermos JSX, precisamos importar o React.
  </p>
  <code>import 'React' from react;</code>
<hr/>
  <strong>Execurando Projeto</strong>:
  <p>
    <ul>
      <li>executar studio.sh</li>
      <li>executar npm start</li>
      <li>executar react-native run-android</li>
    </ul>
  </p>
<hr/>
  <strong>flex:1</strong>
  <p>
    Estamos liberando o componente para ocupar a tela inteira.
    <br/>
    Essa propriedade é muito semelhante ao "flexGrow".
  </p>
<hr/>
  <strong>Propriedades são somente leitura</strong>
  <p>
    Uma regra importante do React é que as <i>props</i> , são <strong>Somente Leitura!!!</strong>
    <br/>
    Portanto precisamos ter cuidado para não alterar diretamente esses propriedades.
    <br/>
    Caso você aplique o destructuring, funcionará normalmente a alteração dos valores de props. Então por exemplo, vamos supor que recebo dois valores pelo props:
  </p>
    <code>
      <pre>
      export default = props => {
        const {min, max} = props;
        let incrementarMin = min + 1;
        let incrementarMax = min + 1;
        return(
          < Text >{incrementarMin}< /Text >
          < Text >{incrementarMax}< /Text >
        )
      }
      </pre>
    </code>

Veja, que eu criei uma variável para incrementar Min e outra para incrementar Max. <br/>
Não incrimentei diretamente o valor dele.
<br/>
Em breve veremos os estados. ;D

   <hr/>
<strong>React Fragment</strong>
  <p>
    Lembre-se que não podemos retornar dois elementos adjacentes no React. Precisamos englobar os elementos. Pode ser utilizando o <code>< React.Fragment >< /React.Fragment ></code>.<br/>
    Ou simplesmente: 
    <code>
    < >< />
    </code>
  </p>
  Veja o exemplo: 
  <code>
  <pre>
  export default props => {
    const {principal, secundario} = props;
    return (
        < >
            < Text style={Style.fontG}>{principal}< /Text >
            < Text>{secundario}< /Text >
        </ >
    );
}
  </pre>
  </code>
  <hr/>
  <strong>Passando uma função como referência</strong>
  <p>
    Passar uma função como referência é diferente de executar uma função.
    Veja o código abaixo:

    <code>
      <pre>
      export default props => {

          function executar(){
              console.warn('React Native é show!');
          }

          return(
              <Button title={'Executar!'} onPress={executar}/>
          );
      }
      </pre>
    </code>

Veja que no 'onPress' coloquei a função sem os parenteses. Isso porque estou fazendo uma referência para aquela função.

  </p>
  <hr/>
  <strong>Criando Button no React Native</strong>
  <p>
    Bem para isso o procedimento é muito simples. <br/>
    Basta importar o 'Button' do react-native e utilizá-lo.

  </p>

  <code>
    import {Button} from 'react-native';
  </code>

  <hr/>
  <strong>Creating snippet - VsCode</strong>
  <p>
    <ul>
      <li>Acesse a aba File > Preferences > User snippets</li>
      <li>Selecione 'New snippets file for [nome_do_projeto]'</li>
      <li>Digite um nome para seu Snippet</li>
      <li>Mantenha a estrutura original e monte seu código.</li>
    </ul>
  </p>
  Veja o exemplo: 
  <code>
  <pre>
      {
      "Componente Funcional": {
        "scope": "javascript",
        "prefix": "compfunc",
        "body": [
          "import React from 'react'",
          "import {View, Text, Button} from 'react-native'",
          "import Style from './style'",
          "",
          "export default props => {",
          "    return (",
          "      <Text style={Style.fontG}>",
          "              $1",
          "      </Text>",
          "    );",
          "}",
        ],
        "description": "Log output to console"
      }
    }
  </pre>
  </code>

  <hr/>
  <strong>Comunicação Direta</strong>
  <p>A comunicação direta utiliza o <strong>props</strong>. Então basicamente, temos um componente pai
  passando propriedades para um componente filho.</p>
  <br/>
  <span>
  Sempre que um componente pai, possui uma comunicação direta para um componente filho. Significa que temos uma comunicação direta.
  </span>

  <hr/>
  <strong>Comunicação Indireta</strong>
  <p>
  Na comunicação indireta, o filho precisa passar alguma informação para o componente pai. O desafio para esse tipo de comunicação, é que o filho não tem importação do elemento pai.
  </p>

  <hr/>
  <strong>Quando dividir um componente em múltiplos componentes?</strong>
  <br/>Critérios:
  <ul>
    <li>Reuso</li>
    <li>Componente muito grande</li>
  </ul>

  <hr/>
  <strong>Diferenciando iOS de Android</strong>
  <p>
  Para diferenciarmos se estamos rodando em uma plataforma <strong>Android</strong>, ou uma plataforma <strong>iOS</strong>.
  <br/>
  Basta importarmos de dentro do <code>React Native</code>, o 'Plataform'. 
  <br/>
  Dessa forma, podemos fazer algumas condicionais apontando qual plataforma que desejamos trabalhar. 
  <br/>
  Veja o exemplo abaixo:

  <code>
  <pre>
      import React from 'react';
      import {Text, View, Button, Platform} from 'react-native';
      import Style from './estilo';

      export default props => {
          if(Platform.OS === "android"){
              return(
                  <Text style={Style.fontG}>Android</Text>
              )
          }
          else if(Platform.OS === "ios"){
              return(
                  <Text style={Style.fontG}>iOS</Text>
              )
          }
          else{
              return(
                  <Text style={Style.fontG}>
                      OMNI (Objeto Mobile Não Identificado)! LoL
                  </Text>
              )
          }
      }

  </pre>
  </code>
  </p>
Veja no código anterior que realizamos uma comparação no atributo OS de Plataform. <br/>
Exemplo <strong>(Se for android)</strong>: <br/>
<code>if(Plataform.OS === "android")</code>
<br/><br/><br/>
<strong>(Se for ios)</strong>: <br/>
<code>if(Plataform.OS === "ios")</code>

  <hr/>
  <strong>FlatList</strong>
  <p>
  Outro método além do map para renderizar uma lista pelo React, é utilizando o Flatlist.
  <br/>
  Para isso, devemos realizar da seguinte forma:
  <code>
  <pre>
            < FlatList 
              data={produtos} 
              keyExtractor={i => `${i.id}`}
              renderItem={(element) => {
                  const {item} = element;
                  return(
                    < Text>{item.nome}, {item.preco}< /Text> 
                  )
              }
            }/>
  </pre>
  </code>
  </p>
  <strong>
  Veja que para o FlatList, precisamos passar dois atributos:<br/>
  => data<br/>
  => renderItem<br/>
  => keyExtractor<br/><br/>
  O data possui o objeto que vamos renderizar em lista. <br/><br/>
  O renderItem é a função que percorrerá cada item. Lembre-se que não passamos o elemento individual diretamente, mas sim o item de uma forma geral.<br/><br/>
  O KeyExtractor serve para gerar uma chave específica para o elemento.
  <br/><br/>
  <br/>
  Por isso, realizei o destructuring. 
  <br/>
  <code>
  const {item} = element;
  </code>
  </strong>
  
  <br/>
  <hr/>
  <strong>Fluxo das alterações</strong>
  <p>
  As atualizações são sempre realizadas de forma unidirecional. <br/>
  Somente quando o estado de um componente for atualizado, que sua aplicação será atualizada. <br/>
  </p>
  Quando trabalhamos com TextInput, precisamos seguir o seguinte fluxo:
  <ul>
    <li>
      Criar o 	&nbsp;	&nbsp;<code>< TextInput /></code>
    </li>
    <li>Criar a função onChangeText</li>
  </ul>

  <code>
  <pre>
  export default props => {
    const [nome, setNome] = useState('Teste')
    return (
      < View style={Style.fontG}>
        < Text>{nome}< /Text>
        < TextInput placeholder={'Digite seu nome'} value={nome} onChangeText={nome => setNome(nome)}/>
      < /View>
    );
}
  </pre>
  </code>


  Desta forma, a função é invocada, nosso estado é alterado e nossa interface é atualizada! <br/>
  ;D Show!
  <br/>

  <hr/>
  <strong>Componente Controlado</strong>
  <p> 
    Quando um componente é alterado com base em seu estado. Um evento acontece, é chamado uma função e o componente é atualizado.
  </p>
  <br/>

   <hr/>
  <strong>Componente Não Controlado</strong>
  <p>
    Para termos um componente não controlado, basta colocar o <code>Value</code> do <code>< TextInput /></code>, como sendo null.<br/>
    
  </p>
  <br/><strong>Veja o exemplo abaixo:</strong><br/>
    <code>
  <pre>
  export default props => {
    const [nome, setNome] = useState('Teste')
    return (
      < View style={Style.fontG}>
        < Text>{nome}< /Text>
        < TextInput placeholder={'Digite seu nome'} value={null} onChangeText={nome => setNome(nome)}/>
      < /View>
    );
}
  </pre>
  </code>

  <br/>

  Portanto um componente controlado, não possui nenhum vínculo com nenhum estado.

   <hr/>
  <strong>Falando mais sobre FLEXBOX</strong>
  <p>
    Quando colocamos <code>flex:1</code> ou <code>flexGrow:1</code><br/>
    Setamos para que o elemento ocupe toda a área disponível.
    <br/><br/>
  </p>
  Para trabalharmos o eixo principal, utilizamos a propriedade <code>justify-content</code>
  <br/> <br/>
  <strong>Qualquer View no React Native, utiliza flexbox.</strong>

   <hr/>
  <strong>Componentes baseados em classe</strong>
  <p>
  Outra forma que podemos criar componentes é utilizando classes. 
  Porém esse método não é tão utilizado, principalmente com a criação do <code>Hooks</code>. 
  </p>
  <br/>
  Veja um exemplo de código criado utilizando classe.
  <br/>
  <code>
  <pre>
  import React, { Component } from 'react';
  import {Text, View, Button} from 'react-native';
  import Estilo from '../estilo';
  export default class Mega extends Component{
    render(){
        return(
        < Text style={Estilo.fontG}>{this.props.nome}< /Text> 
        )
    }
  }
  </pre>
  </code>
  <strong>Precisamos utilizar o <em>this</em> para acessarmos uma propriedade.</strong>
   <hr/>
  <strong></strong>
  <p>
  </p>
  <br/>

   <hr/>
  <strong></strong>
  <p>
  </p>
  <br/>

   <hr/>
  <strong></strong>
  <p>
  </p>
  <br/>

   <hr/>
  <strong></strong>
  <p>
  </p>
  <br/>
</article>
