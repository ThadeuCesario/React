export function reducer(state, action) {
    /**
     * A função reducer receberá dois parâmetros.
     * Sendo o primeiro o estado atual e o segundo uma action (ação).
     * Basicamente com a ação recebida, saberemos como vamos atualizar o estado da nossa aplicação
     * para a nova versão. Toda a ação tem um tipo, que é o nome dela. O type da ação que definirá
     * como vamos evoluir o estado de nossa aplicação.
     * 
     * Toda ação possui pelo menos o atributo tipo, sendo que esse atributo define o que será realizado.
     * 
     * Lembrando que o objetivo da função reducer é pegar o estado atual e para cada ação que ocorrer, o estado
     * de nossa aplicação será evoluido. Veja que criamos uma ação com o type 'numberAdd2'.
     * 
     * O dispatch é uma ação que muda o estado de nossa aplicação.
     * Dentro da nossa ação (o dispatch), podemos passar um segundo atributo conhecido como payload.
     * Em nosso exemplo eu apena chamei de name, então dentro da ação teremos o type dela e também
     * um parâmetro que queremos passar (geralmente chamamos de payload).
     */

     /**
      * Desafio:
      * Multiplicar por 7
      * dividir por 25
      * parse do numero e transformar para inteiro
      * adicionar um numero qualquer
      */

    switch(action.type) {
        case 'number_add2': 
            return {
                ...state,
                number: state.number + 2,
            }

        case 'number_mult7': 
            return {
                ...state,
                number: state.number * 7,
            }

        case 'number_div25': 
            return {
                ...state,
                number: state.number / 25,
            } 
        
        case 'number_round':
            return {
                ...state,
                number: Number.parseInt(state.number)
            }

        case 'number_addN': 
            return {
                ...state,
                number: Number(state.number) + Number(action.payload),
            }
        
        case 'login':
            return {
                ...state,
                user: {
                    name: action.payload,
                }
            }


        default:
            return state;
    }   
}