import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';
import './Content.css';

const Content = props => {
    return (
        <main className='Content'>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/about'} component={About} />
                <Route exact path={'/param/:id'} component={Param}/> 
                <Route path={'*'} component={NotFound} />
            </Switch>
        </main>
    );
}

export default Content;