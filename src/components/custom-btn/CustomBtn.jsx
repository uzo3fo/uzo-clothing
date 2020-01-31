import React from 'react';
import './customBtn.styles.scss'

function CustomBtn({children, ...OtherProps}) {
    return (
        <button className='custom-button' {...OtherProps}>
            {children}
        </button>
    )
}

export default CustomBtn
