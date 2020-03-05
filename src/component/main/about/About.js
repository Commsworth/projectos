import React, { Fragment } from 'react';
import AboutImage from '../../../asset/img/about.png';
import ArrowIcon from '../../../asset/svg/icons/arrow.svg';
import PlayIcon from '../../../asset/svg/icons/play.svg';
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
                    <img src={AboutImage} className="responsive-img" className="about-img" alt=""/>
                    <div id="about-icon-wrapper">
                    <img src={PlayIcon} alt="" className="icon"/>
                    </div>
                   
                </div>
               
                </div>
                <div className="col s12 m5">
                <h4><b>Great</b> products <br /><b>Great</b> business</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet viverra amet, feugiat facilisis 
                    at amet. Mauris turpis turpis suspendisse ut. Pharetra, sed velit congue turpis amet 
                    elementum tortor. Sit posuere pellentesque arcu, venenatis. Diam suspendisse at eget 
                    blandit. Sed diam aliquet at tortor, lectus elit. Interdum mi egestas etiam nibh. 
                    Mauris sem venenatis ultricies laoreet et, vestibulum, vel. Viverra et aliquam ut at. Risus duis velit eget iaculis posuere. Sem nunc massa consequat vehicula.</p>
                    <a href="inde.html" className="link-text blue-text">Contact Us <img src={ArrowIcon} alt=""/></a>
                </div>
           </div>
           </ScrollAnimation>
         </div>
        </Fragment>
    )}

export default About;