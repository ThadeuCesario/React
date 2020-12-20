import React from 'react';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import './App.css';

const App = props => {
    return (
        <div className='App'>
            <Menu />
            <Content />
        </div>
    );
}

export default App;