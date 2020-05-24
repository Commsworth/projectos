import Head from 'next/head'
import Card from '../components/extra/card/card.component'
import { blueSemiCircle, devOps, map, businessAutomation, businessContinuity, product, managedServices, cyberSecurity, infrastructure, leftArrow, rightArrow, drawingArrow, bigBlueSemiCircle, listStyle } from '../static/assets/svgs';
import TitleDiv from '../components/extra/titleDiv/titleDiv';
import Layout from '../components/Layout'
import Div4 from '../components/div4/div4'
import TechnicalSupport from '../components/technicalSupport/TechnicalSupport'
import CarouselDiv from '../components/landing/carouselDiv/carouselDiv.component';
import ArrowLink from '../components/extra/arrow';
import React, { Component } from 'react'

export default class Home extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       display: true,
    }
  }
  
  render(){
  return (
    <Layout className="container">
      <Head>
        <title>Commsworth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="heading">
          <h3 className="heading-text">Digital Solutions to <br /> accelerate your business.</h3>
          <img src="/commsworth/pngs/blueline.png"/>
          <button className="heading-button">Learn More</button>
        </div>
        <br />
        <br />
        <div className="map">
          <img src="/commsworth/image/map.png" alt=""/>
        </div>
        <br />
        <br />
        <TitleDiv text="Featured" subText="Our latest trends tailored for you" />
        <br />
        <br />
        <CarouselDiv leftArrow={leftArrow} rightArrow={rightArrow} blueSemiCircle={blueSemiCircle} drawingArrow={drawingArrow} />
        <TechnicalSupport />
        <br />
        <br />
        <TitleDiv text="About Us" />
        <br />
        <br />
        <div className="div1">
          <div className="div1-large">
            <Card title="Who we are" background="/commsworth/pngs/Tunnel.png" subTitle={bigBlueSemiCircle} content="Commsworth is a premium ICT consultancy partner with dedicated specialty in delivering end to end tech-driven business initiatives and solutions to her teeming clients." content2="The Commsworth arsenal comprises of a school of top-tier ICT experts with seasoned competencies across various technologies, including Infrastructure, Cybersecurity, DevOps and Analytics, Business Automation and Productivity, Business Continuity, Product and Digital Strategy, and Managed Services." />
          </div>
          <div className="div1-medium">
            <div>
              <Card title="Core Values" subTitle={blueSemiCircle} content="Our Core Values define our personality and guides our relationship with staff, clients and partners. These include;​"
                content2={
                  <div style={{ display: "flex" }}>
                    <ul>
                      <li style={{listStyleImage:"url('/commsworth/pngs/liststyle.png')"}}>Customer Driven</li>
                      <li style={{listStyleImage:"url('/commsworth/pngs/liststyle.png')"}}>Value Centric</li>
                      <li style={{listStyleImage:"url('/commsworth/pngs/liststyle.png')"}}>Detail Oriented</li>
                      <li style={{listStyleImage:"url('/commsworth/pngs/liststyle.png')"}}>Quality of Service</li>
                    </ul>
                    <ul>
                      <li style={{listStyleImage:"url('/commsworth/pngs/liststyle.png')"}}>Teamwork and Collaboration</li>
                      <li style={{listStyleImage:"url('/commsworth/pngs/liststyle.png')"}}>Driving mental productivity</li>
                      <li style={{listStyleImage:"url('/commsworth/pngs/liststyle.png')"}}>Innovation Driven</li>
                      <li style={{listStyleImage:"url('/commsworth/pngs/liststyle.png')"}}>Integrity</li>
                    </ul>
                  </div>
                }
              />
            </div>
            <div className="div1-small">
              <Card title="Our Mission" backcolour="#205674" subTitle={blueSemiCircle} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets​" />
              <Card title="Our Vision" background="/commsworth/pngs/vr.png" subTitle={blueSemiCircle} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" />
            </div>
          </div>
        </div>
        <br />
        <div className="work-with">
          <ArrowLink text="Work with us" />
        </div>
        <br />
        <br />
        <TitleDiv text="Our Services" />
        <br />
        <br />
        <div className="div2">
          <Card title={devOps} subTitle="DevOps & Analytics" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." link={<ArrowLink text="Contact Us" />} />
          <Card title={businessAutomation} subTitle="Business Automation and Productivity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." link={<ArrowLink text="Contact Us" />} />
          <Card title={businessContinuity} subTitle="Business Continuity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." link={<ArrowLink text="Contact Us" />} />
          <Card title={product} subTitle="Product and Digital Strategy" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." link={<ArrowLink text="Contact Us" />} />
          <Card title={managedServices} subTitle="Managed Services" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." link={<ArrowLink text="Contact Us" />} />
          {this.state.display ? <Card title={cyberSecurity} subTitle="Cybersecurity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." link={<ArrowLink text="Contact Us" />} />:
          <Card title={infrastructure} subTitle="Infrastructure" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." link={<ArrowLink text="Contact Us" />} />}
        </div>
        <div className='div2'>
          <svg className={this.state.display ? 'div2-svg' : ''} onClick={()=>{this.setState({display:true})}} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
          </svg>
 
          <svg className={this.state.display ? ' ' : 'div2-svg'} onClick={() => { this.setState({ display: false }) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
          </svg>

        </div>
        <br />
        <br />
        <div className="div3">
          <TitleDiv text="The Academy" position="left" />
          <h3 style={{ fontWeight: "normal" }}>Learn from the best at</h3>
          <h3 style={{ fontWeight: "bold" }}>Commsworth Academy</h3>
          <div className="div3-grid">
            <Card title="Learn" subTitle="Web Design" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
            <Card title="Learn" subTitle="FrontEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
            <Card title="Learn" subTitle="BackEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
            <Card title="Learn" subTitle="Python" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." link={<ArrowLink text="Enroll" />} />
          </div>
        </div>
        <Div4 />
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
          background: #111517 !important;
        }
        h1,h2,h3,h4.h5,h6{
          color: white;
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
          right:157px;
          bottom:67px;
          z-index:0
          }
        .heading{
          padding-top: 201px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .heading-text{
          text-align: center;
          font-weight: bold;
          font-size: 46px;
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
          padding: 15.53px 39px;
          text-align: center;
          color: #ffffff;
          border: none;
          cursor: pointer;
        }
        .heading-button:hover{
          background-color: #5cadff;
        }        
        .div1{
          // display: flex;
          // flex-wrap:wrap;
          width: 80vw;
          margin: 0vh 10vw;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
          gap: 9px;
          min-height: 600px;
        }
        .div1 :global(.card){
          padding: 20px;
        }
        .div1 .div1-large :global(.card h3){
          font-size: 40px;
          line-height: 119%;
        }
        .div1 .div1-large :global(.card p){
          font-size: 18px;
          line-height: 200%;
          letter-spacing: 0.01em;
          }
        .div1 .div1-small :global(.card h3),.div1 .div1-medium :global(.card h3){
          font-size: 30px;
          line-height: 119%;
          }
        .div1 .div1-small :global(.card p),.div1 .div1-medium :global(.card p){
          font-size: 16px;
          line-height: 208%;
          letter-spacing: 0.01em;
        }
        .div1 .div1-medium{
          gap: 9px;
          display: grid;          
        }
        .div1 .div1-medium :global(.card p){
          margin: 0;
          }
        .div1 .div1-small{
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
          width: 100%;
        }
        .work-with{
          color: #208FFF !important;
          display: flex;
          justify-content: center;
          font-weight: bold;
          font-size: 30px;
          line-height: 109%;
          text-align: center !important;
          color: white;
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
        .carousel-grid{
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        }
        }
        @media only screen and (max-width: 570px) {
          .div1{
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
        .carousel-grid{
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
      }
        .div2{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          width: 80vw;
          margin: 0vh 10vw;
        }
        .div2 :global(.card){
          width: 30%;
          margin: 1.65%;
          min-width: 368px;
          height: 381px;
          background: #111517;
          border: 1px solid #208FFF;
          box-sizing: border-box;
          border-radius: 4px;
          color: white;
          padding: 44px;
          // height: 381px;
        }
        .div2 :global(.card h3){
          font-size: 24px;
          line-height: 119%;
        }
        .div2 :global(.card .link){
          font-size: 18px;
          line-height: 109%;
          margin-left: 50%;
        }
        .div2 :global(.card p){
          font-size: 15px;
          line-height: 185%;
        }
        .div2 :global(.card:hover){
          background: #1C2124;
          box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.5);
          border: none;
        }
        .div3{
          background: linear-gradient(29.74deg, #111517 0.11%, rgba(17, 21, 23, 0.89) 20.95%, rgba(17, 21, 23, 0.78) 23.14%, rgba(17, 21, 23, 0) 78.53%), url('/commsworth/pngs/div3Image.png');
          background-size: cover;
          background-position: center;
          width: 100vw;
          padding: 5vh 10vw;
        }
        .div3 h3{
          font-size: 54px;
          line-height: 126.5%;
          margin: 0;
          font-family: 'Nunito', sans-serif;
        }
        .div3-grid{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 58px 0px;
        }
        .div3-grid :global(.card){
          min-height: 250px;
          width: 20%;
          margin: 1%;
          min-width: 260px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-radius: 5px;
          padding: 20px;
        }
        .div3-grid :global(.card h3){
          font-size: 24px;
          line-height: 126.5%;
        }
        .div3-grid :global(.card .link){
          font-size: 16px;
          line-height: 109%;
          margin-left: 50%;
        }
        .div3-grid :global(.card .sub-title){
          font-weight: bold !important;
        }
        .div3-grid :global(.card .title){
          font-weight: normal !important;
        }
        .div3-grid :global(.card p){
          font-size: 12px;
          line-height: 145%;
          letter-spacing: 0.01em;        }
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

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
    // </Layout>
  )
      }
}
