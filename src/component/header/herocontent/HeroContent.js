import React from 'react';
import './HeroContent.css';
import HeroBg from '../../../asset/svg/herobg.svg';


const HeroContent = ()=>{

    return(
        <div id="outer-div">
<div className="container white-text center hero-content">
    <h4>Digital agency team that will<br /> grow your business</h4>
    <h5>Redefine your Project Management lifecycle with ProjectOS Enterprise-Class Project Management Platform</h5>
<div className="btn-wrapper center">
    <button className="btn__blue btn">Contact</button>
    <button className="btn__transparent btn transparent">About</button>
</div>
</div>
<div className="hero-image-wrapper">
    <div className="hero-image-wrapper-overlay"></div>
    <img src={HeroBg} alt=""/>
</div>
</div>
    );
}
export default HeroContent;