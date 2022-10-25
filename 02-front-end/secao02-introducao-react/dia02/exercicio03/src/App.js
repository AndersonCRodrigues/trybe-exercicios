import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Exercise - Pokedex</h1>
        <Pokedex />
      </>
    );
  }
}

export default App;
