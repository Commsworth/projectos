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
                 <div className="divide"></div>
                 <li className="padding none"> <a href="">ProjectOS</a></li>
               </ul>
 
               
                   <ul className="nav-lg none"  id="myNav">
                   <li className="padding"> <a href="" className="none2">ProjectOS</a></li>
                <li className="padding"> <a href="/about">About</a> </li>
                <li className="padding"><a href="/license">Licensing</a></li>
                <li className="padding"><a href="">FAQs</a></li>
                 <div className="divide"></div>
                <li className="padding"><a href="">Contact</a></li>
                <li className="padding butt"><a href="">Get Demo</a></li>
                </ul>
                
            </div>
        </div>
    )
}
 
export default Nav