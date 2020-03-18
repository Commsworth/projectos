import React from 'react';
import './contact-form-select.styles.scss';

const ContactFormSelect=(props)=>(
    <div className="contact-form-select">
                <label className={`${props.value.length?'shrink':''} label`}>{props.label}</label>
            <select >
                {props.optionsArray.map(arr=>(
                    <option value={`${arr}`}>{arr}</option>
                ))}
            </select>
    </div>
)

export default ContactFormSelect;