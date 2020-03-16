import React from 'react';
import './contact-form-input.styles.scss';

const ContactFormInput=(props)=>(
    <div className="contact-form-input-flex">
            <input type="text" className="contact-input"/>
            <label className="label">{props.label}</label>
    </div>
)

export default ContactFormInput;