import React from 'react';
import './App.css';
import{ Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/Header'
import Sign from './pages/sign/sign-in-sign-out'
import { auth } from './firebase/firebase.utils'



class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser: null
    }
  }

  unsubcribeFromAuth = null

  componentDidMount(){
    //listen to auth changes
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user})

      console.log(user)
    });
  }
//close subscription
  componentWillUnmount(){
    this.unsubcribeFromAuth()
  }
  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
       <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={Sign} />
       </Switch>
      </div>
    );
  }
  
}

export default App;
