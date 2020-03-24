import React from 'react';
import './contact-form-select.styles.scss';

const ContactFormSelect=(props)=>(
    <div className="contact-form-select">
                <label className={`${props.value.length?'shrink':''} label`}>{props.label}</label>
            <select style={{fontSize: "18px", fontFamily: "aribau-grotesk" }}>
                {props.optionsArray.map(arr=>(
                    <option style={{fontSize: "18px", fontFamily: "aribau-grotesk" }} value={`${arr}`}>{arr}</option>
                ))}
            </select>
    </div>
)

export default ContactFormSelect;