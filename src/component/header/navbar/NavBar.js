import React from 'react';
import Logo from '../../../asset/svg/logo.svg';
import './NavBar.css';

const  NavBar = ()=>{


    return(
        <nav className="transparent z-depth-0">
        <div className="nav-wrapper nav__padding">
        <a href="index.html" className="brand-logo"><img src={Logo} alt="Logo"/></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a className="contact__link btn bt-flat" href="sass.html">Contact</a></li>
      </ul>
    </div>
  </nav>
    )
}

export default NavBar;