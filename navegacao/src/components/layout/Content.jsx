import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import './Content.css';

const Content = props => {
    return (
        <main className='Content'>
            <Switch>
                <Route path={'/about'} component={About}/>
                <Route path={'/'} component={Home}/>
            </Switch>
        </main>
    );
}

export default Content;