import React, { useEffect, useState } from 'react';
import Card from '../extraPageComponents/Card';
import { element } from 'prop-types';

const AboutUs = () => {
    const [scroll, setScroll] = useState(0);
    const [scrollWidth, setScrollWidth] = useState(0);
    const eff = useEffect(() => {
    })
    return (
        <div className="about-main">

            <div className="about" onScroll={e => {
                setScrollWidth(e.target.scrollWidth);
                setScroll(scrollWidth / e.target.scrollLeft);
            }}>
                <div className="about-large">
                    <Card title="Who we are" background="/landingPageImages/pngs/Tunnel.png" subIcon="/landingPageImages/pngs/icons/bluesemicircle.png" content="Commsworth is a premium ICT consultancy partner with dedicated specialty in delivering end to end tech-driven business initiatives and solutions to her teeming clients." content2="The Commsworth arsenal comprises of a school of top-tier ICT experts with seasoned competencies across various technologies, including Infrastructure, Cybersecurity, DevOps and Analytics, Business Automation and Productivity, Business Continuity, Product and Digital Strategy, and Managed Services." />
                </div>
                <div className="about--second">
                    <div className="about--second-top">
                        <Card title="Core Values" backcolour="#212425" subIcon="/landingPageImages/pngs/icons/bluesemicircle.png" content="Our Core Values define our personality and guides our relationship with staff, clients and partners. These include;​"
                            content2={
                                <div className="about-ul">
                                    <ul>
                                        <li style={{ listStyleImage: "url('/landingPageImages/pngs/liststyle.png')" }}>Customer Driven</li>
                                        <li style={{ listStyleImage: "url('/landingPageImages/pngs/liststyle.png')" }}>Value Centric</li>
                                        <li style={{ listStyleImage: "url('/landingPageImages/pngs/liststyle.png')" }}>Detail Oriented</li>
                                        <li style={{ listStyleImage: "url('/landingPageImages/pngs/liststyle.png')" }}>Quality of Service</li>
                                    </ul>
                                    <ul>
                                        <li style={{ listStyleImage: "url('/landingPageImages/pngs/liststyle.png')" }}>Teamwork and Collaboration</li>
                                        <li style={{ listStyleImage: "url('/landingPageImages/pngs/liststyle.png')" }}>Driving mental productivity</li>
                                        <li style={{ listStyleImage: "url('/landingPageImages/pngs/liststyle.png')" }}>Innovation Driven</li>
                                        <li style={{ listStyleImage: "url('/landingPageImages/pngs/liststyle.png')" }}>Integrity</li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                    <div className="about--second--small">
                        <Card title="Our Mission" backcolour="#205674" subIcon="/landingPageImages/pngs/icons/bluesemicircle.png" content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets​" />
                        <Card title="Our Vision" background="/landingPageImages/pngs/vr.png" subIcon="/landingPageImages/pngs/icons/bluesemicircle.png" content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" />
                    </div>
                </div>
            </div>
            <div className="indicators">
                <svg className={`${scroll > 200||scroll===0 ? 'svg' : ''} svg-margin`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                </svg>
                <svg className={`${scroll < 4 && scroll > 2.9 ? 'svg' : ''} svg-margin`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                </svg>
                <svg className={`${scroll < 2 && scroll > 1 ? 'svg' : ''} svg-margin`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="5.5" stroke="#208FFF" />
                </svg>
            </div>

            <style jsx>
                {`
                @media only screen and (min-width: 991px) {
  .about{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    gap: 9px;
    margin: 2vw auto;
    height: 600px;
  }
  .about .about-large {
    width: 500px;
    margin-right: 9px;
  }
  .about .about-large :global(.card p), .about .about-large :global(.card h3) {
    margin: 0px auto !important;
    width: 420px;
  }
  .about .about-large :global(.card p) {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 200%;
    /* or 32px */
    letter-spacing: 0.01em;
    width: 420px;
  }
  .about .about-large :global(.card .content) {
    padding: 1vw 0px;
    width: 420px;
  }
  .about .about-large :global(.card h3) {
    height: 44px;
    left: 212px;
    top: 2065px;

    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 119%;
    /* or 43px */
    width: 420px;
    /* identical to box height, or 48px */
  }
  .about .about--second {
    display: -ms-grid;
    display: grid;
    gap: 9px;
    -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
    width: 600px;
  }
  .about .about--second .about--second-top :global(.card h3), .about .about--second .about--second-top :global(.card p) {
    padding: 0px !important;
    margin-left: 27px;
  }
  .about .about--second .about--second-top :global(.card h3) {
    width: 165px;
    height: 33px;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 119%;
  }
  .about .about--second .about--second-top :global(.card .content) {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 208%;
    /* or 29px */

    letter-spacing: 0.01em;
    width: 511px;
    color: #f4f4f4;
  }
  .about .about--second .about--second-top :global(.card .content2) {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 223%;
    /* or 27px */

    letter-spacing: 0.01em;
    width: 420px;
    color: #f4f4f4;
  }
  .about .about--second .about--second-top :global(.card .content2 .about-ul) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .about .about--second .about--second-top :global(.card .content2 .about-ul ul) {
    margin: 0px;
    list-style-type: decimal;
    padding: 0px 20px;  
    }
  .about .about--second .about--second-top :global(.card .content2 .about-ul ul li) {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 223%;
    /* or 27px */
    letter-spacing: 0.01em;

    /* Placeholder */
    color: #F4F4F4;
  }
  .about .about--second--small {
    display: -ms-grid;
    display: grid;
    gap: 9px;
    -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
  }
  .about .about--second--small :global(.card) {
    padding: auto;
  }
  .about .about--second--small :global(.card h3), .about .about--second--small :global(.card p) {
    padding: 0px 12px !important;
    margin: 0;
  }
  .about .about--second--small :global(.card p) {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 208%;
    /* or 29px */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    letter-spacing: 0.01em;
  }
  .about .about--second--small :global(.card .title) {
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 119%;
    /* or 29px */


  }
  .indicators{
    display: none;
    }

}

@media only screen and (max-width: 990px) {
  .about {
    margin: 0vw auto 5vw;
    display: flex !important;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    width: 95vw;
  }
  .about :global(.card) {
    scroll-snap-align: start;
    margin-bottom: 1vw;
    min-width: 95vw;
  }
  .about :global(.card p),
  .about :global(.card h3) {
    padding: 0px 20px;
  }
  .about :global(.card p) {
    font-family: Muli;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 200%;
    /* or 28px */
    letter-spacing: 0.01em;
  }
  .about .about--second {
    display: flex !important;
  }
  .about .about--second :global(.card) {
    margin-bottom: 1vw;
  }
  .about .about--second :global(.card .content2 .about-ul) {
    display: inline;
  }
  .about .about--second :global(.card .content2 .about-ul ul) {
    margin: 0;
    padding: 0;
    padding-left: 20px !important;
  }
  .about .about--second .about--second--small {
    -ms-grid-columns: 100%;
        grid-template-columns: 100%;
    gap: 6px;
    display: grid;
  }
  .about .about--second .about--second--small :global(.card) {
    margin-bottom: 1vw;
  }
  .list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0px 0px;
  }
  .list ul {
    margin: 0px 0px 0px 0px;
    padding: 1rem;
  }
  .indicators{
    display: flex;
    justify-content: center;
    }
.indicators .svg{
        fill: #208FFF;
    }
    .indicators svg{
        margin: 5px;
    }

}
                `}
            </style>
        </div>
    );
};

export default AboutUs;