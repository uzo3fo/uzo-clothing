import React from 'react';
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

function Header({ currentUser }) {
    return (
        <div className='header'>
            <Link to='/' className="logo-container">UZO</Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/contact'>CONTACT</Link>
                {
                    currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    currentUser: state.currentUser
})

export default connect (mapStateToProps)(Header)
