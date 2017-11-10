import React, { Component } from 'react';
import './App.css';
import Shelf from './components/Shelf/Shelf'
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
