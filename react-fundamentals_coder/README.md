<h1>React - Cod3r</h1>

<strong>ReactDOM:</strong>
<br/>
O ReactDOM é responsável pela renderização dos componentes do React. Utilizamos de dentro do ReactDOM, o método
render(), que por padrão recebe dois parâmetros.
O Primeiro é o que desejamos imprimir na tela, e o segundo é em qual elemento que será injetado o conteúdo.
ReactDOM.render("Hello React", document.getElementById('root'));

<hr/>

<strong>JSX:</strong>
<br/>
Antes de tudo, para utilizar JSX precisamos do import do React.
JSX nos permite utilizar um sintaxe muito semelhante ao código HTML. Por padrão JSX não é interpretado
no Javascript, porém o React realiza a conversão e permite a criação do elemento utilizando essa sintaxe
muito semelhante a um código Javascript misturado com HTML.

<hr/>

<strong>Carregando CSS:</strong>
<br/>
Para que nossa aplicação consiga carregar um arquivo CSS, basta realizar um import diretamente para o
arquivo CSS desejado. Como nesse caso desejamos que a aplicação seja carregada diretamente,
não precisamos criar nenhum nome para o import. Veja um exemplo:
import './meucss.css'; 

<hr/>

<strong>Nome de Componentes:</strong>
<br/>
Por convenção os nomes dos componentes que criarmos sempre iniciará com letra maiúscula e CamelCase. Por exemplo:
<i>PrimeiroComponente.Js</i>

<hr/>

<strong>Componentes</strong>
<br/>
Sempre precisaremos exportar os componentes que estamos utilizando para possamos importá-los no local desejado.
<br/>
Outro ponto importante é que os componentes são referenciados como uma tag. Então se vocẽ importou um componente
chamado 'MeuComponente', você irá utilizar da seguinte forma: <i><MeuComponente /></i> ou <i><MeuComponent></MeuComponente></i>
<br/>
Ao início estamos criando componentes funcionais, ou seja, componentes baseados em funções. Mas esta não é a única
forma de criarmos componentes. Também existem componentes baseados em classe.
<br/>
Vamos padronizar nossos projetos para que nossos componentes tenham a extensão JSX ou TSX. Dessa forma a IDE que estamos
utilizando nos ajudará na codificação. Mas para o React, não haverá diferença nenhuma.
<br/>
Lembrando que o para nossos componentes podemos importalos com tag de abertura e fechamento, ou como tags sem fechamento.
Por exemplo:

<br/>
< MeuComponente />
<br />
< MeuComponente >< /MeuComponente>
<br/>
<br/>

<hr/>

<strong>Passando parâmetros para nosssos componentes</strong>
<br/>
No HTML passamos parametros diretamente na tag que desejamos.<br/>
No React o processo será igual, passaremos parâmetros diretamente,
para nossos componentes importados. Por exemplo: <br />
<i>< MeuComponente titulo="Meu título"></MeuComponente></i>

<hr/>

<strong>Importando parâmetros em componentes</strong><br/>
Para importarmos um parâmetro passado em nosso componente. Basta importá-los dentro de nosso componente 
utilizando o <strong>props</strong>, e depois declará-lo no local desejado utilizando a notação ponto e dentro de chaves.
Por exemplo: <br/>
<pre>
<code>
export default function ComParametro(props){
    return (
        < div >
            < h2 >{props.title}< /h2 >
            < h3 >{props.subtitle}< /h3 >
        < /div >
    )
}
</code>
</pre>

<hr/>
<strong>Mais sobre parâmetros</strong>
<br/>
Um erro muito comum ao se iniciar com o React é achar que podemos alterar os parâmetros passados para um componente.<br/>
Quando criamos um determinado componente e passamos uma ou mais propriedades, essa propriedades são de <strong>somente leitura!!</strong>
<br/>
Se você tentar alterar uma propriedade passada para um componente, você só conseguirá um erro na tela:<br/>
<code>
TypeError: Cannot assign to read only property 'title' of object '#< Object >'
</code>


<hr/>
<strong>Variáveis Javascript</strong>
<br />
Para acessarmos variáveis javascript em nossos componentes do React, basta utilizarmos dentro de chaves. 
Exemplo: 
<br/>
<i>const msg = 'Informação'</i>
<br/>
<i>{msg}</i>
<hr/>
