<h1>Redux</h1>
<hr/>
<strong>storeConfig.js</strong>
<p>
Dentro desse arquivo que colocamos dentro da pasta store, vamos configurar todos os nossos reducers e a partir deles
vamos gerar essa pasta store, que nos manterá com a aplicação funcionando enquanto configurando o Redux. 
<br/>
Primeiramente vamos importar de dentro de redux, duas funções:
<br/><br/>
<code>import {createStore, combineReducers} from 'redux';</code>
<br/><br/>
A 'combineReducers' será responsável por pegar todas as funções dos reducers e combina-las.

</p>
<hr/>
<strong>Componente Provider</strong>
<p>O componente provider é responsável por realizar a integração entre o React e o Redux.</p>

<hr/>
<strong>Procedimento de configuração do Redux</strong>
<p>Criamos uma pasta chamada 'store', nessa pasta contém o arquivo 'store.config.js' que contém todos os nossos
reducers. Importamos nesse arquivo o createStore e o combineReducers. Criámos o crateStore para que possamos exportar
a função principal e geral nossa store para o Provider, e o combineReducers será responsável por combinar
todos os reducers que criamos. 
Feito isso, acessamos nosso arquivo principal (geralmente o index.js), nesse arquivo vamos importar o Provider de redux,
sendo que o provider é o responsável por integrar o React com o redux. Lembre-se que o React e o Redux
são frameworks completamente diferentes e ambos podem trabalhar de forma independente. Depois basta passar como
parametro do componente provider a chamada da função que criamos no store.config.js</p>
<br/>
<code>
<pre>
import {Provider} from 'react-redux';
import storeConfig from "./store/store.config";

const store = storeConfig();

ReactDOM.render(
  < Provider store={store}>
      <React.StrictMode>
          < App />
      </React.StrictMode>
  < /Provider>,
  document.getElementById('root')
);

</pre>
</code>
<hr/>
<strong>Como integrar o Redux dentro de um componente?</strong>
<p>Antes de tudo, vamos entender um pouco sobre o padrão de projeto chamado 'Decorator'.<br/> Esse padrão
substitui a herança utilizando a composição para que possamos acrescentar coisas a um determinado objeto.</p>
<ul>
    <li>Primeiramente importamos dentro de 'react-redux' o connect, que será responsável por conectar o meu componente,
    dentro do estado da minha aplicação.<br/> Vamos utilizar o connect para devolver um componente que tenha ligação,
    com um estado geral da minha aplicação.</li>
    <li>Passar nossa função para uma constante.</li>
    <li>Depois crie a função MapStateToProps (passe state como parâmetro)</li>
    <li>Depois exporte a função chamando primeiramente connect passando como parâmetro o MapStateToProps e depois
    chame a função que está exportando</li>
</ul>