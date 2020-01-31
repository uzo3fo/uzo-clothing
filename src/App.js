import React from 'react';
import './App.css';
import{ Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/HatsPage'



function App() {
  return (
    <div>
     <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
     </Switch>
     }
    </div>
  );
}

export default App;
