import React, { Component } from 'react'
import '../scss/ctap.scss'
import Layout from '../components/Layout'
import Modal from '../components/modal/Modal'
import Socials from '../components/extra/socials/socials.component'

const initialState = {
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
    jobRole: "",
    message: "",
    scope: "",
    companyNameError: true,
    companySizeError: true,
    jobRoleError: true,
    messageError: true,
    scopeError: true,
    phoneError: true,
    nameError: true,
    emailError: true,
}
class ctap extends Component {
    constructor(props) {
        super(props)

        this.state = initialState
    }

    showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        });

    }

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        })
    }


    phone  = (e) => {
        const phone = document.getElementById('phone');

        if (e.key === "Backspace" || e.key === "Delete") return;
        if (e.target.value.length === 4) {
            phone.value = phone.value + "-";
        }
        if (e.target.value.length === 8)
            phone.value = phone.value + "-";

        if (e.target.value.length === 13) {
            phone.value = phone.value + "-";
        }
    }

    telephoneCheck = (str) => {
        let isphone = /^\+?1?\s*?\(?\d{4}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/.test(str);
        return isphone
    }

    validate = () => {
        let nameError;
        let emailError;
        let phoneError
        let companyNameError;
        let companySizeError;
        let jobRoleError;
        let messageError;
        let scopeError;

        if (!this.state.name) {
            nameError = true
        }
        if (!this.state.companyName) {
            companyNameError = true
        }
        if (!this.state.companySize) {
            companySizeError = true
        }
        if (!this.state.jobRole) {
            jobRoleError = true
        }
        if (!this.state.message) {
            messageError = true
        }
        if (!this.state.scope) {
            scopeError = true
        }
        if (!this.state.email.includes('com')) {
            emailError = true
        }

        if (!this.telephoneCheck(this.state.phone)) {
            phoneError = true
        }


        if (emailError || nameError || phoneError || companyNameError || companySizeError || jobRoleError || messageError || scopeError) {
            this.setState({ emailError, nameError, phoneError, companySizeError, companyNameError, jobRoleError, messageError, scopeError })
            return false
        }

        return true
    }

    validation = (event) => {
        const isValid = this.validate();
        if (isValid) {
            this.setState({ emailError: false, nameError: false, phoneError: false, companySizeError: false, companyNameError: false, jobRoleError: false, messageError: false, scopeError: false })
        }
    }



    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.showModal()
            this.setState(initialState)
        }

    }


    render() {
        return (
            <Layout>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <div className="ctap-flex">
               <h1 className="ctap-head">Cyber Threat Assessment Program</h1>
            <div className="contact">
                <div className="pad">
                    <h1>Assess threat to your business</h1>
                        <div className="pad-flx"> <svg width="32" height="4" viewBox="0 0 32 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2H30" stroke="#076fd9" stroke-width="4" stroke-linecap="round" />
                        </svg>
  <h1>Powered by Fortinet</h1></div>
                        <p>The Cyber Threat Assessment Program (CTAP) is 
                            designed to help you during greenfield and renewal 
                            opportunities to convert prospects and expand your 
                            business by giving customers an in-depth view of the
                            urrent state of their network.</p> <p>After deploying a
                            FortiGate to monitor your network for a short period of
                            time, a report is generated that provides visibility
                            into your network risks, and allows you to position a
                            clear path forward that will quickly gain buy-in from
                              key technical and business decision makers. </p>




                        </div>

                    <div className="form pad2">
                            <h1>Request a session</h1>

                            <form onSubmit={this.handleSubmit}>

                                <div className="form-flex"><label htmlFor="name">Name {this.state.nameError ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                    <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                                </svg> : ""}
                                </label>
                                    <input type="text" id="name" name="name" onBlur={this.validation} value={this.state.name}
                                        onChange={this.handleChange} />
                                    {this.state.nameError ? "" : <svg className="form-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#0f912c" />
                                    </svg>} </div>


                                <div className="form-flex"><label htmlFor="email">Email  {this.state.emailError ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                    <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                                </svg> : ""}</label>
                                    <input type="email" id="email" name="email" onBlur={this.validation} value={this.state.email}
                                        onChange={this.handleChange} />
                                    {this.state.emailError ? null : <svg className="form-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#0f912c" />
                                    </svg>} </div>


                                <div className="form-flex">
                                    <label htmlFor="phone">Mobile Number  {this.state.phoneError ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                        <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                                    </svg> : ""}</label>
                                    <input type="tel" id="phone" name="phone" onBlur={this.validation} onKeyPress={this.phone} value={this.state.phone}
                                        onChange={this.handleChange} />
                                    {this.state.phoneError ? null : <svg className="form-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#0f912c" />
                                    </svg>}
                                </div>

                                <div className="form-flex">
                                    <label htmlFor="companyName">Company Name  {this.state.companyNameError ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                        <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                                    </svg> : ""}</label>

                                    <input type="text" name="companyName" onBlur={this.validation} id="companyName" value={this.state.companyName} onChange={this.handleChange} />
                                    {this.state.companyNameError ? null : <svg className="form-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#0f912c" />
                                    </svg>}
                                </div>

                                <div className="form-flex">
                                    <label htmlFor="companySize">Company Size {this.state.companySizeError ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                        <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                                    </svg> : ""}</label>
                                    <select id="companySize" name="companySize" value={this.state.companySize} onBlur={this.validation} onChange={this.handleChange}>
                                        <option value="50">10 - 50</option>
                                        <option value="100">50 - 100</option>
                                        <option value="500">100 - 500</option>
                                        <option value="1000">1000 > </option>
                                    </select>
                                    {this.state.companySizeError ? null : <svg className="form-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#0f912c" />
                                    </svg>}
                                </div>

                                <div className="form-flex">
                                    <label htmlFor="jobRole">Job Role {this.state.jobRoleError ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                        <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                                    </svg> : ""}</label>
                                    <input type="text" id="jobRole" name="jobRole" value={this.state.jobRole} onBlur={this.validation} onChange={this.handleChange} />
                                    {this.state.jobRoleError ? null : <svg className="form-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#0f912c" />
                                    </svg>}
                                </div>

                                <div className="form-flex">
                                    <label htmlFor="scope">CTAP Scope {this.state.scopeError ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                        <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                                    </svg> : ""}</label>
                                    <select id="scope" name="scope" value={this.state.scope} onBlur={this.validation} onChange={this.handleChange}>
                                        <option value="australia">Get a demo</option>
                                        <option value="canada">Get a demo</option>
                                        <option value="usa">Get a demo</option>
                                    </select>
                                    {this.state.scopeError ? null : <svg className="form-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#0f912c" />
                                    </svg>}
                                </div>
                                <br />

                                <div className="form-flex">
                                    <label htmlFor="message">Message (optional)  {this.state.messageError ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                        <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                                    </svg> : ""}</label>
                                    <input type="text" id="message" name="message" value={this.state.message} onBlur={this.validation} onChange={this.handleChange} />
                                    {this.state.messageError ? null : <svg className="form-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#0f912c" />
                                    </svg>}
                                </div>

                                <input type="submit" value="Shoot" />
                            </form>
                            <Modal  onclose={this.showModal} show={this.state.show}>
                                <h1 style={{ fontSize: 24, color: "white", }}>Your message has been received</h1>
                                <p style={{ fontSize: 14, color: "white", textAlign: "center", marginBottom: 10, marginTop: 10 }}>Need more information? Reach out to our sales team.</p>
                            </Modal>
                    </div>
                        </div>
                    <Socials />
                    </div>
            </Layout>
        )
    }
}

export default ctap