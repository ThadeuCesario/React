React - Cod3r

ReactDOM:
O ReactDOM é responsável pela renderização dos componentes do React. Utilizamos de dentro do ReactDOM, o método
render(), que por padrão recebe dois parâmetros.
O Primeiro é o que desejamos imprimir na tela, e o segundo é em qual elemento que será injetado o conteúdo.
ReactDOM.render("Hello React", document.getElementById('root'));

JSX:
Antes de tudo, para utilizar JSX precisamos do import do React.
JSX nos permite utilizar um sintaxe muito semelhante ao código HTML. Por padrão JSX não é interpretado
no Javascript, porém o React realiza a conversão e permite a criação do elemento utilizando essa sintaxe
muito semelhante a um código Javascript misturado com HTML.

Carregando CSS:
Para que nossa aplicação consiga carregar um arquivo CSS, basta realizar um import diretamente para o
arquivo CSS desejado. Como nesse caso desejamos que a aplicação seja carregada diretamente,
não precisamos criar nenhum nome para o import. Veja um exemplo:
import './meucss.css'; 
