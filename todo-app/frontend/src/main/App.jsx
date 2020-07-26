import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import React from 'react';

import Todo from '../todo/todo';
import About from '../about/about';

export default props => {
    return(
        <h1 className="container">
            <Todo />
            <About />
        </h1>
    );
}