import React, { Component } from 'react'
import Head from 'next/head'
import Socials from '../components/extraPageComponents/Socials'
import ContactForm from '../components/offerResourcesComponents/ContactForm'
import Prismic from 'prismic-javascript';
import { Client, PRISMIC_heading, PRISMIC_link, PRISMIC_link_text } from '../prismic-configuration';


class contact extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    
    render() {
		// console.log( this.props.contact)
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
                                <h1>{this.props.contact[0].primary.heading[0].text}</h1>
                            </div>
                        </div>
                    </div>
                </div>

<div  style={{paddingBottom: 200,background:"white"}}>
            <div className="wrapper">
                <div className='ct1'>
                    <div className="pad">
                        <h1>
							{this.props.contact[0].items[0].heading[0].text}
						</h1>
                        
                        <p>
							{this.props.contact[0].items[0].text[0].text} 
						</p>

                        <div className="contacts-flx">
                            <div className="contacts-ct">
                                <img src={this.props.contact[0].items[1].icon.url} alt=""/>
                                <h1>
								{this.props.contact[0].items[1].heading[0].text}					
								</h1>
                                <p>
								{this.props.contact[0].items[1].text[0].text} 
								</p>
                                <a href="">{this.props.contact[0].items[1].link_text}</a>
                                </div>
                            <div className="contacts-ct">
                                <img src={this.props.contact[0].items[2].icon.url} alt="" />
                                <h1>
								{this.props.contact[0].items[2].heading[0].text}								
								</h1>
                                <p>							
									{this.props.contact[0].items[2].text[0].text} 
								</p>
                                <a href="">{this.props.contact[0].items[2].link_text}</a>
                            </div>
                        </div>
                      
                        <div className="contacts-flx">
                            <div className="contacts-ct">
                                <img src={this.props.contact[0].items[3].icon.url} alt=""/>
                                <h1>{this.props.contact[0].items[3].heading[0].text}</h1>
                                <p>
									{this.props.contact[0].items[3].text[0].text} 
								</p>
                                <a href="">{this.props.contact[0].items[3].link_text}</a>
                                </div>
                            <div className="contacts-ct">
                                <img src={this.props.contact[0].items[4].icon.url} alt="" />
                                <h1>{this.props.contact[0].items[4].heading[0].text}</h1>
                                <p>{this.props.contact[0].items[4].text[0].text}</p>
                            
                            </div>
                        </div>


                    </div>

                    <div className="pad2">
                            <h1>We'd love to hear from you</h1>                          
                            <ContactForm options = {this.props.contact} />
                    </div>
                    </div>
                    
   
                </div>

                </div>
                {/* <Socials/> */}
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

export default contact

export async function getServerSideProps() {
	const contact = await Client().query(
	  Prismic.Predicates.at("document.type", "contact")
	)
  
	// console.log(contact.results[0].data.body);
  
	return {
	  props: {
		contact: contact.results[0].data.body
	  }
	}
  }
  
