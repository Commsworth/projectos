import React  from 'react';
import NavBar from '../navbar/NavBar';
import HeroContent from '../herocontent/HeroContent';
import './Hero.css';


const Hero = ()=>{

    return(
        <header className="hero-wrapper">
         <NavBar />
         <HeroContent />
        </header>
    )
}

export default Hero;