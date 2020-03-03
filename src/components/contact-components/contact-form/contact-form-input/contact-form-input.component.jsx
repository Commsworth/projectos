import React from 'react';
import './contact-form-input.styles.scss';

const ContactFormInput=(props)=>(
    <div className="contact-form-input-flex">
        <div className="label">
            {props.label}
        </div>
        <div>
            <input type="text" className="contact-input"/>
        </div>
    </div>
)

export default ContactFormInput;