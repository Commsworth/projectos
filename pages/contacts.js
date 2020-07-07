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
                
                <div className="ct">
                    <div className="contact-head">
                        <div className="overlay">
                            <div className='container'>
                                <h1>Get In touch</h1>
                            </div>
                        </div>
                    </div>
                </div>

<div  style={{paddingBottom: 200,background:"white !important"}}>
            <div className="container">
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

                </div>
                <Socials/>
           <style jsx>{`
               .contacts-flx{
    .contacts-ct{
        width: 45%;
    }
    img{
        height: 50px;
    }
display: flex;
justify-content: end;
padding-top: 25px;
h1{
    font-weight: bold;
    font-size: 24px !important;
}
a{
    border-bottom: 1px solid;
    color: #0E82F8;
}
}

  .container{
    width: 80%;
    margin: 0px auto;
    .ct1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 1000px !important;
    padding-top: 20px;
    margin: 0 auto;
}

  .pad{
    align-self: start;
    justify-content: end;
    width: 50%;
    color: white;
        // padding-top: 20px;
    // padding: 0px 0px 0px 116px;
    // margin-top: 7.5rem;

    h1{
        color: black;
        line-height: 1;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 34px;
    }
    
    p{
        color: black;
        line-height: 30px;
        padding-right: 34px;
        margin-top: 14px !important;       
    }

}
  }
  .ct{
    width: 100% !important;  
/* contact section */
.contact-head {
    margin: 0px;
    font-weight: 900;
    font-size: 48px;
    color: white;
    background: #242525;
    background-image: url(/static/ct-bkg.png) !important;
    height: 316px;
}
.overlay {
  h1{
    width: 1000px !important;
    font-size: 48px;
    margin: 0px auto;
  }
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
  background-color: rgba(0,0,0,0.8);
  z-index: 3;
  cursor: pointer;
}


  .pad2 {
    width: 50%;
    // padding-top: 20px;
    h1{
        color: black;
        line-height: 5px;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 34px;
    }
  }
  }

@media only screen and (max-width: 1000px) and (min-width: 700px)  {
.contacts-flx {
   flex-wrap: wrap;
}
}
 @media only screen and (max-width: 700px) { 
   .container{
    .ct1 {
      flex-direction: column;
    }
  }
 }
  @media only screen and (max-width: 400px) { 
  .contacts-flx {
   flex-direction: column;
}
  }

 @media only screen and (max-width: 1400px) { 
   .container{
     width: 80% !important;
    .ct1 {
      width: 100% !important;
    }
  }
  .ct{ 
    width: 100% !important;
  .overlay{
    h1 {
      width: 100% !important;
    }
  }
}
 }

  @media only screen and (max-width: 800px) { 

      .container{
    width: 80%;
    .ct1{
    width: 100% !important;
}

  .pad{
    width: 100%;

    h1{
      
    }
    
    p{
      
    }

}
  }
    
   .ct{
    width: 100% !important;  
/* contact section */
.contact-head {

}
.overlay {
  h1{
    width: 100% !important;
    font-size: 48px;
    margin: 0px auto;
  }



  .pad2 {
    width: 100%;
  }
  }
}
}
               `}</style>
            </Layout>
        )
    }
}

export default ctap