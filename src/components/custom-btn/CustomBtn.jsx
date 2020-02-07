import React from 'react';
import './customBtn.styles.scss'

function CustomBtn({children, isGoogleSignIn, ...otherProps}) {
    return (
        <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    )
}

export default CustomBtn
