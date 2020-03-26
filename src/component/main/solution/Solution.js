import React,{ Fragment } from 'react';
import './Solution.css';
import DevOpIcon from '../../../asset/svg/icons/devops.svg';
import MarketingIcon from '../../../asset/svg/icons/marketing.svg';
// import DesignIcon from '../../../asset/svg/icons/design.svg';
import CloudIcon from '../../../asset/svg/icons/cloud.svg';
import CyberIcon from '../../../asset/svg/icons/cyber.svg';
import DataCenterIcon from '../../../asset/svg/icons/datacenter.svg';
import ServerIcon from '../../../asset/svg/icons/server.svg';
import ArrowIcon from '../../../asset/svg/icons/arrow.svg';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


const  Solution = ()=>{

    return(
        <Fragment>
            <div className="space-50"></div>
            <br />
          
        <div className="solution-wrapper">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <div className="row">
                <div className="col s12 m12  center">
                    <h5 className="blue-text">Solutions</h5>
                    <h4><b>Best Solutions for you</b></h4>
                </div>
            </div>
            </ScrollAnimation>
            <div className="row">
                    <div className="col s12 m6">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
                    <div className="solution-item hoverable">
                        <div className="icon-bg white z-depth-5">
                            <img src={DevOpIcon} className="responsive-img" alt=""/>
                        </div>
                        <div className="solution-item-content white-text">
                            <h5>Software Development </h5>
                            <p>We are focused on developing data-oriented applications tailored to solve a vast array of business requirements.</p>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                    <div className="solution-item hoverable">
                        <div className="icon-bg white z-depth-5">
                            <img src={CloudIcon} className="responsive-img" alt=""/>
                        </div>
                        <div className="solution-item-content white-text">
                            <h5>Cloud &amp; Computing</h5>
                            <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                        </div>
                    </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
                    <div className="solution-item hoverable">
                        <div className="icon-bg white z-depth-5">
                            <img src={MarketingIcon} className="responsive-img" alt=""/>
                        </div>
                        <div className="solution-item-content white-text">
                            <h5>Presence &amp; Marketing</h5>
                            <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                        </div>
                    </div>
                    </ScrollAnimation>
                    </div>
                    <div className="col s12 m6">
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                        <div className="solution-item hoverable">
                            <div className="icon-bg white z-depth-5">
                                <img src={CyberIcon} className="responsive-img" alt=""/>
                            </div>
                            <div className="solution-item-content white-text">
                                <h5>Cyber Security</h5>
                                <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                            </div>
                        </div>
                        </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={500}>
                        <div className="solution-item hoverable">
                            <div className="icon-bg white z-depth-5">
                                <img src={DataCenterIcon} className="responsive-img" alt=""/>
                            </div>
                            <div className="solution-item-content white-text">
                                <h5>Datacenter Solutions</h5>
                                <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                            </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={600}>
                        <div className="solution-item hoverable">
                            <div className="icon-bg white z-depth-5">
                                <img src={ServerIcon} className="responsive-img" alt=""/>
                            </div>
                            <div className="solution-item-content white-text">
                                <h5>Server Maintenance</h5>
                                <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                            </div>
                        </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={700}>
                        <div>
                            <a href="#contact" className="link-text right blue-text">Contact Sales <img src={ArrowIcon} alt=""/></a>
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </Fragment>
        );
}
export default Solution;