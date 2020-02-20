import React from 'react';
import './App.css';
import{ Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import Header from './components/header/Header'
import Sign from './pages/sign/sign-in-sign-out'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'



class App extends React.Component{
  

  unsubcribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //check if user is signed in
      if (userAuth) {
        //get userRef(doc) from cUPD, is no user ref, create a new userRef from the firebase.utils file and return the userRef
        const userRef = await createUserProfileDocument(userAuth);
        //listen to changes in the userRef
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        });
      }

     else{ 
       //if user is loggedOut, currentUser= null(userAuth=null)
       setCurrentUser(userAuth);
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
        <Header />
       <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route exact 
            path='/signin' 
            render = { ()=> 
            this.props.currentUser ? 
            (<Redirect to='/'  />) :
            (<Sign />)
            }
          />
       </Switch>
      </div>
    );
  }
  
}
//redirect
const mapStateToProps = ({ user }) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
