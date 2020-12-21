import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import './Content.css';

const Content = props => {
    return (
        <main className='Content'>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/about'} component={About} />
                <Route exact path={'/param/:id'} component={Param}/> 
            </Switch>
        </main>
    );
}

export default Content;