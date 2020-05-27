import React, { Component } from 'react'
import '../scss/ctap.scss'
import Layout from '../components/Layout'

const initialState = {
    name: "",
    email: "",
    phone: "",
    phoneError: true,
    nameError:true,
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
         let nameError ;
         let emailError;
         let phoneError

         if (!this.state.name){
             nameError = true
         }
         if (!this.state.email.includes('com')){
             emailError= true
         }

         if (!(this.state.phone)){             
            phoneError = true
         }

         if (emailError || nameError || phoneError) {
             this.setState({emailError, nameError, phoneError})
             return false
         }  
         
         else {
             this.setState({emailError: false, nameError: false, phoneError: false})
             return true
         }  
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
        console.log(this.state)
           

        // this.setState(initialState)
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
               <h1 className="ctap-head">Cyber Threat Assessment Program</h1>
            <div className="contact">
                <div className="pad">
                    <h1>Assess threat to your business</h1>
                        <div className="pad-flx"> <svg width="32" height="4" viewBox="0 0 32 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2H30" stroke="#208FFF" stroke-width="4" stroke-linecap="round" />
                        </svg>
  <p>Powered by Fortinet</p></div>
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

                       <div className="form-flex"><label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={this.state.name}
                        onChange={this.handleChange} />
                                {this.state.nameError ? "" : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#14CD3D" />
                                </svg> } </div>
                           

                        <div className="form-flex"><label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email"  value={this.state.email}
                                onChange={this.handleChange} />
                                {this.state.emailError ? null : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#14CD3D" />
                                </svg> } </div>


                            <div className="form-flex">
                            <label htmlFor="phone">Mobile Number</label>
                                <input type="tel" id="phone" name="phone" pattern="^\d{4}-\d{3}-\d{4}$" placeholder="234-567-890" value={this.state.phone}
                                    onChange={this.handleChange}/>
                                {this.state.emailError ? null : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9574 0.820312L5.54258 9.27773L1.75 5.48789L0 7.23789L5.83242 13.0703L14 2.57031L11.9574 0.820312Z" fill="#14CD3D" />
                                </svg>}
                            </div>

                            <div className="form-flex">
                        <label htmlFor="fname">Company Name</label>
                        <input type="text" id="fname" name="firstname"  />
                            </div>

                            <div className="form-flex">
                        <label htmlFor="fname">Company Size</label>
                        <input type="text" id="fname" name="firstname"  />
                        </div>

                            <div className="form-flex">
                        <label htmlFor="fname">Job Role</label>
                        <input type="text" id="fname" name="firstname"  />
                        </div>

                        {/* <div className="form-flex">
                        <label htmlFor="country">CTAP Scope</label>
                        <select id="country" name="country">
                            <option value="australia">Get a demo</option>
                            <option value="canada">Get a demo</option>
                            <option value="usa">Get a demo</option>
                        </select>
                        </div> */}
                        <br />

                        <div className="form-flex">
                        <label htmlFor="fname">Message (optional)</label>
                        <input type="text" id="fname" name="firstname"  /> 
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