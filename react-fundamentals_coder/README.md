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
<strong>Mais sobre propriedas</strong>
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

<strong>Erros de elementos adjacentes</strong>
<br/>
Para retornarmos corretamente elementos que são adjacentes em nossa aplicação, precisamos utilizar um fragmento
para unificá-los. Por exemplo:
<br/>
<i>O código abaixo gera um erro: Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment</i>

<code>
<pre>
ReactDOM.render(

            <p>1)</p>
            <Primeiro></Primeiro>
            <hr/>

            <p>2)</p>
            <ComParametro title={'Título passado por parâmetro'} subtitle={'Subtítulo passado por parâmetro'} value={10}></ComParametro>
            <hr/>
    , root);

</pre>
</code>

Para  resolvermos é bem simples basta utilizarmos um fragmento, por exemplo:<br/>

<pre>
<code>
ReactDOM.render(
        < >
            < p> 1) < /p>
            < Primeiro>< /Primeiro>
            < hr/>
            < p > 2) < /p >
            < ComParametro title={'Título passado por parâmetro'} subtitle={'Subtítulo passado por parâmetro'} value={10}>
            < hr/>
        < />
    , root);
    
</code>
</pre>
Poderíamos ter resolvido esse problema utilizando também < React.Fragment >, ou simplesmente uma div    :D.
<br/>
Um outro ponto é que utilizando o < React.Fragment >, podemos passar propriedades para o elemento. Utilizando a
forma reduzida igual no exemplo anterior, não conseguimos. Exemplo: <br/><br/>
<i>
<React.Fragment key='123'></React.Fragment>
</i> 
<br/><br/>
Lembrando que NÃO podemos retornar dois elementos adjacentes a menos que eles estejam envolvidos por alguma tag.
Seja essa tag um fragmento ou não.

<hr/>
<strong>Aplicando Classes em Componentes</strong>
<br/>
O 'class' que utilizamos por padrão no HTML para aplicar uma classe,
não é válido dentro do React. Mesmo porque, 'class' é uma palavra
reservada do javascript.
<br/>
Portanto para aplicarmos uma classe em um determino componente, utilizamos
o atributo <code>ClassName</code>. Exemplo:<br/>
<code>
    < MeuComponente ClassName='card'>< /MeuComponente >
</code>
<hr/>
<strong>{props.children}</strong>
<br/>
Para acessarmos os elementos filhos que foram passados para seu componente,
precisamos utilizar a propriedade <code>children</code>.
<hr/>

<strong>Style</strong>
<br/>
Podemos utilizar a proprieda style para passarmos CSS Inline
para nossos componentes React. <br/>
Um ponto de atenção é que trabalhamos com o CSS utilizando
camelCase e não o padrão dash-case. Exemplo:
<pre>
<code>
    return(
        < div className={'card'} style={propsStyle} >
            < div className={'title'}>{title}< /div >
            < div className={'content'}>{props.children}< /div >
        < /div >
    );
</code>
</pre>
<hr/>
<strong>Utilizando o spread</strong>
<br/>
Primeiramente, precisamos entender que um componente pai <strong>NÃO</strong>, passa
suas propriedades de forma automática para seus componentes filhos.
<br/>
Uma outra alternativa de enviar propriedades para um componente filho, 
é utilizando o spread para espalhar todas as propriedades que foram
recebidas do componente pai.<br/>
Veja o código abaixo:

<code>
<pre>


export default props => {
    const {lastName} = props;

    return(
        <div>
            <FamiliaMembro firstName={'Thadeu'} lastName={lastName}></FamiliaMembro>
            <FamiliaMembro firstName={'Karina'} {...props}></FamiliaMembro>
            <FamiliaMembro firstName={'Katharina'} lastName='Fixo'></FamiliaMembro>
        </div>
    );
}


</pre>
</code>
<hr/>

<strong>Passando propriedades de elemento pai para elemento filho.</strong>
<br/>
Vamos supor que precisamos passar uma determinada propriedade de um elemento,
pai para um elemento filho. 
<br/>
<pre>
<code>
             < Familia lastName={'Ferreira'} >
                        < FamiliaMembro firstName={'Thadeu'} />
                    < /Familia>
