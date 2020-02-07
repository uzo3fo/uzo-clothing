import React, { Component } from 'react';
import './signIn.styles.scss';
import FormInput from '../form-input/FormInput';
import CustomBtn from '../custom-btn/CustomBtn';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

export class SignIn extends Component {
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: ''
        }
    }
    //handle submit
    handleSubmit = async event => {
        event.preventDefault();
    
        const { email, password } = this.state;
    
        try {
          await auth.signInWithEmailAndPassword(email, password);
          this.setState({ email: '', password: '' });
        } catch (error) {
          console.log(error);
        }
      };
    //handle change
    handleChange=(e)=>{
        const { name, value} = e.target
        this.setState({[name]: value})
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>sign-in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label= 'email'
                        />
                   
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label= 'password'
                        />
                   
                    <div className='buttons'>
                    <CustomBtn type="submit">sign in</CustomBtn>
                    <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>  sign in with Google  </CustomBtn>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn

