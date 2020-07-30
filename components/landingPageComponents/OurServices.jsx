import React, { useState } from 'react';
import Card from '../extraPageComponents/Card';
import ArrowLink from '../extraPageComponents/ArrowLink';


const OurServices = () => {
    const [display, setDisplay] = useState(true);
    return (
        <>
            <div className="our-services">
                <Card title={<img src="/pngs/devops.png" />} subTitle="DevOps & Analytics" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />
                <Card title={<img src="/pngs/businessAutomation.png" />} subTitle="Business Automation and Productivity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />
                <Card title={<img src="/pngs/businessContinuity.png" />} subTitle="Business Continuity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />
                <Card title={<img src="/pngs/managedServices.png" />} subTitle="Managed Services" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />
                <Card title={<img src="/pngs/product.png" />} subTitle="Product and Digital Strategy" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />
                {display ? <Card title={<img src="/pngs/cyberSecurity.png" />} subTitle="Cybersecurity" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} /> :
                    <Card title={<img src="/pngs/cyberSecurity.png" />} subTitle="Infrastructure" content="Our Core Values define our personality and guides our relationship with staff, clients and partners." href="/contacts" link={<ArrowLink text="Contact Us" />} />}
            </div>
            <div className='our-services'>
                <svg className={display ? 'our-services-svg' : ''} onClick={() => { setDisplay(true) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                </svg>

                <svg className={display ? ' ' : 'our-services-svg'} onClick={() => { setDisplay(false) }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                </svg>
            </div>
            <style jsx>
                {`
    .our-services svg{
        margin: 0px 5px 0px 5px;
        cursor: pointer;
            }
       .our-services-svg{
         fill: #208FFF; 
         margin-left: 10px 10px;
       }
       .our-services{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 80vw;
        margin: 2vh 10vw;
      }
      .our-services :global(.card){
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
        height: 77px;
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
      }
      @media only screen and (max-width: 570px) {
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
          .our-services{
            width: 80vw !important;
            margin: 0vh auto !important;
          }
            .our-services :global(.card .title){
              height: 90px;
            }
            .our-services :global(.card .sub-title){
            padding: 0px !important;
            height: 58px !important;
            }
            .our-services :global(.card p){
            width: 100% !important;
            height: 125px !important;
            }
            .our-services :global(.card){
              //min-width: 300px;
              min-width: 100% !important;
              width: 100% !important;
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
      }
    `}
            </style>
        </>

    );
};

export default OurServices;