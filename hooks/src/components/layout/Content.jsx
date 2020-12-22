import './Content.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../views/examples/Home';
import NotFound from '../../views/examples/NotFound';
import UseState from '../../views/examples/UseState';

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path="/useState" component={UseState}/>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    </main>
)

export default Content