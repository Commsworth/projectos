import React, { Component } from 'react'
import Head from 'next/head'
import Socials from '../components/extraPageComponents/Socials'
import ContactForm from '../components/offerResourcesComponents/ContactForm'





class ctap extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    
    render() {
        return (
            <React.Fragment>
                <Head>
                <meta charset="UTF-8" />
                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                
                <div className="ct">
                    <div className="contact-head">
                        <div className="overlay">
                            <div className='wrapper'>
                                <h1>Get In touch</h1>
                            </div>
                        </div>
                    </div>
                </div>

<div  style={{paddingBottom: 200,background:"white"}}>
            <div className="wrapper">
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
                                <a href="">Chat now {">"}</a>
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

                </div>
                <Socials/>
           <style jsx>{`
              .contacts-flx {
	 display: flex;
	 justify-content: end;
	 padding-top: 25px;
}
 .contacts-flx .contacts-ct {
	 width: 45%;
}
 .contacts-flx img {
	 height: 50px;
}
 .contacts-flx h1 {
	 font-weight: bold;
	 font-size: 24px !important;
}
 .contacts-flx a {
	 border-bottom: 1px solid;
	 color: #0e82f8;
}
 .wrapper {
	 width: 80%;
	 margin: 0px auto;
}
 .wrapper .ct1 {
	 display: flex;
	 flex-direction: row;
	 justify-content: center;
	 width: 1000px !important;
	 padding-top: 20px;
	 margin: 0 auto;
}
 .wrapper .pad {
	 align-self: start;
	 justify-content: end;
	 width: 50%;
	 color: white;
}
 .wrapper .pad h1 {
	 color: black;
	 line-height: 1;
	 font-family: Nunito;
	 font-style: normal;
	 font-weight: bold;
	 font-size: 34px;
}
 .wrapper .pad p {
	 color: black;
	 line-height: 30px;
	 padding-right: 34px;
	 margin-top: 14px !important;
}
 .ct {
	 width: 100% !important;
	/* contact section */
}
 .ct .contact-head {
	 margin: 0px;
	 font-weight: 900;
	 font-size: 48px;
	 color: white;
	 background: #242525;
	 background-image: url(/static/ct-bkg.png) !important;
	 height: 316px;
}
 .ct .overlay {
	 position: relative;
	 width: 100%;
	 display: flex;
	 justify-content: start;
	 align-items: center;
	 height: 100%;
	 top: 0;
	 left: 0;
	 right: 0;
	 bottom: 0;
	 background-color: rgba(0, 0, 0, 0.8);
	 z-index: 3;
	 cursor: pointer;
}
 .ct .overlay h1 {
	 width: 1000px !important;
	 font-size: 48px;
	 margin: 0px auto;
}
 .ct .pad2 {
	 width: 50%;
}
 .ct .pad2 h1 {
	 color: black;
	 line-height: 5px;
	 font-family: Nunito;
	 font-style: normal;
	 font-weight: bold;
	 font-size: 34px;
}
 @media only screen and (max-width: 1000px) and (min-width: 700px) {
	 .contacts-flx {
		 flex-wrap: wrap;
	}
}
 @media only screen and (max-width: 700px) {
	 .wrapper .ct1 {
		 flex-direction: column;
	}
}
 @media only screen and (max-width: 400px) {
	 .contacts-flx {
		 flex-direction: column;
	}
}
 @media only screen and (max-width: 1400px) {
	 .wrapper {
		 width: 80% !important;
	}
	 .wrapper .ct1 {
		 width: 100% !important;
	}
	 .ct {
		 width: 100% !important;
	}
	 .ct .overlay h1 {
		 width: 100% !important;
	}
}
 @media only screen and (max-width: 800px) {
	 .wrapper {
		 width: 80%;
	}
	 .wrapper .ct1 {
		 width: 100% !important;
	}
	 .wrapper .pad {
		 width: 100%;
	}
	 .ct {
		 width: 100% !important;
		/* contact section */
	}
	 .ct .overlay h1 {
		 width: 100% !important;
		 font-size: 48px;
		 margin: 0px auto;
	}
	 .ct .overlay .pad2 {
		 width: 100%;
	}
}
               `}</style>
</React.Fragment>
        )
    }
}

export default ctap