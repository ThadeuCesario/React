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

   Veja,  que eu criei uma variável para incrementar Min e outra para incrementar Max. <br/>
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
  <strong></strong>
  <p></p>

  <hr/>
  <strong></strong>
  <p></p>

  <hr/>
  <strong></strong>
  <p></p>