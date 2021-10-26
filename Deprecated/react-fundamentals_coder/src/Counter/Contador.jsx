import React, {Component} from 'react';

/* Import components */
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

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

    getNewValue = (novoPasso) => {
        if(!isNaN(Number(novoPasso))){
            this.setState({
                passo: Number(novoPasso)
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
                <Display value={this.state.numero}></Display>
                <PassoForm setValue={this.getNewValue} passo={this.state.passo}></PassoForm>
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
            </>
        );
    }
}

export default Contador;
