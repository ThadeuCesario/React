import React from 'react';
import ReactDOM from 'react-dom';

/* Import components */
import Calculator from "./Main/Calculator";

/* Import Css */
import './index.css';

ReactDOM.render(
  <React.StrictMode>
      <h1>Calculator</h1>
      <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);