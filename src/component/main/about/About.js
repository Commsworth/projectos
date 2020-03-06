import React, { Fragment } from 'react';
import AboutImage from '../../../asset/svg/aboutimage.svg';
import ArrowIcon from '../../../asset/svg/icons/arrow.svg';
import './About.css';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const  About = ()=>{

    return(
        <Fragment>
            <div className="container">
            <div className="space-50"></div>
            <ScrollAnimation animateIn="bounceInUp">
           <div className="row">
               <div className="col s12 center"><h5 className="blue-text">About Us</h5><br /></div>
           </div>
           <div className="row">
                <div className="col s12 m7">
                <div id="about-image-wrapper">
                <object type="image/svg+xml" data={AboutImage} className="aboutimage"></object>
                </div>
               
                </div>
                <div className="col s12 m5">
                <h4><b>Great</b> products <br /><b>Great</b> business</h4>
                <p>Commsworth is a premium ICT consultancy partner with dedicated specialty in delivering business productivity solutions to its clients</p>
                   <p>Consisting of a school of IT professionals, we drive business agility with keen focus on Server and Cloud Infrastructure, Managed Services and Support, Business Productivity/Process Management, Enterprise Networking and Security, Business Consulting, and lots more.</p>
                    <a href="#contact" className="link-text blue-text">Contact Us <img src={ArrowIcon} alt=""/></a>
                </div>
           </div>
           </ScrollAnimation>
         </div>
        </Fragment>
    )}

export default About;