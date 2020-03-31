import React from 'react';
import Logo from '../../../asset/svg/logo.svg';
import { FaBars } from 'react-icons/fa' 
import './NavBar.css';
 
function Nav() {
    function dropDown() {
        var x = document.getElementById("myNav");
        if (x.className === "none") {
          x.className += " block";
        } else{
          x.className = "none";
        }
    }
    return (
        <div>
 
             <div className="nav">  
            
               <ul className="nav-sm">
                <li className="padding dp"> <a href="/"><img src={Logo} alt="Logo" /></a> 
                <button onClick={dropDown}><FaBars onClick={dropDown}/></button>
                </li>
               </ul>
 
               
                   <ul className="nav-lg none"  id="myNav">
                <li className="padding"> <a href="/about">About Us</a> </li>
                <li className="padding"><a href="/license">Portfolio</a></li>
                <li className="padding"><a href="">Blog</a></li>
                 <div className="divide"></div>
                <li className="padding butt"><a href="">Contact</a></li>
                </ul>
                
            </div>
        </div>
    )
}
 
export default Nav