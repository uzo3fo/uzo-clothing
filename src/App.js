import React from 'react';
import './App.css';
import{ Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/Header'
import Sign from './pages/sign/sign-in-sign-out'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'



class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser: null
    }
  }

  unsubcribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //check if user is signed in
      if (userAuth) {
        //get userRef(doc) from cUPD, is no user ref, create a new userRef from the firebase.utils file and return the userRef
        const userRef = await createUserProfileDocument(userAuth);
        //listen to changes in the userRef
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }

     else{ 
       //if user is loggedOut, currentUser= null(userAuth=null)
       this.setState({ currentUser: userAuth });
     }
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
