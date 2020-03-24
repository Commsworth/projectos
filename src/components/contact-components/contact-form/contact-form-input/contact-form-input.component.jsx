import React from 'react';
import './contact-form-input.styles.scss';

const ContactFormInput=(props)=>(
    <div className="contact-form-input-flex">
            <input type="text" className="contact-input" onChange={props.handleChange} name={props.name} style={{fontSize: "18px", fontFamily: "aribau-grotesk" }}/>
            <label className={`${props.value.length?'shrink':''} label`}>{props.label}</label>
    </div>
)

export default ContactFormInput;