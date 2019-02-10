import React, { Component } from 'react';
import './App.css';
import { Reports } from './components/reports';
import Drag from './components/drag';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reports/>
        <hr/>
        <Drag/>
      </div>
    );
  }
}

export default App;
