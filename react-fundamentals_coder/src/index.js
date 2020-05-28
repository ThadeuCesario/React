import ReactDOM from 'react-dom';
import React from 'react';

import './index.css';

const tag = <strong>React é Show!</strong>;
const root = document.getElementById('root');

ReactDOM.render(<div>{tag}</div>, root);