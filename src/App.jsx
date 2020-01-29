import React from 'react';
import HomePage from './Components/HomePage/HomePage'
import Planning from './Components/Planning/Planning'
import Vote from './Components/Vote/Vote'
import Wheel from './Components/Wheel/Wheel'
import Prices from './Components/Prices/Prices'

import './App.css';

function App() {
  return (
    <div className='App'>
        <HomePage />
        <Vote />
        <Planning />
        <Wheel />
        <Prices />
    </div>
  );
}

export default App;
