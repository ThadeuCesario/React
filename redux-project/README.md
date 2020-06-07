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