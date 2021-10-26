import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ResponsiveBar} from '@nivo/bar';
import data from './components/Graph/Data/data';
import ResponsiveBarComponent from './components/Graph/ResponsiveBar';

function App() {

  return (
    <div className="App">
      <ResponsiveBarComponent data={data}/>
    </div>
  );
}

export default App;
