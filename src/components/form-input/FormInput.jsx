import React from 'react';
import './formInput.styles.scss'

function FormInput({ handleChange, label, ...OtherProps}) {
    return (
        <div className='group'>
        <input onChange={handleChange} {...OtherProps} className="form-input"/>
        {
            label ?
            (<label 
                className={`${OtherProps.value.lenght ? 'shrink' : ''} form-input-label`}>
                {label}
                </label>
            )
            :null
        }
        
        </div>
    )
}

export default FormInput
