import React, { Component } from 'react'
import '../scss/ctap.scss'
import '../scss/contacts.scss'
import Layout from '../components/Layout'


const initialState = {
    name: "",
    email: "",
    phone: "",
    phoneError: true,
    nameError: true,
    emailError: true
}
class ctap extends Component {
    constructor(props) {
        super(props)

        this.state = initialState

    }

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        })
    }

    validate = () => {
        let nameError;
        let emailError;
        let phoneError

        if (!this.state.name) {
            nameError = true
        }
        if (!this.state.email.includes('com')) {
            emailError = true
        }

        if (!this.state.phone) {
            phoneError = true
        }

        if (emailError || nameError || phoneError) {
            this.setState({ emailError, nameError, phoneError })
            return false
        }

        return true
    }


    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState({ emailError: false, nameError: false, phoneError: false })
            console.log(this.state)


            // this.setState(initialState)
        }
    }
    render() {
        return (
            <Layout>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="ctap-head">Get In touch</h1>
                <div className="contact">
                    <div className="pad">
                        <h1>Contact Us</h1>
                        
                        <p>Got questions about our services? 
                            Fill out the form to the right and a Commsworth 
                            representative will contact you. Alternatively, 
                            you can reach out to us accross our Omni-channel 
                            platforms below. </p>

                        <div className="contacts-flx">
                            <div></div>
                            <div></div>
                        </div>

                        <div className="contacts-flx">
                            <div>
                                <img src="/static/sales.svg" alt=""/>
                                <h1>Chat with Sales</h1>
                                <p>Availablee Monday-Friday</p>
                                <p>9AM to 5PM GMT+1</p>
                                <a href="">Chat now ></a>
                                </div>
                            <div>
                                <img src="/static/email.svg" alt="" />
                                <h1>Chat with Sales</h1>
                                <p>Availablee Monday-Friday</p>
                                <p>9AM to 5PM GMT+1</p>
                                <a href="">Chat now ></a>
                            </div>
                        </div>
                        <br/>
                        <div className="contacts-flx">
                            <div>
                                <img src="/static/tel.svg" alt=""/>
                                <h1>Chat with Sales</h1>
                                <p>Availablee Monday-Friday</p>
                                <p>9AM to 5PM GMT+1</p>
                                <a href="">Chat now ></a>
                                </div>
                            <div>
                                <img src="/static/visit.svg" alt="" />
                                <h1>Chat with Sales</h1>
                                <p>Availablee Monday-Friday</p>
                                <p>9AM to 5PM GMT+1</p>
                                <a href="">Chat now ></a>
                            </div>
                        </div>


                    </div>
                    <div className="form pad2">
                        <h1>Request a session</h1>

                        <form onSubmit={this.handleSubmit}>

                            <div className="form-flex"><label htmlFor="name">Name {this.state.nameError ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                            </svg> : ""}
                            </label>
                                <input type="text" id="name" name="name" value={this.state.name}
                                    onChange={this.handleChange} />
                                {this.state.nameError ? "" : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#14CD3D" />
                                </svg>} </div>


                            <div className="form-flex"><label htmlFor="email">Email  {this.state.emailError ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                            </svg> : ""}</label>
                                <input type="email" id="email" name="email" value={this.state.email}
                                    onChange={this.handleChange} />
                                {this.state.emailError ? null : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#14CD3D" />
                                </svg>} </div>


                            <div className="form-flex">
                                <label htmlFor="phone">Mobile Number  {this.state.phoneError ? <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="asterik">
                                    <path d="M6.016 5.776L6.64 4.704L4.768 3.76L6.64 2.816L6.016 1.744L4.272 2.88L4.384 0.799999H3.136L3.248 2.88L1.504 1.744L0.88 2.816L2.752 3.76L0.88 4.704L1.504 5.776L3.248 4.64L3.136 6.72H4.384L4.272 4.64L6.016 5.776Z" fill="#C63C53" />
                                </svg> : ""}</label>
                                <input type="tel" id="phone" name="phone" pattern="^\d{4}-\d{3}-\d{4}$" placeholder="234-567-890" value={this.state.phone}
                                    onChange={this.handleChange} />
                                {this.state.phoneError ? null : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#14CD3D" />
                                </svg>}
                            </div>

                            <div className="form-flex">
                                <label htmlFor="fname">Company Name</label>
                                <input type="text" id="fname" name="firstname" />
                            </div>

                            <div className="form-flex">
                                <label htmlFor="fname">Company Size</label>
                                <input type="text" id="fname" name="firstname" />
                            </div>

                            <div className="form-flex">
                                <label htmlFor="fname">Job Role</label>
                                <input type="text" id="fname" name="firstname" />
                            </div>

                            <div className="form-flex">
                                <label htmlFor="country">CTAP Scope</label>
                                <select id="country" name="country">
                                    <option value="australia">Get a demo</option>
                                    <option value="canada">Get a demo</option>
                                    <option value="usa">Get a demo</option>
                                </select>
                            </div>
                            <br />

                            <div className="form-flex">
                                <label htmlFor="fname">Message (optional)</label>
                                <input type="text" id="fname" name="firstname" />
                            </div>

                            <input type="submit" value="Shoot" />
                        </form>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ctap