import React, { Component } from 'react'
import '../scss/contact.scss'
import Head from 'next/head'
import Modal from '../components/modal/Modal'
import Layout from '../components/Layout'
import Socials from '../components/extra/socials/socials.component'
import ContactForm from '../components/contact-form/ContactForm.component'





class ctap extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    
    render() {
        return (
            <Layout>
                <Head>
                <meta charset="UTF-8" />
                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                
                <div className="container  ct">
                <div className="ctap-head">
                    <div className="overlay">
                        <div className='container'>
                        <h1>                            
                            Get In touch
                            </h1>
                            </div>
                        </div>
                        </div>
                <div className='ct1'>
                    <div className="pad">
                        <h1>Contact Us</h1>
                        
                        <p>Got questions about our services? 
                            Fill out the form to the right and a Commsworth 
                            representative will contact you. Alternatively, 
                            you can reach out to us accross our Omni-channel 
                            platforms below. </p>

                        <div className="contacts-flx">
                            <div className="contacts-ct">
                                <img src="/static/sales.svg" alt=""/>
                                <h1>Chat with Sales</h1>
                                <p>Availablee Monday-Friday
                                9AM to 5PM GMT+1</p>
                                <a href="">Chat now ></a>
                                </div>
                            <div className="contacts-ct">
                                <img src="/static/email.svg" alt="" />
                                <h1>Write Us</h1>
                                <p>Availablee Monday-Friday
                                9AM to 5PM GMT+1</p>
                                <a href="">care@commsworth.com</a>
                            </div>
                        </div>
                      
                        <div className="contacts-flx">
                            <div className="contacts-ct">
                                <img src="/static/tel.svg" alt=""/>
                                <h1>Ring Us</h1>
                                <p>Availablee Monday-Friday
                                9AM to 5PM GMT+1</p>
                                <a href="">+2349084810110</a>
                                </div>
                            <div className="contacts-ct">
                                <img src="/static/visit.svg" alt="" />
                                <h1>Pay us a Visit</h1>
                                <p>225, Ikorodu Crescent, Dolphin Estate, Ikoyi Lagos</p>
                            
                            </div>
                        </div>


                    </div>

                    <div className="pad2">
                            <h1>We'd love to hear from you</h1>                          

                               <ContactForm />
                    </div>
                    </div>
                    
                </div>
                <Socials/>
            
            </Layout>
        )
    }
}

export default ctap