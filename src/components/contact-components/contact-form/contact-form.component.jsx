import React from 'react';
import './contact-form.styles.scss';
import ContactFormInput from './contact-form-input/contact-form-input.component';
import ContactFormSelect from './contact-form-select/contact-form-select.component';
import {FormName,FormEmail,FormCountry,FormCompanyName,FormCompanySize,FormJobRole,FormMobileNumber,FormMessage,FormIWant} from '../../svgs/commsworth';

const optionsArray=['A boy','A girl']

const ContactForm = () =>(
    <div>
        <ContactFormInput label={<FormName/>}/>
        <ContactFormInput label={<FormEmail/>}/>
        <ContactFormInput label={<FormMobileNumber/>}/>
        <ContactFormInput label={<FormCountry/>}/>
        <ContactFormInput label={<FormCompanyName/>}/>
        <ContactFormInput label={<FormCompanySize/>}/>
        <ContactFormInput label={<FormJobRole/>}/>
        <ContactFormSelect label={<FormIWant/>} optionsArray={optionsArray}/>
        <ContactFormInput label={<FormMessage/>}/>
    </div>
)

export default ContactForm;