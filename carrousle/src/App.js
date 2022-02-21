import React, { Component } from 'react';
import './App.css';
import DiveMain from './main/DiveMain';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <DiveMain />
        </header>
      </div>
    );
  }
}

export default App;
