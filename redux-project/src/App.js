import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/card/Card";



function App() {
  return (
    <div className="App">
        <h1>React/Redux</h1>
        <div className={'linha'}>
            <Card title={'Card 1'} red>
                A
            </Card>
            <Card title={'Card 1'} green>
                A
            </Card>
        </div>
        <div className={'linha'}>
            <Card title={'Card 3'} blue>
                X
            </Card>
            <Card title={'Card 4'} purple>
                X
            </Card>
        </div>
    </div>
  );
}

export default App;
