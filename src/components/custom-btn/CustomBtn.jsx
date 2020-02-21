import React from 'react';
import './customBtn.styles.scss'

function CustomBtn({children, isGoogleSignIn, inverted, ...otherProps}) {
    return (
        <button
        className={`
        ${inverted ? 'inverted' : ''}
        ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    )
}

export default CustomBtn