</code>
</pre>
Precisamos lembrar que no React não alteramos diretamente os elementos.
Nesse caso que possui apenas um elemento filho, dentro do elemento pai.
Podemos passar a propriedade lastName, da seguinte forma:
<pre>
<code>
import React, {cloneElement} from 'react';

export default props => {
    return(
        <div>
            {cloneElement(props.children, {...props})}
        </div>
    )
}
</code>
</pre>
Esse método, funcionará para os casos que temos somente um elemento filho.
<br/>
Veja que importamos do React um método chamado cloneElement e a todo momento,
trabalhamos com o clone do elemento e não com o elemento em si.
Lembrando que no React não alteramos diretamente os elementos.
<br/>
Agora quando estamos falando de um elemento pai, precisar passar suas propriedades
para vários elementos filhos, precisaremos adotar um novo método.
<br/>
Veja o exemplo:
<br/>
<pre>
<code>
    < Familia lastName={'Ferreira'}>
                        < FamiliaMembro firstName={'Thadeu'}/>
                        < FamiliaMembro firstName={'Karina'}/>
                        < FamiliaMembro firstName={'Katharina'}/>
                    < /Familia>
</code>
</pre>
Neste caso, para conseguirmos passar a propriedade 'lastName', para os elementos
filhos, precisaremos fazer o seguinte:<br/>
<pre>
<code>
import React, {cloneElement} from 'react';

export default props => {
    return(
        <div>
            {React.Children.map(props.children, child => cloneElement(child, {...props}))}
        </div>
    );
}
</code>
</pre>

<hr/>
<strong>Renderização Condicional no React</strong>
<br/>
Quando temos interesse de renderizar um bloco do HTML de acordo
com uma condicional, podemos utilizar as operações ternárias 
para resolvermos esses casos.
<br />
Veja o exemplo:
<pre>
<code>
export default props => {
    const {number} = props;
    let isEven = ((number%2) === 0);
    return(
        <div>
            {isEven ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}
</code>
</pre>
<hr/>






<strong>Exportações</strong>
<br/>
Quando estamos utilizando o  <i>export.default</i>, podemos aproveitar e utilizar uma função anônima.
Porém somente quando estamos utilizando a exportação padrão!!!<br/>
<hr/>

<strong>Criando componente IfElse</strong>
<br/>
Primeiramente criaremos uma lógica específica para a renderização, 
do 'if'. Se formos analisar, o if é executado caso alguma condição retorne 
verdadeiro.<br/>
Veja o exemplo abaixo, que estamos importando de dentro de props, uma
 propriedade chamada <em>test</em>, essa proriedade é a responsável
 por verificar a condição passada pelo usuário e caso retorne <strong>true</strong>
 então a condição foi validada.<br/>
<pre>
<code>
export default props => {

    const {test} = props;

    return(
        < div >
            {test ? props.children : ''}
        < /div >
    )
}
</code>
</pre>

Veja um exemplo utilizando o componente <em>If</em>: <br/>
<pre>
<code>
            < If test={usuario && usuario.nome} >
               Seja bem vindo < strong >{ usuario.nome }< /strong >
            < /If >
</code>
</pre>
Nesse caso a mensagem 'Seja bem vindo....', será renderizada somente se
a condição do usuário existir juntamente com o nome desse usuário.
Caso contrário se uma dessas condições retornarem <strong>false</strong>,
a mensagem não será exibida.
<br/><br/>
Agora vamos seguir para a codificação do componente <Else>.
<br/>
Antes de tudo, precisamos verificar se dentro de nosso componente <em>If</em>,
há, algum componente else. Pois não obrigatoriamente precisa conter um <em>Else</em>.
<br/>
<pre>
<code>
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else';
    })[0];
    
    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })
    
    if([validação]){
        return ifChildren;
    }
    else if(elseChild){
        return elseChild;
    }
    else{
        return false;
    }
</code>
</pre>
<hr/>




<strong></strong>
<br/>
<hr/>

