import React from 'react';
import './App.css';
import{ Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/Header'
import Sign from './pages/sign/sign-in-sign-out'



function App() {
  return (
    <div>
      <Header/>
     <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/contact' component={Sign} />
     </Switch>
     }
    </div>
  );
}

export default App;
