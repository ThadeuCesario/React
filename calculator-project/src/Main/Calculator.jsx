import React, {Component} from 'react';

/* Import CSS */
import './Calculator.css';

/* Import Components */
import Button from "../Components/Button";
import Display from "../Components/Display";

export default class Calculator extends Component{

    constructor(props) {
        super(props);

        this.addDigit = this.addDigit.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.clearMemory = this.clearMemory.bind(this);
    }

    clearMemory(){
        console.log('limpar');
    }

    setOperation(operation){
        console.log(operation);
    }

    addDigit(n){
        console.log(n);
    }


    render() {
        return(
            <div className={'calculator'}>
                <Display value={100} />
                <Button label={'AC'} click={this.clearMemory} triple={true}/>
                <Button label={'/'}  click={this.setOperation} operation={true}/>
                <Button label={'7'}  click={this.addDigit}/>
                <Button label={'8'}  click={this.addDigit}/>
                <Button label={'9'}  click={this.addDigit}/>
                <Button label={'*'}  click={this.setOperation} operation={true}/>
                <Button label={'4'}  click={this.addDigit}/>
                <Button label={'5'}  click={this.addDigit}/>
                <Button label={'6'}  click={this.addDigit}/>
                <Button label={'-'}  click={this.setOperation} operation={true}/>
                <Button label={'1'}  click={this.addDigit}/>
                <Button label={'2'}  click={this.addDigit}/>
                <Button label={'3'}  click={this.addDigit}/>
                <Button label={'+'}  click={this.setOperation} operation={true}/>
                <Button label={'0'}  click={this.addDigit} double={true}/>
                <Button label={'.'}  click={this.addDigit}/>
                <Button label={'='}  click={this.setOperation} operation={true}/>
            </div>
        );
    }
}