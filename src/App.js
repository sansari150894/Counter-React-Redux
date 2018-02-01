import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterComp from './components/counter';
import Counter from '../src/actions/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterComp/>
      </div>
    );
  }
}

export default App;
