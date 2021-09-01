import React, { Component } from 'react'
import Socials from '../components/extraPageComponents/Socials'
import Head from 'next/head'
import CtapForm from '../components/offerResourcesComponents/CtapForm'
import Prismic from 'prismic-javascript';
import { Client, PRISMIC_heading, PRISMIC_link, PRISMIC_link_text } from '../prismic-configuration';




class ctap extends Component {
    constructor(props) {
        super(props)
this.state={

}
    }
    


    render() {
        console.log(this.props.CtapFormOptions)
        return (
            <React.Fragment>
                 <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                
                 
                <div className="ct">
                    <div className="ctap-head">
                        <div className="overlay">
                            <div className='wrapper'>
                                <h1>{this.props.ctap.primary.heading[0].text}</h1>
                            </div>
                        </div>
                    </div>
                </div>
               
               <div  style={{paddingBottom: 200,background:"white !important"}}>
            <div className="wrapper">
                <div className='ct1'>
                        <div className="pad">
                    <h1>{this.props.ctap.items[0].heading[0].text}</h1>
                        <div className="pad-flx"> <svg width="32" height="4" viewBox="0 0 32 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2H30" stroke="#076fd9" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                        <p>{this.props.ctap.items[0].link_text}</p></div>
                        <p>
                            {this.props.ctap.items[0].text[0].text}
                        </p> 
                        <p>
                            {this.props.ctap.items[0].text[1].text}
                        </p>




                        </div>

                    <div className="pad2">                     
                    <h1>Request a Session</h1>
                                <CtapForm options={this.props.CtapFormOptions} />                      
                        </div>
                        </div>
                        </div>
                                           
                    </div>
        
                        <Socials />
                 
                 <style jsx>{`           
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
        .ct .ctap-head {
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
      
        @media only screen and (max-width: 700px) {
            .wrapper .ct1 {
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
      `}
      </style>
        </React.Fragment>
        )
    }
}

export default ctap

export async function getServerSideProps() {
	const ctap = await Client().query(
	  Prismic.Predicates.at("document.type", "contact")
	)
  
	// console.log(contact.results[0].data.body);
  
	return {
	  props: {
		ctap: ctap.results[2].data.body[0],
        CtapFormOptions: ctap.results[2].data.body
	  }
	}
  }
  