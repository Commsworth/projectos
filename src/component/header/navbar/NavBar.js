import React from 'react';
import Logo from '../../../asset/svg/logo.svg';
import { FaBars } from 'react-icons/fa'
import './NavBar.css';
import { Link } from 'react-router-dom';

function Nav() {
  function dropDown() {
    var x = document.getElementById("myNav");
    if (x.className === "none") {
      x.className += " block";
    } else {
      x.className = "none";
    }
  }
  return (
    <div>

      <div className="nav">

        <ul className="nav-sm">
          <li className="padding dp"> <a href="/commsworth/"><img src={Logo} alt="Logo" /></a>
            <button onClick={dropDown}><FaBars onClick={dropDown} /></button>
          </li>
        </ul>


        <ul className="nav-lg none" id="myNav">
          <li className="padding"> <Link to="/commsworth/about" className="option">
            <p>About Us</p>
          </Link>
          </li>
          <li className="padding"> <Link to="/commsworth/portfolio" className="option">
            <p>Portfolio</p>
          </Link>
          </li>
          <li className="padding"> <Link to="#" className="option">
            <p>Blog</p>
          </Link>
          </li>
          <div className="divide"></div>
          <li className="padding butt"> <Link to="/commsworth/contact" className="option">
            <p>Contact</p>
          </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Nav