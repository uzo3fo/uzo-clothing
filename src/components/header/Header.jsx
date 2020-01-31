import React from 'react';
import './header.styles.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to='/' className="logo-container">UZO</Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/contact'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Header
