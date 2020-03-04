import React,{ Fragment } from 'react';
import './Solution.css';
import DevOpIcon from '../../../asset/svg/icons/devops.svg';
import MarketingIcon from '../../../asset/svg/icons/marketing.svg';
import DesignIcon from '../../../asset/svg/icons/design.svg';
import ServerIcon from '../../../asset/svg/icons/server.svg';
import ArrowIcon from '../../../asset/svg/icons/arrow.svg';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


const  Solution = ()=>{

    return(
        <Fragment>
            <div className="space-50"></div>
            <br />
            <ScrollAnimation animateIn="bounceInUp">
        <div className="solution-wrapper">
            <div className="row">
                <div className="col s12 m12  center">
                    <h5 className="blue-text">Solutions</h5>
                    <h4><b>Best Solutions for you</b></h4>
                </div>
            </div>
            <div className="row">
                    <div className="col s12 m6">
                    <div className="solution-item hoverable">
                        <div className="icon-bg white z-depth-5">
                            <img src={DevOpIcon} className="responsive-img" alt=""/>
                        </div>
                        <div className="solution-item-content white-text">
                            <h5>Dev Ops</h5>
                            <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                        </div>
                    </div>
                    <div className="solution-item hoverable">
                        <div className="icon-bg white z-depth-5">
                            <img src={MarketingIcon} className="responsive-img" alt=""/>
                        </div>
                        <div className="solution-item-content white-text">
                            <h5>Presence &amp; Marketing</h5>
                            <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col s12 m6">
                        <div className="solution-item hoverable">
                        <div className="icon-bg white z-depth-5">
                            <img src={DesignIcon} className="responsive-img" alt=""/>
                        </div>
                        <div className="solution-item-content white-text">
                            <h5>Design</h5>
                            <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                        </div>
                        </div>

                        <div className="solution-item hoverable">
                        <div className="icon-bg white z-depth-5">
                            <img src={ServerIcon} className="responsive-img" alt=""/>
                        </div>
                        <div className="solution-item-content white-text">
                            <h5>Server Maintenance</h5>
                            <p>The project management system unifies every aspect required to execute projects into one single glass pane.</p>
                        </div>
                        </div>
                        <div>
                            <a href="ff.html" className="link-text right blue-text">Contact Sales <img src={ArrowIcon} alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollAnimation>
        </Fragment>
        );
}
export default Solution;