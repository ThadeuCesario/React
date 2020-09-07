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