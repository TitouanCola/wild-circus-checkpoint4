import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage'
import Planning from './Components/Planning/Planning'
import Vote from './Components/Vote/Vote'
import Wheel from './Components/Wheel/Wheel'
import Prices from './Components/Prices/Prices'
import VoteAdmin from './Components/Admin/Vote/VoteAdmin'

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/vote' component={VoteAdmin} />
      </Switch>
      <HomePage />
      {/* <Planning /> */}
      <div className="responsiveComponents">
        <Vote />
        <Wheel />
      </div>
      <Prices />
    </div>
  );
}

export default App;
