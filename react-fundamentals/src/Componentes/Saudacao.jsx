import React, {Component} from 'react';

export default class Saudacao extends Component{

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props){
        super(props);

        this.setTipo = this.setTipo.bind(this);
        // this.setNome = this.setNome.bind(this);

        console.log('props', props);
        console.log('this', this);

    }

    setTipo(e){
        // let i = 1;
        // setInterval(() => {
        //     this.setState({ tipo : ++i});
        // }, 1000)
        this.setState({ tipo : e.target.value});
    }

    setNome(e){
        this.setState({ nome: e.target.value});
    }
    render(){
        const {tipo, nome} = this.state;
        return (
            <div>
                <h1>
                    {tipo} {nome} !
                    <hr />
                    <input type="text" placeholder="Tipo...." value={tipo} onChange={this.setTipo}/>
                    <input type="text" placeholder="Nome...." value={nome} onChange={e => this.setNome(e)}/>
                </h1>
            </div>
        )
    }
}