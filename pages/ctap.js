import React, { Component } from 'react'
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
                
             <main className="dark-bg wrapper">
                <br />
                <br />
                <br />
                <br />
                 
                <div className="ct">
                    <div className="ctap-head">
                        <div className="overlay">
                            <div className='container' style={{ background: "black" }}>
                                <h1 className="header">Cyber Threat Assessment Program</h1>
                            </div>
                        </div>
                    </div>
                </div>
               
               <div  style={{paddingBottom: 200,background:"white !important"}}>
            <div className="container" style={{background: "white"}}>
                <div className='ct1'>
                        <div className="pad">
                    <h1>Assess threat to your business</h1>
                        <div className="pad-flx"> <svg width="32" height="4" viewBox="0 0 32 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2H30" stroke="#076fd9" strokeWidth="4" strokeLinecap="round" />
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

                    <div className="pad2">                     

                                <CtapForm />                      
                        </div>
                        </div>
                        </div>
                                           
                    </div>
        
                        <Socials />
                 </main>
                 
                 <style jsx>{`
            .pad-flx{
      display: flex;
    align-items: center;
}
  
  
  .container{
    width: 80%;
    margin: 0px auto;
    .ct1{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 1000px !important;
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
.ctap-head {
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
      `}
      </style>
            </Layout>
        )
    }
}

export default ctap