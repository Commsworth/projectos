import React, { useState, Fragment } from 'react';
import Card from '../extraPageComponents/Card';
import ArrowLink from '../extraPageComponents/ArrowLink';


const OurServices = () => {
    const [display, setDisplay] = useState(true);
    return (
        <div className="our-services-main">
            <div className="our-services">
                <Card title={<img src="/landingpageimages/pngs/icons/devops.png" />} subTitle="DevOps & Analytics" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contact" link={<ArrowLink text="Contact Us" />} />
                <Card title={<img src="/landingpageimages/pngs/icons/businessAutomation.png" />} subTitle="Business Automation and Productivity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contact" link={<ArrowLink text="Contact Us" />} />
                <Card title={<img src="/landingpageimages/pngs/icons/businessContinuity.png" />} subTitle="Business Continuity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contact" link={<ArrowLink text="Contact Us" />} />
                <Card title={<img src="/landingpageimages/pngs/icons/managedServices.png" />} subTitle="Managed Services" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contact" link={<ArrowLink text="Contact Us" />} />
                <Card title={<img src="/landingpageimages/pngs/icons/product.png" />} subTitle="Product and Digital Strategy" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contact" link={<ArrowLink text="Contact Us" />} />
                {display ? <Card title={<img src="/landingpageimages/pngs/icons/cyberSecurity.png" />} subTitle="Cybersecurity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contact" link={<ArrowLink text="Contact Us" />} /> :
                    <Card title={<img src="/landingpageimages/pngs/icons/cyberSecurity.png" />} subTitle="Infrastructure" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contact" link={<ArrowLink text="Contact Us" />} />
                  }
                  < div className="mobile-tablet">
                  <Card title={<img src="/landingpageimages/pngs/icons/cyberSecurity.png" />} subTitle="Infrastructure" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contact" link={<ArrowLink text="Contact Us" />} />
                  </ div>
            </div>
            <div className="mobile-tablet">
              <p style={{fontSize: "15px", color: 'white', textAlign: 'center'}}>◀ Swipe to see more ▶</p>
            </div>
            <div className="desktop">
            <div className='our-services'>
                <svg className={display ? 'our-services-svg' : ''} onClick={() => { setDisplay(true) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                </svg>

                <svg className={display ? ' ' : 'our-services-svg'} onClick={() => { setDisplay(false) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                </svg>
            </div>
            </div>
            <style jsx>
                {`
    .our-services svg{
        margin: 30px 5px 0px 5px;
        cursor: pointer;
            }
       .our-services-svg{
         fill: #208FFF; 
         margin-left: 10px 10px;
       }
       .our-services-main{
         margin: 0px auto 59px;
       }
       .our-services{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 80vw;
        margin: 0vh 10vw;
      }
      .our-services :global(.card){
        margin: 12.5px;
        width: 360px;
        min-height: 381px;
        background: #111517;
        border: 1px solid #208FFF;
        box-sizing: border-box;
        border-radius: 4px;
        color: white;
        padding: 35px;
        // height: 381px;
      }
      .our-services :global(.card .title img){
        height: 60px;
      }
      .our-services :global(.card h3){
        font-size: 24px;
        line-height: 119%;
        //width: 243px;
      }
      .our-services :global(.card:nth-of-type(2) .sub-title){
        //height: 64px;
        padding-top: 0px;
      }
      .our-services :global(.card:nth-of-type(5) .sub-title){
        //height: 64px;
        padding-top: 0px;
      }
      .our-services :global(.card .sub-title){
        //width: 243px;
        //height: 32px;
        padding-top: 32px;

      }
      .our-services :global(.card .link){
        font-size: 18px;
        line-height: 109%;
        align-self: flex-end;
        height: 16px;
      }
      .our-services :global(.card .content2){
        display:none;
      }
      .our-services :global(.card p){
        font-size: 15px;
        line-height: 185%;
        //width: 281px;
        //height: 77px;
        color: #f4f4f4 !important;
      }
      .our-services :global(.card:hover){
        background: #1C2124;
        box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.5);
        border: none;
      }
      
      //MOBILE
      //AND
      //TABLET
      //VIEWS
      @media only screen and (max-width: 990px) {
        .our-services :global(.card .link){
            font-size: 18px;
            line-height: 109%;
            //margin-left: 30%;
          }  
        .our-services :global(.card),.our-services div :global(.card){
          width: 360px !important;
          min-width: 360px !important;
          height: 320px !important;
          }  
          .our-services{
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-start;
            flex-direction: row;
            display: flex !important;
            overflow-x: scroll;
            overflow-y: hidden;
            scroll-snap-type: x mandatory;
            width: 90vw;
            margin: 2vh auto;
          }

      }
      @media only screen and (max-width: 570px) {
          .our-services{
            width: 90vw !important;
            margin: 0vh auto !important;
          }
            .our-services :global(.card .title){
              height: 90px;
            }
            .our-services :global(.card .sub-title){
            padding: 0px !important;
            //height: 58px !important;
            }
            .our-services :global(.card p){
            width: 100% !important;
            //height: 125px !important;
            }
            .our-services :global(.card){
              //min-width: 300px;
              min-width: 100% !important;
              width: 100% !important;
              padding: 40px 15px !important;
            }
      }
    `}
            </style>
        </div>

    );
};

export default OurServices;