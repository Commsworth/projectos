import React from 'react';
import './Footer.css';
import FacebookIcon from '../../../asset/svg/icons/facebook.svg';
import TwitterIcon from '../../../asset/svg/icons/twitter.svg';
import LinkedinIcon from '../../../asset/svg/icons/linkedin.svg'; 
const Footer = ()=>{
 
  return(
       <div>
         <div className="sc">
          <div className="socials">
        <div className="follow">
          <p>Follow us:</p>
          <img src={TwitterIcon} alt="" srcset="" />
          <img src={FacebookIcon} alt="" srcset="" />
          <img src={LinkedinIcon} alt="" srcset="" />
        </div>
        <div className="share">
          <p>Share on:</p>
          <img src={TwitterIcon} alt="" srcset="" />
          <img src={FacebookIcon} alt="" srcset="" />
          <img src={LinkedinIcon}alt="" srcset="" />
        </div>
      </div>
      </div>

      <div className="foot">
      <div className="footer">
        <ul>
          <a href="#" className=" footer-brand"
            >ProjectOS</a>
          <li>© 2019</li>
        </ul>
        <ul>
          <a href="#">ProjectOS</a>
          <li><a href="about.html">About</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="faqs.html">FAQs</a></li>
          <li><a href="license.html">Licensing</a></li>
        </ul>

        <ul>
          <a href="#">Follow US</a>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Linkedin</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>

        <ul>
          <a href="#">LEGAL</a>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Cookies Policy</a></li>
        </ul>

        <ul>
          <a href="contact.html">CONTACT</a>
          <li><a href="#">+2348180321046</a></li>
          <li><a href="#">support@projectos.com</a></li>
        </ul>
      </div>
      
      <div className="pda-border">
      <ul className="pda">
          <li><a href="">Contact ProjectOS</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Terms of Service</a></li>
          <li><a href="">FAQs</a></li>
      </ul>
      </div>
      </div>
      </div>

  );
}

export default Footer;