<h1>React Navigation</h1>
<h2>Navegação Stack</h2>
<p>
  Para criarmos uma configuração de navegação em stack. Basta importart
  do <code>'@react-navigation/stack'</code> o     <code>createStackNavigator</code>.

  Com ele importado, podemos fazer uma chamada ao <code>createStackNavigator</code>. E então criar os elementos jsx,
  com base na variável que chamamos o <code>createStackNavigator</code>.

  Veja o exemplo abaixo:

  <code>
  <pre>
const Stack = createStackNavigator();
export default props => {
    return (
        < Stack.Navigator initialRouteName="TelaA">
            < Stack.Screen name="TelaA" options={{title: 'Informações Iniciais'}}  component={TelaA}/>
            < Stack.Screen name="TelaB" component={TelaB}/>
            < Stack.Screen name="TelaC" component={TelaC}/>
        < /Stack.Navigator>
    );
}
</pre>
  </code>

Veja que dentro no Navigator, temos as Screens. <br/>
Dentro de cada Screen temos dois atributos que são bem importantes. O primeiro é o <code>name</code> e o segundo e o <code>component</code>, que é propriamente o componente que estamos referenciando.
</p>
<br></br>
Outro ponto importante que precisamos destacar, é que podemos passar <code>options</code>, como atributo
de nossas Screens, esses options são configurações adicionais que poderão ser úteis. <br />
Por exemplo qual será o <code>title</code>, ou se será apresentado o header.
<br></br>
Depois de termos feitos os passos acima, precisamos utilizar o <code>NavigationContainer</code>, para nos ajudar no controle de nossa stack. 
Basicamente o <code>NavigationContainer</code>, é responsável por gerenciar o estado do aplicativo e vincular o navegador do seu sistema com o ambiente do aplicativo. Além disso, o containercuida da integração da plataforma e fornece algumas funcionalidades úteis: 
<br/><br/>
<ul>
<li>
Deep link integration with the linking prop.
</li>
<li>
Notify state changes for screen tracking, state persistence etc.
</li>
<li>
Handle system back button on Android by using the BackHandler API from React Native.
</li>
</ul>
<em>font: https://reactnavigation.org/docs/navigation-container/</em>
<br/><br/>
<hr />
<h3>Navegação simples</h3>
<p>
  Um método simples para ir de uma página para outra, basta realizar o seguinte código:
</p>
<code>props.navigation.navigate('TelaB')</code>
<p>
Veja que estou utilizando o método <code>navigate</code> de dentro do <code>navigation</code>.
Passo como parâmetro também o componente que desejo redirecionar.
</p>
<hr />
<h3>navigate VS push</h3>
<p>
  Temos dois tipos de métodos para tratar nosssa stack de navegação. <br/> Sendo o primeiro o navigate que irá,
  analisar previamente toda a stack e navegar até o componente escolhido. 
  <br />
  O Segundo é o push, na qual sempre adicionará na stack uma novo componente. 
</p>