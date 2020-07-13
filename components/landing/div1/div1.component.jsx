import React, { useEffect, useState } from 'react';
import Card from '../../extra/card/card.component';
import './div1.styles.scss';
import { element } from 'prop-types';

const Div1 = () => {
    const [scroll, setScroll] = useState(0);
    const [scrollWidth, setScrollWidth] = useState(0);
    const eff = useEffect(() => {
    })
    return (
        <div className="div1-main">

            <div className="div1" onScroll={e => {
                setScrollWidth(e.target.scrollWidth);
                setScroll(scrollWidth / e.target.scrollLeft);
            }}>
                <div className="div1-large">
                    <Card title="Who we are" background="/pngs/Tunnel.png" subIcon="/static/svg/big-blue-semi-circle.svg" content="Commsworth is a premium ICT consultancy partner with dedicated specialty in delivering end to end tech-driven business initiatives and solutions to her teeming clients." content2="The Commsworth arsenal comprises of a school of top-tier ICT experts with seasoned competencies across various technologies, including Infrastructure, Cybersecurity, DevOps and Analytics, Business Automation and Productivity, Business Continuity, Product and Digital Strategy, and Managed Services." />
                </div>
                <div className="div1--second">
                    <div className="div1--second-top">
                        <Card title="Core Values" backcolour="#212425" subIcon="/static/svg/big-blue-semi-circle.svg" content="Our Core Values define our personality and guides our relationship with staff, clients and partners. These include;​"
                            content2={
                                <div className="div1-ul">
                                    <ul>
                                        <li style={{ listStyleImage: "url('/pngs/liststyle.png')" }}>Customer Driven</li>
                                        <li style={{ listStyleImage: "url('/pngs/liststyle.png')" }}>Value Centric</li>
                                        <li style={{ listStyleImage: "url('/pngs/liststyle.png')" }}>Detail Oriented</li>
                                        <li style={{ listStyleImage: "url('/pngs/liststyle.png')" }}>Quality of Service</li>
                                    </ul>
                                    <ul>
                                        <li style={{ listStyleImage: "url('/pngs/liststyle.png')" }}>Teamwork and Collaboration</li>
                                        <li style={{ listStyleImage: "url('/pngs/liststyle.png')" }}>Driving mental productivity</li>
                                        <li style={{ listStyleImage: "url('/pngs/liststyle.png')" }}>Innovation Driven</li>
                                        <li style={{ listStyleImage: "url('/pngs/liststyle.png')" }}>Integrity</li>
                                    </ul>
                                </div>
                            }
                        />
                    </div>
                    <div className="div1--second--small">
                        <Card title="Our Mission" backcolour="#205674" subIcon="/static/svg/semi-circle.svg" content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets​" />
                        <Card title="Our Vision" background="/pngs/vr.png" subIcon="/static/svg/semi-circle.svg" content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" />
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
        </div>
    );
};

export default Div1;