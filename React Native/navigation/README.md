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