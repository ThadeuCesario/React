<h1>React - Cod3r</h1>

<strong>ReactDOM:</strong>
<br/>
O ReactDOM é responsável pela renderização dos componentes do React. Utilizamos de dentro do ReactDOM, o método
render(), que por padrão recebe dois parâmetros.
O Primeiro é o que desejamos imprimir na tela, e o segundo é em qual elemento que será injetado o conteúdo.
ReactDOM.render("Hello React", document.getElementById('root'));

<strong>JSX:</strong>
<br/>
Antes de tudo, para utilizar JSX precisamos do import do React.
JSX nos permite utilizar um sintaxe muito semelhante ao código HTML. Por padrão JSX não é interpretado
no Javascript, porém o React realiza a conversão e permite a criação do elemento utilizando essa sintaxe
muito semelhante a um código Javascript misturado com HTML.

<strong>Carregando CSS:</strong>
<br/>
Para que nossa aplicação consiga carregar um arquivo CSS, basta realizar um import diretamente para o
arquivo CSS desejado. Como nesse caso desejamos que a aplicação seja carregada diretamente,
não precisamos criar nenhum nome para o import. Veja um exemplo:
import './meucss.css'; 

<strong>Nome de Componentes:</strong>
<br/>
Por convenção os nomes dos componentes que criarmos sempre iniciará com letra maiúscula e CamelCase. Por exemplo:
<i>PrimeiroComponente.Js</i>

<strong>Componentes</strong>
<br/>
Sempre precisaremos exportar os componentes que estamos utilizando para possamos importá-los no local desejado.
<br/>
Outro ponto importante é que os componentes são referenciados como uma tag. Então se vocẽ importou um componente
chamado 'MeuComponente', você irá utilizar da seguinte forma: <i><MeuComponente /></i> ou <i><MeuComponent></MeuComponente></i>


<strong>Variáveis Javascript</strong>
<br />
Para acessarmos variáveis javascript em nossos componentes do React, basta utilizarmos dentro de chaves. 
Exemplo: 
<br/>
<i>const msg = 'Informação'</i>
<br/>
<i>{msg}</i>