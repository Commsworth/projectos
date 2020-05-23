import Head from 'next/head'
import Card from '../components/extra/card/card.component'
<<<<<<< HEAD
import { blueSemiCircle, devOps, map, businessAutomation, businessContinuity, product, managedServices, cyberSecurity, infrastructure, leftArrow, rightArrow } from '../static/assets/svgs';
import TitleDiv from '../components/extra/titleDiv/titleDiv';
import Layout from '../components/Layout'
// import featuredImage from '../assets/png/featuredImage.png'

export default function Home() {
=======
import { blueSemiCircle, devOps, map, businessAutomation, businessContinuity, product, managedServices, cyberSecurity, infrastructure, leftArrow, rightArrow, drawingArrow, bigBlueSemiCircle, listStyle } from '../static/assets/svgs';
import TitleDiv from '../components/extra/titleDiv/titleDiv';
import Layout from '../components/Layout'
import Div4 from '../components/div4/div4'
import TechnicalSupport from '../components/technicalSupport/TechnicalSupport'
import CarouselDiv from '../components/landing/carouselDiv/carouselDiv.component';
import ArrowLink from '../components/extra/arrow';
import React, { Component } from 'react'

// import featuredImage from '../assets/png/featuredImage.png'

export default class Home extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       display: true,
    }
  }
  
  render(){
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
  return (
    <Layout className="container">
      <Head>
        <title>Commsworth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
<<<<<<< HEAD
        <br />
        <br />
        <br />
        <div className="heading">
          <h3 className="heading-text">Digital Solutions to <br/> accelerate your business. </h3>
=======
        <div className="heading">
          <h3 className="heading-text">Digital Solutions to <br /> accelerate your business.</h3>
          <img src="/static/assets/png/blueline.png"/>
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
          <button className="heading-button">Learn More</button>
        </div>
        <br />
        <br />
        <div className="map">
<<<<<<< HEAD
        {map}
        </div>
        <br />
        <br />
        <TitleDiv text="Featured" subText="Our latest trends tailored for you"/>
        <br />
        <br />
        <div className="carousel-div">
          <button id="left-button">{leftArrow}</button>
          <div className="carousel-grid">
            <Card title="" content={<img />} background="/static/assets/png/featuredImage.png" />
            <Card title="NextGen App Performance Monitoring (APM) delivered through Dynatrace" subTitle={blueSemiCircle} content="Commsworth Partners with Dynatrace to provide an AI-Powered, All-in-one platform to monitor, optimize and scale your applications autonomously with Zero-touch configuration across all stacks on any cloud." />
          </div>
          <button id="right-button">{rightArrow}</button>
        </div>
=======
          <img src="/static/assets/png/map.png" alt=""/>
        </div>
        <br />
        <br />
        <TitleDiv text="Featured" subText="Our latest trends tailored for you" />
        <br />
        <br />
        <CarouselDiv leftArrow={leftArrow} rightArrow={rightArrow} blueSemiCircle={blueSemiCircle} drawingArrow={drawingArrow} />
        <TechnicalSupport />
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
        <br />
        <br />
        <TitleDiv text="About Us" />
        <br />
        <br />
        <div className="div1">
          <div className="div1-large">
<<<<<<< HEAD
            <Card title="Who we are" subTitle={blueSemiCircle} content="Commsworth is a premium ICT consultancy partner with dedicated specialty in delivering end to end tech-driven business initiatives and solutions to her teeming clients." content2="The Commsworth arsenal comprises of a school of top-tier ICT experts with seasoned competencies across various technologies, including Infrastructure, Cybersecurity, DevOps and Analytics, Business Automation and Productivity, Business Continuity, Product and Digital Strategy, and Managed Services."/>
          </div>
          <div className="div1-medium">
            <div>
              <Card title="Core Values"  subTitle={blueSemiCircle} content="Our Core Values define our personality and guides our relationship with staff, clients and partners. These include;​
" />
            </div>
            <div className="div1-small">
              <Card title="Our Mission" subTitle={blueSemiCircle} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets​" />
              <Card title="Our Vision" subTitle={blueSemiCircle} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" />
=======
            <Card title="Who we are" background="/static/assets/png/Tunnel.png" subTitle={bigBlueSemiCircle} content="Commsworth is a premium ICT consultancy partner with dedicated specialty in delivering end to end tech-driven business initiatives and solutions to her teeming clients." content2="The Commsworth arsenal comprises of a school of top-tier ICT experts with seasoned competencies across various technologies, including Infrastructure, Cybersecurity, DevOps and Analytics, Business Automation and Productivity, Business Continuity, Product and Digital Strategy, and Managed Services." />
          </div>
          <div className="div1-medium">
            <div>
              <Card title="Core Values" subTitle={blueSemiCircle} content="Our Core Values define our personality and guides our relationship with staff, clients and partners. These include;​"
                content2={
                  <div style={{ display: "flex" }}>
                    <ul>
                      <li style={{listStyleImage:"url('/static/assets/png/liststyle.png')"}}>Customer Driven</li>
                      <li style={{listStyleImage:"url('/static/assets/png/liststyle.png')"}}>Value Centric</li>
                      <li style={{listStyleImage:"url('/static/assets/png/liststyle.png')"}}>Detail Oriented</li>
                      <li style={{listStyleImage:"url('/static/assets/png/liststyle.png')"}}>Quality of Service</li>
                    </ul>
                    <ul>
                      <li style={{listStyleImage:"url('/static/assets/png/liststyle.png')"}}>Teamwork and Collaboration</li>
                      <li style={{listStyleImage:"url('/static/assets/png/liststyle.png')"}}>Driving mental productivity</li>
                      <li style={{listStyleImage:"url('/static/assets/png/liststyle.png')"}}>Innovation Driven</li>
                      <li style={{listStyleImage:"url('/static/assets/png/liststyle.png')"}}>Integrity</li>
                    </ul>
                  </div>
                }
              />
            </div>
            <div className="div1-small">
              <Card title="Our Mission" backcolour="#205674" subTitle={blueSemiCircle} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets​" />
              <Card title="Our Vision" background="/static/assets/png/vr.png" subTitle={blueSemiCircle} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" />
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
            </div>
          </div>
        </div>
        <br />
<<<<<<< HEAD
=======
        <div className="work-with">
          <ArrowLink text="Work with us" />
        </div>
        <br />
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
        <br />
        <TitleDiv text="Our Services" />
        <br />
        <br />
        <div className="div2">
<<<<<<< HEAD
          <Card title={devOps} subTitle="DevOps & Analytics" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={businessAutomation} subTitle="Business Automation and Productivity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={businessContinuity} subTitle="Business Continuity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={product} subTitle="Product and Digital Strategy" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={managedServices} subTitle="Managed Services" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={cyberSecurity} subTitle="Cybersecurity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={infrastructure} subTitle="Infrastructure" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
=======
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

>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
        </div>
        <br />
        <br />
        <div className="div3">
<<<<<<< HEAD
          <TitleDiv text="The Academy" position="left"/>
          <h3>Learn from the best at</h3>
          <h3>Commsworth Academy</h3>
        <div className="div3-grid">
          <Card title="Learn" subTitle="Web Design" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." />
          <Card title="Learn" subTitle="FrontEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." />
          <Card title="Learn" subTitle="BackEnd Dev" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." />
          <Card title="Learn" subTitle="Python" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sit." />
        </div>
        </div>
      </main>

      <style jsx>{`
=======
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
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
        .container {
          min-height: 100vh;
          // padding: 0 0.5rem;
          // max-width: 97vw;
<<<<<<< HEAD
          background: #111517;
=======
          background: #111517 !important;
        }
        h1,h2,h3,h4.h5,h6{
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
          color: white;
        }
        .map{
          display: flex;
          justify-content: center;
        }
<<<<<<< HEAD
        .heading{
=======
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
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .heading-text{
          text-align: center;
          font-weight: bold;
          font-size: 46px;
          line-height: 114%;
<<<<<<< HEAD
=======
          position:relative;
          z-index:10;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
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
<<<<<<< HEAD
        }        
        .carousel-div{
          display: flex;
          justify-content: center;
          width: 80vw;
          margin: 0vh 10vw;
          // cursor: pointer;
          align-items: center;
        }
        .carousel-grid{
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
          gap: 9px;
        }
        #left-button{
          background: transparent;
          outline: none;
          border: none;
          cursor: pointer;
          height: 31px;
          width: 18px;
          padding: 0;
        }
        #right-button{
          background: transparent;
          outline: none;
          border: none;
          cursor: pointer;
          height: 31px;
          width: 18px;
          padding: 0;
        }
        .carousel-div :global(.card){
          min-height: 500px;
          padding: 20px;
        }
=======
          cursor: pointer;
        }
        .heading-button:hover{
          background-color: #5cadff;
        }        
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
        .div1{
          // display: flex;
          // flex-wrap:wrap;
          width: 80vw;
          margin: 0vh 10vw;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
          gap: 9px;
<<<<<<< HEAD
=======
          min-height: 600px;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
        }
        .div1 :global(.card){
          padding: 20px;
        }
<<<<<<< HEAD
        .div1 .div1-large{
          // width: 500px;
          // height: 600px;
          // flex-wrap: wrap;
        }
        .div1 .div1-medium{
          // width: 500px;
          gap: 9px;
          // height: 600px;
          display: grid;
          // flex-direction: column;
          // width: 100%;
          
        }
=======
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
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
        .div1 .div1-small{
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
          width: 100%;
        }
<<<<<<< HEAD
=======
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
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
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
<<<<<<< HEAD
          min-width: 300px;
          height: 450px;
=======
          min-width: 368px;
          height: 381px;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
          background: #111517;
          border: 1px solid #208FFF;
          box-sizing: border-box;
          border-radius: 4px;
          color: white;
<<<<<<< HEAD
          padding: 20px;
          // height: 381px;
        }
=======
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
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
        .div2 :global(.card:hover){
          background: #1C2124;
          box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.5);
          border: none;
        }
        .div3{
          background: linear-gradient(29.74deg, #111517 0.11%, rgba(17, 21, 23, 0.89) 20.95%, rgba(17, 21, 23, 0.78) 23.14%, rgba(17, 21, 23, 0) 78.53%), url('/static/assets/png/div3Image.png');
          background-size: cover;
          background-position: center;
          width: 100vw;
          padding: 5vh 10vw;
        }
        .div3 h3{
          font-size: 54px;
          line-height: 126.5%;
          margin: 0;
<<<<<<< HEAD
=======
          font-family: 'Nunito', sans-serif;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
        }
        .div3-grid{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 58px 0px;
        }
        .div3-grid :global(.card){
<<<<<<< HEAD
          max-height: 250px;
          width: 23%;
=======
          min-height: 250px;
          width: 20%;
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
          margin: 1%;
          min-width: 260px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-radius: 5px;
          padding: 20px;
        }
<<<<<<< HEAD
        .div3-grid :global(.card:hover){
          background: #208FFF !important;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
=======
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
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
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
<<<<<<< HEAD
  )
=======
    // </Layout>
  )
      }
>>>>>>> 05a3c21ce806d04a4f31d7edc3e430b2053e731e
}
