import React from 'react';
import Card from '../../extra/card/card.component';
import { bigBlueSemiCircle, blueSemiCircle } from '../../../static/assets/svgs';
import './div1.styles.scss';

const Div1 = () => {
    return (
        <div className="div1">
            <div className="div1-large">
                <Card title="Who we are" background="/pngs/Tunnel.png" subTitle={bigBlueSemiCircle} content="Commsworth is a premium ICT consultancy partner with dedicated specialty in delivering end to end tech-driven business initiatives and solutions to her teeming clients." content2="The Commsworth arsenal comprises of a school of top-tier ICT experts with seasoned competencies across various technologies, including Infrastructure, Cybersecurity, DevOps and Analytics, Business Automation and Productivity, Business Continuity, Product and Digital Strategy, and Managed Services." />
            </div>
            <div className="div1--second">
                <div className="div1--second-top">
                    <Card title="Core Values" backcolour="#212425" subTitle={blueSemiCircle} content="Our Core Values define our personality and guides our relationship with staff, clients and partners. These include;​"
                        content2={
                            <div style={{ display: "flex" }}>
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
                    <Card title="Our Mission" backcolour="#205674" subTitle={blueSemiCircle} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets​" />
                    <Card title="Our Vision" background="/pngs/vr.png" subTitle={blueSemiCircle} content="To enable our partners maximize best-in-class technology in attaining business goals at the minimal budgets" />
                </div>
            </div>
        </div>
    );
};

export default Div1;