import React from 'react';
import './contact-form-select.styles.scss';

const ContactFormSelect=(props)=>(
    <div className="contact-form-select">
        <div>
            {props.label}
        </div>
        <div>
            <select >
                {props.optionsArray.map(arr=>(
                    <option value={`${arr}`}>arr</option>
                ))}
            </select>
        </div>
    </div>
)

export default ContactFormSelect;