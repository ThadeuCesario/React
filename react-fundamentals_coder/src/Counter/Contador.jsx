import React, {Component} from 'react';

class Contador extends Component{
    constructor(props) {
        super(props);

        this.state = {
            numero: props.numeroInicial || 0,
            passo: props.valorIncremento || 5,
        }
    }

    inc = _ => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = _ => {
        this.setState({
           numero: this.state.numero - this.state.passo,
        });
    }

    getNewValue = (event) => {
        if(!isNaN(Number(event.target.value))){
            this.setState({
                passo: Number(event.target.value)
            })
        }
        else{
            alert('Insira um valor válido');
            this.setState({
                passo: 0
            });
        }
    }

    render() {
        return(
            <>
                <div>Contador</div>
                <div>Valor: {this.state.numero}</div>
                <div>
                    <label type={'text'}>Passo</label>
                    <input type='number' id={'passo'} onChange={this.getNewValue} />
                </div>
                <button onClick={this.inc}>Incrementar</button>
                <button onClick={this.dec}>Decrementar</button>
            </>
        );
    }
}

export default Contador;
