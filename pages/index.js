import Head from 'next/head'
import Card from '../components/extra/card/card.component'
import { blueSemiCircle, devOps, map, businessAutomation, businessContinuity, product, managedServices, cyberSecurity, infrastructure, leftArrow, rightArrow } from '../static/assets/svgs';
import TitleDiv from '../components/extra/titleDiv/titleDiv';
// import featuredImage from '../assets/png/featuredImage.png'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Commsworth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="heading">
          <h3 className="heading-text">Digital Solutions to <br/> accelerate your business. </h3>
          <button className="heading-button">Learn More</button>
        </div>
        <br />
        <br />
        <div className="map">
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
        <br />
        <br />
        <TitleDiv text="About Us" />
        <br />
        <br />
        <div className="div1">
          <div className="div1-large">
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
            </div>
          </div>
        </div>
        <br />
        <br />
        <TitleDiv text="Our Services" />
        <br />
        <br />
        <div className="div2">
          <Card title={devOps} subTitle="DevOps & Analytics" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={businessAutomation} subTitle="Business Automation and Productivity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={businessContinuity} subTitle="Business Continuity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={product} subTitle="Product and Digital Strategy" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={managedServices} subTitle="Managed Services" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={cyberSecurity} subTitle="Cybersecurity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
          <Card title={infrastructure} subTitle="Infrastructure" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." />
        </div>
        <br />
        <br />
        <div className="div3">
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

      <footer>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          // padding: 0 0.5rem;
          // max-width: 97vw;
          background: #111517;
          color: white;
        }
        .map{
          display: flex;
          justify-content: center;
        }
        .heading{
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .heading-text{
          text-align: center;
          font-weight: bold;
          font-size: 46px;
          line-height: 114%;
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
        .div1{
          // display: flex;
          // flex-wrap:wrap;
          width: 80vw;
          margin: 0vh 10vw;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(550px, 1fr));
          gap: 9px;
        }
        .div1 :global(.card){
          padding: 20px;
        }
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
        .div1 .div1-small{
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
          width: 100%;
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
          min-width: 300px;
          height: 450px;
          background: #111517;
          border: 1px solid #208FFF;
          box-sizing: border-box;
          border-radius: 4px;
          color: white;
          padding: 20px;
          // height: 381px;
        }
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
        }
        .div3-grid{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 58px 0px;
        }
        .div3-grid :global(.card){
          max-height: 250px;
          width: 23%;
          margin: 1%;
          min-width: 260px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border-radius: 5px;
          padding: 20px;
        }
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
    </div>
  )
}
