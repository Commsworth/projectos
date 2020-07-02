import React, { Component } from 'react'
import '../scss/ctap.scss'
import Layout from '../components/Layout'
import Modal from '../components/modal/Modal'
import Socials from '../components/extra/socials/socials.component'
import Head from 'next/head'
import CtapForm from '../components/ctap-form/CtapForm.component'



class ctap extends Component {
    constructor(props) {
        super(props)
this.state={

}
    }

    


    render() {
        return (
            <Layout>
                 <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                
             <main className="dark-bg">
                <br />
                <br />
                <br />
                <br />
               <div className="ctap-flex">
                    <div className="contact">
                    <h1 className="ctap-head">Cyber Threat Assessment Program</h1>
                        <div className="pad">
                    <h1>Assess threat to your business</h1>
                        <div className="pad-flx"> <svg width="32" height="4" viewBox="0 0 32 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2H30" stroke="#076fd9" strokeWidth="4" strokeLinecap="round" />
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

                    <div className="pad2">
                            <h1>Request a session</h1>                         

                                <CtapForm />                      

                        </div>
                                           
                    </div>
        
                        <Socials />
                  </div>
                  </main>
            </Layout>
        )
    }
}

export default ctap