useState

O useState nos fornece dois elementos para que possamos trabalhar com ele. 
O primeiro é o valor atual do elemento e o segundo é uma função para que possamos alterar o valor de elemento.

const [value, setValue] = useState(0);

Veja que eu tenho um estado chamado 'value', que é inicializado com 0. 
Também estou aplicando um destructuring. Sendo que na primeira posição tenho o valor atual de 'value' e na segunda posição, eu tenho uma função
para setar um novo valor em value.


Passando uma função para dentro do setValue, pegaremos o valor atual do estado.

setValue(current => current + 1000) 

Portanto, acima estaremos somando 1000 ao valor atual do estado.

Obs.: Atenção dentro do setValue podemos passar uma função callback e essa função possui o valor mais atual do componente.
Essa abordagem é interessante quando desejarmos trabalhar com componentes cacheados e que não queremos renderizar novamente. 
Outro detalhe é que a função setValue será criada uma única vez, diferente do próprio 'value' que provavelmente será
alterado constantemente. Portanto a função setValue é um ótimo atributo para passarmos em funções cacheadas (utilizando o useCallback, que veremos mais para frente).

---------------------------------------------------------------

useEffect

Permite executar efeitos colaterais em componentes funcionais.
Portanto se queremos monitorar o estado de um componente para que ele seja atualizado assim que o estado atualizar, basta utilizarmos o useEffect.
Dentro do useEffect passamos dois parâmetros:

- Função para ser executada quando o estado que estamos observando for alterado
- Estado que estamos observando (array)

useEffect(() => {}, [estado1, estado2]);

Efeito colateral => Um dado foi alterado e essa alteração vai mudar um outro estado de sua aplicação. Para isso utilizamos o useEffect.

---------------------------------------------------------------

useRef

O useRef retorna um objeto e dentro dele temos uma propriedade chamada current (atual) e dentro de current que teremos nosso valor.

O 'Ref' está relacionado com referência, ou seja, temos uma referência de um objeto e esse objeto tem a referência de um atributo chamado current e
dentro do current, podemos ter valores númerico, strings.... 

O 'useRef' retorna um objeto e ele sempre retornará a mesma referência, ou seja, quando atribuímos o valor de um objeto em javascript para uma variável e pegamos essa variável e atribuímos para outra variável, chamamos isso de passagem por referência.
O 'useRef' retorna a referência de um objeto, de forma que ele sempre me retornará a mesma referência e podemos ter um estado a partir do atributo current.
Quando alteramos o valor que está armazenado na propriedade current, não há a necessidade de renderizar novamente o componente. Portanto, podemos até fazer isso: 

count.current = count.current + 1; //Não ocasionará uma nova renderização

Podemos alterar o valor do current sem disparar uma nova renderização!!!

---------------------------------------------------------------

UseMemo

Retorna um valor memorizado, basicamente vai retornar um valor que foi calculado como se fosse um cache.


---------------------------------------------------------------

UseCallback

É semelhante ao useMemo, porém o useMemo retorna um valor memorizado (em cache) e retorna o valor quando as dependências forem modificadas. No caso do useCallback ele retornará uma função cacheada, para que possamos usar a mesma função e não criar uma nova. 


---------------------------------------------------------------
React.memo

Quando temos um componente estático que depende apenas de suas propriedades e essas propriedades não são alteradas no decorrer
da execução. Podemos deixar esse componente cacheado utilizando o React.memo. 
Dessa forma o componente não será renderizado múltiplas vezes. Veja no componente UseCallbackButtons um exemplo utilizando o 
React.memo. 
No caso do componente UseCallbackButtons.jsx podemos notar que é um componente estático portanto podemos deixá-lo memorizado,
veja como coloquei a exportação dele: 

export default memo(UseCallbackButtons);

Mas nesse caso precisamos nos atentar em um detalhe. Veja que estou passando por propriedade para o componente UseCallbackButtons
uma função chamada inc. 
Porém essa função não está cacheada (lembre-se que para cachearmos uma função precisamos utilizar o useCallback), desta forma
o mesmo utilizando o 'memo' na exportação o componente UseCallbackButtons, continuará sendo renderizado.
Para resolvermos esse problema, bastará transformar a função inc em uma função utilizando o useCallback.

---------------------------------------------------------------
UseContext

Aceita um objeto de contexto e retorna o valor atual do contexto. 

Mas o que é um objeto de contexto? 
Um objeto de contexto é o objeto exportado utilizando o createContext extraído da bibilioteca do React.
Veja que em nosso exemplo o objeto de contexto é o DataContext que está dentro do arquivo DataContext.js

Depois de termos criado nosso contexto, precisamos utilizar em um ponto que seja possível utilizar em toda a nossa aplicação.
Lembrando que o nosso componente raíz é o componente App.

Nosso objeto de contexto possuirá o Provider que deve ser utilizado para englobar o componente principal, veja o exemplo abaixo: 

#########################
import DataContext, {data} from './data/DataContext';

ReactDOM.render(
    <DataContext.Provider value={data}>
        <App />
    </DataContext.Provider>,
    document.getElementById('root')
)
#########################

Veja também que existe um parâmetro chamado value que precisamos inicializar com o nosso data (o objeto que contém todos os dados do nosso contexto)

Mas como vamos fazer para utilizar? 
Dentro do componente que precisamos acessar o contexto, vamos importar o nosso objeto de contexto (DataContext) e também
o hook useContext e precisamos acessar da seguinte forma:

const context = useContext(DataContext);

Feito isso já estamos com acesso ao contexto e podemos pegar os dados utilizando a notação ponto. Por exemplo:
< span >{context.number}< /span >


Mas como alterar um dado do contexto?
Para alterar alguma informação do contexto, precisamos ter ciência de que vamos alterar o contexto inteiro.


---------------------------------------------------------------
ContextAPI

Quando temos uma aplicação utilizando algum framework baseado em componentes, muito provavelmente teremos uma grande árvore de componentes.
O problema dessa grande árvore é quando precisamos trocar informações em componentes que não estão próximos ou que não fazem 
nem parte do mesmo nó da árvore. Muito provavelmente para fazer essa transição da comunicação, vamos fazer algumas comunicações indiretas e uma várias comunicações diretas, para que a mensagem saia da origem e vá para o destino, o problema dessa aborgadem é que vamos envolver vários componentes que não estão relacionados com essa comunicação, esses componenentes servirão apenas como ponte para a comunicação. 

Portanto a melhor aborgadem é criarmos um estrutura que esteja fora da árvore mas envolvendo toda nossa aplicação. Esse seria o contexto onde será passado para todos os componentes na árvore, sem que necessariamente exista diversas comunicações indiretas e diretas. 
Quando temos uma árvore muito grande não faz sentido termos várias comunicações diretas e indiretas para que componentes distantes possam se conversar.

Portanto o contextAPI nada mais é que algo externo da árvore de componentes, que possamos ler essas informações desse contexto e podemos alterar as informações desse contexto.

É muito comum utilizar o ContextAPI junto com useReducer. O useReducer é uma alterntiva ao useState, quando temos estados mais complexos.
---------------------------------------------------------------
Outra Observações

Quando passamos sempre a mesma função para um componente filho e não queremos renderizar esse componente novamente, então podemos utilizar a técnica do useCallback. 

Usecallback utilizando a função 'set...' como dependência, porque sabemos que esta função é criada somente uma única vez. 
O componente que receberá nossa função deve ser exportado utilizando o memo, para que assim podemos deixar claro que será
um componente cacheado.
Veja os exemplos dos componenetes UseCallback e UseCallbackButtons.

