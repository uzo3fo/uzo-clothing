import React from 'react';
import './sign.styles.scss';
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

function Sign() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Sign
