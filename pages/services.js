import Card from '../components/extra/card/card.component';
// import DevOps from 'assets/svgs/devops.svg'
// import Support from 'assets/svgs/support.svg'
// import Business from 'assets/svgs/business.svg'
// import Product from 'assets/svgs/product.svg'
// import Strategy from 'assets/svgs/strategy.svg'
import Link from 'next/link';
import { Why } from '../components/services/why';
// import AboutHero from '../../asset/img/aboutHero.png'


import React, { Component } from 'react';
import Arrowlink from '../components/extra/arrow';
import Socials from '../components/extra/socials/socials.component';

export default class Services extends Component {
    constructor(props) {            
        super(props)

        this.state = {
            display: true,
        }
    }

    render() {
        return (
            <div className="container">
                <main>
                    <div className="heading">
                        <h3 className="heading-text">Digital Solutions to <br /> accelerate your business.</h3>
                        <img src="/pngs/blueline.png" />
                        {/* <button className="heading-button">Learn More</button> */}
                    </div>
                    <br />
                    <br />
                    <h3 className="offer">Services on Offer</h3>
                    <br />
                    <br />
                    <div className="about-cards ">
                        <Card
                            title={<img src="assets/svgs/devops.svg" alt="devops" />}
                            subTitle="DevOps & Analytics"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Arrowlink href="/devops" text="Explore" />}
                        />
                        <Card
                            title={<img src="assets/svgs/support.svg" alt="devops" />}
                            subTitle="Support"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Arrowlink href="/devops" text="Explore" />}
                        />
                        <Card
                            title={<img src="assets/svgs/business.svg" alt="devops" />}
                            subTitle="Business Continuity"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Arrowlink href="/devops" text="Explore" />}
                        />
                        <Card
                            title={<img src="assets/svgs/product.svg" alt="devops" />}
                            subTitle="Product & Digital Strategy"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Arrowlink href="/devops" text="Explore" />}
                        />
                        <Card
                            title={<img src="assets/svgs/businessautomation.svg" alt="devops" />}
                            subTitle="Business Automation and Productivity"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Arrowlink href="/devops" text="Explore" />}
                        />
                        {this.state.display ? <Card
                            title={<img src="assets/svgs/cybersecurity.svg" alt="devops" />}
                            subTitle="Cybersecurity"
                            content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                            link={<Arrowlink href="/devops" text="Explore" />}
                        /> : <Card
                                title={<img src="assets/svgs/infrastructure.svg" alt="devops" />}
                                subTitle="Infrastructure"
                                content="Our Core Values define our personality and guides our relationship with staff, clients and partners. "
                                link={<Arrowlink href="/devops" text="Explore" />}
                            />
                        }
          </div>
                    <div className='serv'>
                        <svg className={this.state.display ? 'services-svg' : ''} onClick={() => { this.setState({ display: true }) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                        </svg>

                        <svg className={this.state.display ? ' ' : 'services-svg'} onClick={() => { this.setState({ display: false }) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                        </svg>


                    </div>
                    <Why />
                    <Socials/>
                </main>
                <style jsx>
                    {`
                    .container {
                        min-height: 100vh;
                        // padding: 0 0.5rem;
                        // max-width: 97vw;
                        background: #111517;
                        color: #f4f4f4 !important;
                      }
                      .offer{
                        font-size: 40px;
                        line-height: 126.5%;
                        text-align: center;
                        color: #f4f4f4 !important;
                      }
                      .map{
                        display: flex;
                        justify-content: center;
                      }
                      .heading{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding-top: 150px;
                        padding-bottom: 200px;
                        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),url('pngs/servicesbackground.png');
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                      }
                      .heading-text{
                        text-align: center;
                        font-weight: bold;
                        font-size: 36px;
                        line-height: 114%;
                        text-align: center;
                        position:relative;
                        z-index:10;
                        color: #f4f4f4 !important;
                        color: #f4f4f4 !important;
                      }
                      .heading img{
                        position:relative; 
                        right:124px;
                        bottom:52px;
                        z-index:0;
                        width:170px;
                      }
                      .about-hero{
                        display: flex;
                        justify-content: center;
                      }
                      .about-hero img{
                        width: 80%;
                      }
                      .about-cards{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        width: 80vw;
                        margin: 0vh 10vw;
                      }
                      .about-cards :global(.card){
                          text-align: center;
                          align-items: center;
                          margin: 1.65%;
                          width: 355px;
                          height: 347px;
                          background: #1C2124 !important;
                          // border: 1px solid #208FFF;
                          box-sizing: border-box;
                          color: white;
                          padding: 30px;
                          
                        }
                        }
                        .about-cards :global(.card .title){
                            position: relative;
                            bottom: 80px;
                            height: 100px;
                            
                        }
                        .about-cards :global(.card .sub-title){
                            width: 243px;
                            height: 62px;
                            left: 1008px;
                            top: 1141px;
    
                            font-family: Nunito;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 24px;
                            line-height: 130%;
                            /* identical to box height, or 29px */
    
    
                            /* White */
    
                            color: #FFFFFF;
    
                        }
                        .about-cards :global(.card .content){
                            width: 281.07px;
                            height: 98.13px;
                            font-family: Muli;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 15px;
                            line-height: 190%;
                            /* or 28px */
    
                            text-align: center;
    
                            color: #FFFFFF;
                        }
                        .about-cards :global(.card .content2){
                            display:none;
                        }
                        .about-cards :global(.card .link){
                            align-self: flex-end;
                            height: 20px;
                            font-weight: bold;
                            font-size: 18px;
                            line-height: 109%;
                        }
                        .serv{
                            display:flex;
                            justify-content: center;
                            padding: 60px 0px;
                        }
                        .serv svg{
       margin: 0px 5px 0px 5px;
       cursor: pointer;
           }
      .services-svg{
        fill: #208FFF; 
        margin-left: 10px 10px;
      }
                    `}
                </style>
            </div>
        );
    }
}