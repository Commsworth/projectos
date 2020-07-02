import React from 'react'
import './FormInput.styles.scss'

const FormInput = ({handleChange, validation, error, label, id, phoneExp, ...otherProps}) => (
    <div className='group'>
        {
            label ?
            (<label htmlFor={id}>
                {label} 
                {error ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                        <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                                    </svg> : ""}
            </label>) : null}

        <input id ={id} onBlur={validation} onKeyDown={phoneExp} {...otherProps}  onChange={handleChange}/>

        {error ? null : <svg className="form-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#0f912c" />
                                    </svg>}
    </div>
)
 
export default FormInput