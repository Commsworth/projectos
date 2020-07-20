import Head from 'next/head'
import Card from '../components/extra/card/card.component'
//import { blueSemiCircle, devOps, map, businessAutomation, businessContinuity, product, managedServices, cyberSecurity, infrastructure, leftArrow, rightArrow, drawingArrow, bigBlueSemiCircle, listStyle } from '../static/assets/svgs';
import TitleDiv from '../components/extra/titleDiv/titleDiv';
import Layout from '../components/Layout'
import Div4 from '../components/div4/div4'
import TechnicalSupport from '../components/technicalSupport/TechnicalSupport'
import CarouselDiv from '../components/landing/carouselDiv/carouselDiv.component';
import ArrowLink from '../components/extra/arrow';
import React, { Component } from 'react'
import Div1 from '../components/landing/div1/div1.component';
import Socials from '../components/extra/socials/socials.component';
import Link from 'next/link';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: true,
    }
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Commsworth</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className='dark-bg'>
          <div className="heading">
            <h3 className="heading-text">Digital Solutions to <br /> accelerate your business.</h3>
            <img src="/pngs/blueline.png" />
            <Link href="/services">
              <button className="heading-button">Learn More</button>
            </Link>
          </div>
          <br />
          <br />
          <div className="map">
            <img src="/pngs/map.png" alt="" />
          </div>
          <br />
          <br />
          <TitleDiv text="Featured" subText="Our latest trends tailored for you" />
          <br />
          <br />
          <CarouselDiv leftArrow="/static/svg/left-arrow.svg" rightArrow="/static/svg/right-arrow.svg" blueSemiCircle= "/static/svg/semi-circle.svg"  />
          <TechnicalSupport />
          <br />
          <br />
          <br />
          <TitleDiv text="About Us" />
          <br />
          <br />
          <Div1 />
          <div className="work-with">
            <ArrowLink href="/services" text="Work with us" />
          </div>
          <br />
          <br />
          <br />
          <TitleDiv text="Our Services" />
          <div className="div2">
            <Card title={<img src="/pngs/devops.png" />} subTitle="DevOps & Analytics" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />
            <Card title={<img src="/pngs/businessAutomation.png" />} subTitle="Business Automation and Productivity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />
            <Card title={<img src="/pngs/businessContinuity.png" />} subTitle="Business Continuity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />
            <Card title={<img src="/pngs/managedServices.png" />} subTitle="Managed Services" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />
            <Card title={<img src="/pngs/product.png" />} subTitle="Product and Digital Strategy" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />
            {this.state.display ? <Card title={<img src="/pngs/cyberSecurity.png" />} subTitle="Cybersecurity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} /> :
              <Card title={<img src="/pngs/cyberSecurity.png" />} subTitle="Infrastructure" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />}
          </div>
          <div className='div2'>
            <svg className={this.state.display ? 'div2-svg' : ''} onClick={() => { this.setState({ display: true }) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
            </svg>

            <svg className={this.state.display ? ' ' : 'div2-svg'} onClick={() => { this.setState({ display: false }) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
            </svg>

          </div>
          <br />
          <br />
          <br />
          <div className="div3">
            <h3><TitleDiv text="The Academy" position="left" /></h3>
            <h3 style={{ fontWeight: "normal" }}>Learn from the best at</h3>
            <h3 style={{ fontWeight: "bold" }}>Commsworth Academy</h3>
            <div className="div3-grid">
              <Card title="Learn" subTitle="Web Design" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
              <Card title="Learn" subTitle="FrontEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
              <Card title="Learn" subTitle="BackEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
              <Card title="Learn" subTitle="Python" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
            </div>
          </div>
          <br />
          <Div4 />
          <div className="socials">
            <Socials icons="white" />
          </div>
        </main>

        <style jsx>{`
     .div2 svg{
       margin: 0px 5px 0px 5px;
       cursor: pointer;
           }
      .div2-svg{
        fill: #208FFF; 
        margin-left: 10px 10px;
      }
        .container {
          min-height: 100vh;
          // padding: 0 0.5rem;
          // max-width: 97vw;
          
        }
        .socials :global(.sc){
          background: #111517 !important;
        }
        .socials :global(.sc .socials .follow p),.socials :global(.sc .socials .share p){
          color: #F4F4F4 !important;
        }
        h1,h2,h3,h4.h5,h6{
          color: #f4f4f4 !important;
        }
        .map{
          display: flex;
          justify-content: center;
        }
        .map img{
          width: 80%;
        }
        .heading img{
          position:relative; 
          right:124px;
          bottom:52px;
          z-index:0;
          width:170px;
          }
        .heading{
          padding-top: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .heading-text{
          text-align: center;
          font-weight: bold;
          font-size: 36px;
          line-height: 114%;
          position:relative;
          z-index:10;
        }
        .heading-button{
          background: #0e82f8;
          text-transform: none !important;
          font-weight: bold;
          font-family: "Nunito";
          font-size: 14px;
          line-height: 126.5%;
          width: 175px;
          border-radius: 5px;
          font-family: "Nunito", "sans-serif" !important;
          font-weight: bold;
          padding: 13.98px 35.1px;
          text-align: center;
          color: #ffffff;
          border: none;
          cursor: pointer;
        }
        .heading-button:hover{
          background-color: #5cadff;
        }        
        .work-with{
          color: #208FFF !important;
          display: flex;
          justify-content: center;
          font-weight: bold;
          font-size: 30px;
          line-height: 109%;
          text-align: center !important;
          //color: white;
          font-family: 'Nunito', sans-serif;
          cursor: pointer;

        }
        //MOBILE
        //AND
        //TABLET
        //VIEWS
        @media only screen and (max-width: 990px) {
          .div1 .div1-small{
            grid-template-columns: 1fr;
          }
          #left-button{
            display: none;
          }
          #right-button{
            display: none;
          }
          .div1{
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
        .div2 :global(.card .link){
          font-size: 18px;
          line-height: 109%;
          //margin-left: 30%;
        }
        }
        @media only screen and (max-width: 570px) {
          .map{
            overflow: hidden;
          }
          .map img{
            width: 1000px;
            height: 300px;
          }
          .heading{
            width:281px;
            margin: auto;
            font-size: 36px;
          }
          .heading img{
          display:none;
          }
          .div1{
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          //display:none;
        }
        .div2{
          width: 90vw !important;
          margin: 0vh 5vw !important;
        }
          .div2 :global(.card .title){
            height: 90px;
          }
          .div2 :global(.card .sub-title){
          padding: 0px !important;
          height: 58px !important;
          }
          .div2 :global(.card p){
          width: 100% !important;
          height: 125px !important;
          }
          .div2 :global(.card){
            min-width: 300px;
            width: 100vw !important;
            padding: 0px 15px !important;
          }
        .div3{
        //max-width: 320px;
        padding: 0vw !important;
        padding-top: 50px !important;
        //margin: auto;
        }
        .div3 h3{
          //font-size: 18px;
          //line-height: 119%;
          font-size: 26px !important;
          line-height: 139% !important;
          width: 90vw !important;
          margin: 0vh 5vw !important;
        }
            .div3 :global(.card){
              margin: 19px 0px !important;
            }
      }
        .div2{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 80vw;
          margin: 2vh 10vw;
        }
        .div2 :global(.card){
          margin: 12.5px;
          width: 360px;
          height: 381px;
          background: #111517;
          border: 1px solid #208FFF;
          box-sizing: border-box;
          border-radius: 4px;
          color: white;
          padding: 35px;
          // height: 381px;
        }
        .div2 :global(.card .title img){
          height: 60px;
        }
        .div2 :global(.card h3){
          font-size: 24px;
          line-height: 119%;
          //width: 243px;
        }
        .div2 :global(.card:nth-of-type(2) .sub-title){
          //height: 64px;
          padding-top: 0px;
        }
        .div2 :global(.card:nth-of-type(5) .sub-title){
          //height: 64px;
          padding-top: 0px;
        }
        .div2 :global(.card .sub-title){
          //width: 243px;
          //height: 32px;
          padding-top: 32px;

        }
        .div2 :global(.card .link){
          font-size: 18px;
          line-height: 109%;
          align-self: flex-end;
          height: 16px;
        }
        .div2 :global(.card .content2){
          display:none;
        }
        .div2 :global(.card p){
          font-size: 15px;
          line-height: 185%;
          //width: 281px;
          height: 77px;
          color: #f4f4f4 !important;
        }
        .div2 :global(.card:hover){
          background: #1C2124;
          box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.5);
          border: none;
        }
        .div3{
          background: linear-gradient(29.74deg, #111517 0.11%, rgba(17, 21, 23, 0.89) 20.95%, rgba(17, 21, 23, 0.78) 43.14%, rgba(17, 21, 23, 0) 78.53%), url('/pngs/div3Image.png');
          background-size: cover;
          background-position: center;
          padding: 70px;
        }
        .div3 h3{
          font-size: 34px;
          line-height: 126.5%;
          margin: 0;
          font-family: 'Nunito', sans-serif;
          width: 80vw;
          margin: 17px auto;
        }
        .div3-grid{
          width: 80vw;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 58px auto;
        }
        .div3-grid :global(.card){
          width: 255px;
          height: 238px;
          margin: 1% 1%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-radius: 5px;
          padding: 0px 0px;
        }
        .div3-grid :global(.card h3){
          padding: 0px 20px;
          font-size: 24px;
          line-height: 126.5%;
          //width: 152px;
        }
        .div3-grid :global(.card .link){
          padding: 0px 20px;
          font-size: 16px;
          line-height: 109%;
          align-self: flex-end;
        }
        .div3-grid :global(.card .sub-title){
          font-weight: bold !important;
          padding: 0px 20px;
        }
        .div3-grid :global(.card .title){
          font-weight: normal !important;
          padding: 0px 20px;
        }
        .div3-grid :global(.card .content2){
        }
        .div3-grid :global(.card p){
          padding: 0px 20px;
          font-size: 12px;
          line-height: 145%;
          letter-spacing: 0.01em;
          //width: 216px;
                  }
        .div3-grid :global(.card:hover){
          background: #208FFF !important;
        }
        .div3-grid :global(.card:hover .link){
          color: #ffffff !important;
        }
        .div3-grid :global(.card:hover .link svg){
          fill: #ffffff !important;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
      </Layout>
      // </Layout>
    )
  }
}
