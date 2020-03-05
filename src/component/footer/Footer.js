import React from 'react';
import './Footer.css';
import FacebookIcon from '../../asset/svg/icons/facebook.svg';
import TwitterIcon from '../../asset/svg/icons/twitter.svg';
import LinkedinIcon from '../../asset/svg/icons/linkedin.svg';
import ContactForm from '../contactform/ContactForm';

const Footer = ()=>{

    return(
    <footer className="page-footer" id="contact">
        <div className="container">
            <div className="row">
                <div className="col s12 m8">
                    <h5>Got an enquiry?.<br />
                    Our customer care team will address it</h5>
                <ContactForm />
                </div>
                <div className="col s12 m4">
                    <br />
                    <h4 className="white-text" style={{fontWeight: 'bold'}}>Feel free<br />to contact us</h4>
                    <h6>Address</h6>
                    <p>225, Ikorodu Crescent,<br /> Dolphin Estate, Ikoyi Lagos</p>
                
                    <h6>Phone</h6>
                    <p>+234 8180321046</p>

                    <h6>Email</h6>
                    <p>info@commsworth.com</p>
              
              <div className="footer-icon-wrapper">
                    <img src={LinkedinIcon} alt=""/>
                    <img src={FacebookIcon} alt=""/>
                    <img src={TwitterIcon} alt=""/>
              </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;