import React from 'react';
import './contact-form.styles.scss';
import ContactFormInput from './contact-form-input/contact-form-input.component';
import ContactFormSelect from './contact-form-select/contact-form-select.component';
import {FormName,FormEmail,FormCountry,FormCompanyName,FormCompanySize,FormJobRole,FormMobileNumber,FormMessage,FormIWant} from '../../svgs/commsworth';

const optionsArray=['A boy','A girl']


class ContactForm extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            mobileNumber: "",
            country: "",
            companyName: "",
            size: "",
            jobRole: "",
            iWant: "",
            message: "",
        }
    }
    
    handleChange=event=>{
        const { value, name } = event.target;
        this.setState({ [name]: value},()=>{
            console.log(this.state.name)
        });
    }
    render(){
        return(
    <div>
        <ContactFormInput label={<FormName/> } handleChange = {this.handleChange} name = "name" value={this.state.name}/>
        <ContactFormInput label={<FormEmail/>} handleChange = {this.handleChange} name="email" value={this.state.email}/>
        <ContactFormInput label={<FormMobileNumber/>} handleChange = {this.handleChange} name="mobileNumber" value={this.state.mobileNumber}/>
        <ContactFormInput label={<FormCountry/>} handleChange = {this.handleChange} name="country" value={this.state.country}/>
        <ContactFormInput label={<FormCompanyName/>} handleChange = {this.handleChange} name="companyName" value={this.state.companyName}/>
        <ContactFormInput label={<FormCompanySize/>} handleChange = {this.handleChange} name="size" value={this.state.size}/>
        <ContactFormInput label={<FormJobRole/>} handleChange = {this.handleChange} name="jobRole" value={this.state.jobRole}/>
        <ContactFormSelect label={<FormIWant/>} optionsArray={optionsArray} handleChange = {this.handleChange} name="iWant" value={this.state.iWant}/>
        <ContactFormInput label={<FormMessage/>} handleChange = {this.handleChange} name="message" value={this.state.message}/>
    </div>
        )
    }
}

export default ContactForm;