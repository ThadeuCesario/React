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