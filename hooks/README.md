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

